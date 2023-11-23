import { useEffect, useState } from "react";
import "./cart.css";
import { Add, Remove } from "@mui/icons-material";
export default function Quantity({ getQuantity, value }) {
  const [quantity, setQuantity] = useState(value);
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
    getQuantity(Number(quantity));
  }, [quantity]);
  return (
    <div className={"set_quantity"}>
      <button onClick={reduce}>
        <Remove />
      </button>
      <span>{quantity}</span>
      <button onClick={increase}>
        <Add />
      </button>
    </div>
  );
}
