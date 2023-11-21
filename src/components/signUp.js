import { useState } from "react";
import { Auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button, TextField } from "@mui/material";
function SignUp({ login, getUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPwd, setVerfyPwd] = useState("");
  const [pwd_error, setPwdError] = useState("");
  const handleSignUp = async () => {
    if (!email || !password || !verifyPwd) return;
    if (password !== verifyPwd) {
      setPwdError("Password do no match ");
      return;
    }
    setPwdError("");
    await createUserWithEmailAndPassword(Auth, email, password);
    getUser(Auth.currentUser.email);
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
      <TextField
        sx={{ width: "100%", maxWidth: 300 }}
        placeholder="verify password"
        type="password"
        value={verifyPwd}
        onChange={(e) => setVerfyPwd(e.target.value)}
      />
      <span style={{ fontSize: 14, color: "red" }}>{pwd_error}</span>

      <Button
        variant="contained"
        color="secondary"
        onClick={handleSignUp}
        sx={{ width: "100%", maxWidth: 300, height: 50 }}
      >
        Sign up
      </Button>
      <p style={{ fontSize: 12 }}>Already have an Account?</p>
      <Button onClick={login} variant="outlined" color="secondary">
        Login
      </Button>
    </div>
  );
}

export default SignUp;
