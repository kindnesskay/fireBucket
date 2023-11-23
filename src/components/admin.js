import React, { useEffect, useState } from "react";
import Logout from "./logout";
import { CloudUpload } from "@mui/icons-material";
import { Box, Typography, TextField, Button } from "@mui/material";
import NewImageBox from "./newImageBox";
import { addDoc, collection } from "firebase/firestore";
import { Auth, db, storage } from "../config/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { uid } from "uid";
function Admin({ user }) {
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const bucketItems = collection(db, "bucket");
  const [response, setResponse] = useState("");

  const handleUpload = async () => {
    const fileFolderRef = ref(storage, `fruits/${uid() + image.name}`);
    const uploadTask = uploadBytesResumable(fileFolderRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.error(error);
        return false;
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImageUrl(url);
        });
      }
    );
  };
  const startUpload = async () => {
    if (!name || !price || !image) return;
    setResponse("loading..");
    await handleImageUpload();
    try {
    } catch (error) {
      setResponse("failed");
      console.error(error);
    }
  };
  const handleImageUpload = async () => {
    try {
      await handleUpload();
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  const handleDb = async () => {
    try {
      await addDoc(bucketItems, {
        name: name,
        userID: Auth.currentUser.uid,
        price: price,
        imageSrc: imageUrl,
      });
      setResponse("success");
      setName("");
      setPrice("");
      setImageUrl("");
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  useEffect(() => {
    if (!imageUrl) return;
    handleDb();
  }, [imageUrl]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 2,
        position: "relative",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: response == "success" ? "green" : "red",
            textAlign: "center",
            fontWeight: "bold",
            padding: 1,
          }}
        >
          {response}
        </Typography>
      </Box>
      <NewImageBox getImage={setImage} />
      <TextField
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        type="number"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={startUpload}>
        <CloudUpload />
      </Button>
      <Logout nullUser={user} />
    </Box>
  );
}

export default Admin;
