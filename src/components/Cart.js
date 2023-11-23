import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import CartItem from "./CartItem";

function Cart({ handleClose, items, handleCartButton, itemQuantity }) {
  return (
    <div className="side_panel cart">
      <Button
        style={{ width: 100 }}
        variant="contained"
        color="secondary"
        onClick={() => handleClose(false)}
      >
        <Close />
      </Button>
      {items &&
        items.map((item) => {
          console.log(item.name);
          return (
            <CartItem
              getQuantity={itemQuantity}
              key={item.id}
              product={item}
              handleAddToCart={handleCartButton}
            />
          );
        })}
    </div>
  );
}

export default Cart;
