import "./App.css";
import { useState, useEffect } from "react";
import SignUp from "./components/signUp";
import Login from "./components/login";
import Fruits from "./components/fruits";
import Hero from "./components/hero";
import Layout from "./components/layout";
import Admin from "./components/admin";
import ProductPage from "./components/productPage";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { uid } from "uid";
import { AddToCart, editCart, deleteCartItem } from "./tools/cartActions";
import { db_name, getCartItems } from "./tools/cartActions";
import Cart from "./components/Cart";
function App() {
  const [user, setUser] = useState(false);
  const [method, setMethod] = useState(false);
  const [hero, setHero] = useState(true);
  const [shop, setShop] = useState(false);
  const [productPage, setProductPage] = useState(false);
  const [productArray, setProductArray] = useState(false);
  const [product, setProduct] = useState({});
  const [cartArray, setCartArray] = useState([]);
  const [cart, setCart] = useState(false);
  const [itemId, setItemId] = useState(null);
  const docRef = collection(db, "bucket");
  const closeAll = () => {
    setHero(false);
    setShop(false);
    setMethod(false);
    setProductPage(false);
  };
  const handleShopRoute = () => {
    closeAll();
    setShop(true);
  };
  const handHomeRoute = () => {
    closeAll();
    setHero(true);
  };
  const handleLoginRoute = () => {
    closeAll();
    setMethod("login");
  };
  const handleSignUpRoute = () => {
    closeAll();
    setMethod("sign up");
  };
  const handleproductPageRoute = (id) => {
    closeAll();
    setProductPage(true);
    const item = productArray.filter((item) => {
      return item.id == id;
    });
    setProduct(item[0]);
  };

  const handleCart = () => {
    let template = {
      ...product,
      quantity: 1,
    };
    AddToCart(db_name, template);
  };

  const handleChange = (id, count) => {
    const deletFromCart = () => {
      console.log("deleted");
      deleteCartItem(db_name, id, setCartArray);
    };

    editCart(db_name, id, count);
    if (count == 0) return deletFromCart();
  };

  useEffect(() => {
    let items = getCartItems(db_name);

    setCartArray(items);
  }, [cart]);
  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await getDocs(docRef);
        const filterd_data = data.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().name,
            price: doc.data().price,
            image: { src: doc.data().imageSrc, name: doc.data().name },
          };
        });

        setProductArray(filterd_data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchdata();
  }, []);
  return user ? (
    <Layout>
      <Admin user={setUser} />
    </Layout>
  ) : (
    <Layout
      handleHome={handHomeRoute}
      loginPress={handleLoginRoute}
      signInPress={handleSignUpRoute}
      handleCart={setCart}
    >
      {hero && <Hero handleClick={handleShopRoute} />}

      {shop && productArray && (
        <Fruits
          onProductClick={handleproductPageRoute}
          products={productArray}
        />
      )}
      {cart && (
        <Cart
          handleClose={setCart}
          items={cartArray}
          itemQuantity={handleChange}
        />
      )}
      {productPage && (
        <ProductPage product={product} handleAddToCart={handleCart} />
      )}
      {method == "login" && (
        <Login createAccount={() => setMethod("sign up")} getUser={setUser} />
      )}
      {method == "sign up" && (
        <SignUp getUser={setUser} login={() => setMethod("login")} />
      )}
    </Layout>
  );
}

export default App;
