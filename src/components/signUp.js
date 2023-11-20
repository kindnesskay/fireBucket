import { useState } from "react";
import { Auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
function SignUp({ login, getUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPwd, setVerfyPwd] = useState("");
  const [pwd_error, setPwdError] = useState("");
  const handleSignUp = async () => {
    if (!email || !password || !verifyPwd) return;
    if (password != verifyPwd) {
      setPwdError("Password do no match ");
      return;
    }
    setPwdError("");
    await createUserWithEmailAndPassword(Auth, email, password);
    getUser(Auth.currentUser.email);
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
      <input
        placeholder="verify password"
        type="password"
        value={verifyPwd}
        onChange={(e) => setVerfyPwd(e.target.value)}
      />
      <span style={{ fontSize: 14, color: "red" }}>{pwd_error}</span>

      <button
        style={{ backgroundColor: "seagreen", color: "white", border: 0 }}
        onClick={handleSignUp}
      >
        Sign up
      </button>
      <p style={{ fontSize: 12 }}>Already have an Account?</p>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default SignUp;
