import { Auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { Button } from "@mui/material";
function Logout({ nullUser }) {
  const handleSignOut = async () => {
    await signOut(Auth);
    nullUser(false);
  };
  return (
    <Button variant="outlined" color="secondary" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
}

export default Logout;
