import "./App.css";
import Bucket from "./components/bucket";
import { useState } from "react";
import { Auth } from "./config/firebase";
import SignUp from "./components/signUp";
import Login from "./components/login";
import Logout from "./components/logout";
import Fruits from "./components/fruits";
import Hero from "./components/hero";
import Layout from "./components/layout";
import Admin from "./components/admin";
function getMethod(method) {
  switch (method) {
    case "login":
      return <Login />;
      break;
    case "signup":
      return <SignUp />;
      break;
    default:
      break;
  }
}
function App() {
  const [user, setUser] = useState(false);
  const [method, setMethod] = useState(false);
  const [hero, setHero] = useState(true);
  const [shop, setShop] = useState(false);
  const [login, setLogin] = useState(false);
  const [signUp, setSIgnUp] = useState(false);
  const closeAll = () => {
    setHero(false);
    setShop(false);
    setMethod(false);
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
  return user ? (
    <Layout>
      <Admin user={setUser} />
    </Layout>
  ) : (
    <Layout
      handleHome={handHomeRoute}
      loginPress={handleLoginRoute}
      signInPress={handleSignUpRoute}
    >
      {hero && <Hero handleClick={handleShopRoute} />}
      {shop && <Fruits />}

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
