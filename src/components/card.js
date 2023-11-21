import { IconButton, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
function Card({ name, price, image }) {
  if (!image) image = { src: "/orange.jpg", name: "default" };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F3F1F5",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 200,
        maxHeight: 200,
        height: "auto",
        width: "auto",
        padding: 10,
        borderRadius: 5,
        aspectRatio: 1,
        gap: 5,
      }}
    >
      <div>
        <img
          loading="lazy"
          height={80}
          width={90}
          src={image.src}
          alt={image.name}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 14,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <span style={{ fontWeight: "bold" }}>{name}</span>
          <span style={{ color: "purple", fontWeight: "bold" }}>${price}</span>
        </div>

        <IconButton
          style={{
            width: 20,
            height: 20,
            backgroundColor: "purple",
          }}
        >
          <Add sx={{ color: "white", height: 15, width: 15 }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Card;
