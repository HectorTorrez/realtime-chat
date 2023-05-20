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
    <section className="bg-slate-900 h-screen gap-24 text-white flex flex-col items-center justify-center">
      <h1 className="font-bold text-7xl">Sign in to chat</h1>

      <button
        className="border border-white font-bold text-lg h-fit py-3 px-8 rounded  hover:scale-110"
        onClick={handleGoogleLogin}
      >
        Login with Google
      </button>
    </section>
  );
};
