import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
// import { useNavigate } from "react-router-dom";

const Logout = () => {
  signOut(auth);
};

export default Logout;