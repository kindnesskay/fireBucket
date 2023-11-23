import { Shop2 } from "@mui/icons-material";
import { Typography, Box, Button } from "@mui/material";
import { useState } from "react";

function ProductPage({ product, handleAddToCart }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
      }}
    >
      <img
        height={200}
        width={200}
        alt={product.image.name}
        src={product.image.src}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <Typography>{product.name}</Typography>
        <Typography>{product.price}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button variant="outlined" color="secondary">
          Buy now
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleAddToCart}
          startIcon={<Shop2 />}
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );
}

export default ProductPage;
