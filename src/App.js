import logo from "./logo.svg";
import "./App.css";
import Bucket from "./components/bucket";
import { useState } from "react";
import { Auth } from "./config/firebase";
import SignUp from "./components/signUp";
import Login from "./components/login";
import Logout from "./components/logout";
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
  const [method, setMethod] = useState("login");

  return user ? (
    <div className="App">
      <Bucket />
      <Logout nullUser={setUser} />
    </div>
  ) : (
    <div className="App">
      {method == "login" && (
        <Login createAccount={() => setMethod("sign up")} getUser={setUser} />
      )}
      {method == "sign up" && (
        <SignUp getUser={setUser} login={() => setMethod("login")} />
      )}
    </div>
  );
}

export default App;
