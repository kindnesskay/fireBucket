import "./cart.css";
import { Box, Typography, Button } from "@mui/material";
import { Shop2 } from "@mui/icons-material";
import Quantity from "./quantity";
export default function CartItem({ product, getQuantity }) {
  const getItem = (count) => {
    getQuantity(product.id, count);
  };
  return (
    <Box className="cart_item_container">
      <img
        className="cart_item_image"
        height={100}
        width={100}
        alt={product.image.name}
        src={product.image.src}
      />
      <Box className="cart_item_details">
        <Typography>{product.name}</Typography>
        <Typography>{product.price}</Typography>
      </Box>
      <Box className="cart_item_quantity">
        <Quantity getQuantity={getItem} value={product.quantity} />
      </Box>
    </Box>
  );
}
