import CartItem from "./CartItem";
import { useState, useEffect } from "react";
import {
  getCartItems,
  deleteCartItem,
  editCart,
  db_name,
} from "../tools/cartActions";

function Cart() {
  const [cartArray, setCartArray] = useState([]);
  const handleChange = (id, count) => {
    const deletFromCart = () => {
      deleteCartItem(db_name, id, setCartArray);
    };
    editCart(db_name, id, count);
    if (count == 0) return deletFromCart();
  };

  useEffect(() => {
    let items = getCartItems(db_name);
    setCartArray(items);
  }, []);
  return (
    <div style={{ width: 200 }}>
      {!cartArray.length && (
        <h5 style={{ textAlign: "center" }}>No item in cart</h5>
      )}
      {cartArray &&
        cartArray.map((item) => {
          return (
            <CartItem
              key={item.id}
              product={item}
              handleChange={handleChange}
            />
          );
        })}
    </div>
  );
}

export default Cart;
