import { Add } from "@mui/icons-material";
import { useState } from "react";
import { IconButton } from "@mui/material";
export default function NewImageBox({ getImage }) {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div
      style={{
        height: 120,
        width: 120,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {imageUrl && (
        <img
          height={120}
          width={120}
          src={imageUrl}
          alt="image from file"
          style={{ position: "absolute" }}
        />
      )}

      <IconButton>
        <input
          style={{ opacity: 0, position: "absolute" }}
          type="file"
          name="image"
          accept="png jpg jpeg "
          onChange={(e) => {
            getImage(e.target.files[0]);
            setImageUrl(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <Add />
      </IconButton>
    </div>
  );
}
