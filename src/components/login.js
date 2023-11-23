import { useState } from "react";
import { Auth } from "../config/firebase";
import { Button, TextField } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
function Login({ createAccount, getUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async () => {
    if (!email || !password) return;

    await signInWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        getUser(user.uid);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };
  return (
    <div className="store_form">
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
      <Button onClick={createAccount} variant="outlined" color="secondary">
        create accout
      </Button>
    </div>
  );
}

export default Login;
