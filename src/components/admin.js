import React, { useState } from "react";
import Logout from "./logout";
import { CloudUpload } from "@mui/icons-material";
import { Box, Typography, TextField, Button } from "@mui/material";
import NewImageBox from "./newImageBox";
import { addDoc, collection } from "firebase/firestore";
import { Auth, db, storage } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
function Admin({ user }) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const bucketItems = collection(db, "bucket");
  const [response, setResponse] = useState("");

  const startUpload = async () => {
    if (!name || !price || !image) return;
    setResponse("loading..");
    try {
      const fileFolderRef = ref(storage, `fruits/${image.name}`);
      await uploadBytes(fileFolderRef, image);
      await addDoc(bucketItems, {
        name: name,
        userID: Auth.currentUser.uid,
        price: price,
        imageSrc: `gs://bucket-8f9d7.appspot.com/fruits/${image.name}`,
      });
      setResponse("success");
      setName("");
      setPrice("");
    } catch (error) {
      setResponse("failed");
      console.error(error);
    }
  };
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
