import { Auth } from "../config/firebase";
import { signOut } from "firebase/auth";
function Logout({ nullUser }) {
  const handleSignOut = async () => {
    await signOut(Auth);
    nullUser(false);
  };
  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Logout;
