import "./cart.css";
import { Remove, Add } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
export default function CartItem({ product, handleChange }) {
  const [quantity, setQuantity] = useState(product.quantity);
  const increase = () => {
    if (quantity == 99) return;
    setQuantity(quantity + 1);
    return quantity;
  };
  const reduce = () => {
    if (quantity == 0) return;
    setQuantity(quantity - 1);
    return quantity;
  };
  useEffect(() => {
    handleChange(product.id, quantity);
  }, [quantity]);

  return (
    <Box className="cart_item_container">
      <img
        className="cart_item_image"
        height={100}
        width={100}
        alt={product.name}
        src={product.image}
      />
      <Box className="cart_item_details">
        <Typography>{product.name}</Typography>
        <Typography>{product.price}</Typography>
      </Box>
      <Box className="cart_item_quantity">
        <div className={"set_quantity"}>
          <button onClick={reduce}>
            <Remove />
          </button>
          <span>{quantity}</span>
          <button onClick={increase}>
            <Add />
          </button>
        </div>
      </Box>
    </Box>
  );
}
