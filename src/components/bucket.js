import { useEffect, useState } from "react";
import { db, Auth } from "../config/firebase";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Activity from "./item";

export default function Bucket() {
  const bucketItems = collection(db, "bucket");
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [success, setSuccess] = useState("");
  const handleDelete = async (id) => {
    try {
      const selected = await doc(db, "bucket", id);
      const deleteItem = await deleteDoc(selected);
      setSuccess("success");
    } catch (error) {
      console.error(error);
    }
  };
  const handleAdd = async () => {
    if (!name) return;
    try {
      await addDoc(bucketItems, { name: name, userID: Auth.currentUser.uid });
      setName("");

      setSuccess("success");
    } catch (error) {
      setSuccess("failed");
      console.error(error);
    }
  };
  const getItems = async () => {
    try {
      const data = await getDocs(bucketItems);
      const filterd_data = data.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name };
      });
      setItems(filterd_data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const run = (async) => {
      getItems();
    };
    run();
    setSuccess("");
  }, [success]);
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {!items.length && <p>No item in bucket yet</p>}
        {items.map((item) => {
          return (
            <Activity
              key={item.id}
              name={item.name}
              handleDelete={() => handleDelete(item.id)}
            />
          );
        })}
      </ul>
    </div>
  );
}
