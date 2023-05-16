import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "../hook/useAuthProvider";

export const Login = () => {
  const { loginWithGoogle } = useAuthProvider();

  const Navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};
