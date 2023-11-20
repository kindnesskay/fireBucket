import { useState } from "react";
import { Auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
function Login({ createAccount, getUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async () => {
    if (!email || !password) return;
    try {
      await signInWithEmailAndPassword(Auth, email, password);
      getUser(Auth.currentUser.email);
      console.log(Auth.currentUser.email);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="form">
      <input
        placeholder="EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="PASSWORD"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleSignIn}
        style={{ backgroundColor: "seagreen", color: "white", border: 0 }}
      >
        LogIn
      </button>
      <p style={{ fontSize: 12 }}>Dont have an account?</p>
      <button onClick={createAccount}>create accout</button>
    </div>
  );
}

export default Login;
