import { useState } from "react";
import { Auth } from "../config/firebase";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async () => {
    if (!email || !password) return;

    await signInWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };
  return (
    <form>
      <img src="/orange.jpg" height={80} width={80} />
      <TextField
        sx={{ width: "100%", maxWidth: 300 }}
        placeholder="EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        sx={{ width: "100%", maxWidth: 300 }}
        placeholder="PASSWORD"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        onClick={handleSignIn}
        sx={{ width: "100%", maxWidth: 300, height: 50 }}
        variant="contained"
        color="secondary"
      >
        LogIn
      </Button>
      <p style={{ fontSize: 12 }}>Dont have an account?</p>
      <Link to="/signup" style={{ width: "100%", maxWidth: 300, height: 50 }}>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ width: "100%", maxWidth: 300, height: 50 }}
        >
          create accout
        </Button>
      </Link>
    </form>
  );
}

export default Login;
