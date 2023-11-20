import { useEffect, useState } from "react";
import { Auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
export default function Login_SignIn() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("Not signed in ");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const handleSignUp = async () => {
    if (!email || !password) return;
    try {
      await createUserWithEmailAndPassword(Auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSignIn = async () => {
    if (!email || !password) return;
    try {
      await signInWithEmailAndPassword(Auth, email, password);
      setSignedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    if (!signedIn) return;
    try {
      await signOut(Auth);
      setSignedIn(false);
      setUser("Not signed in ");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const User = async () => {
      try {
        const userData = Auth.currentUser.email;
        setUser(userData);
        setSignedIn(true);
      } catch (error) {
        setSignedIn(false);
        setUser("Not signed in ");
      }
    };
    User();
  }, [signedIn]);
  return (
    <div className="form">
      <p>{user}</p>
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
      <button onClick={handleSignUp}>Sign up</button>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignOut}>LogOut</button>
    </div>
  );
}
