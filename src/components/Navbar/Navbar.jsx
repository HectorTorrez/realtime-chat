import { Navigate } from "react-router-dom";
import { useAuthProvider } from "../hook/useAuthProvider";

// eslint-disable-next-line react/prop-types
export const Navbar = ({ name }) => {
  const { logout } = useAuthProvider();

  const handleLogout = async () => {
    try {
      logout();
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  //TODO add function to navigate to home(room list)

  const handleHome = async () => {
    location.reload();
  };

  return (
    <nav className="bg-slate-900 h-16 lg:w-3/5 flex  w-full justify-between items-center  ">
      <h1 className="text-white font-bold text-2xl ml-2 lg:m-0">{name}</h1>

      <p
        onClick={handleHome}
        className="text-white font-bold text-xl py-2 px-3 rounded hover:bg-slate-900 hover:border cursor-pointer"
      >
        Room
      </p>

      <div className="flex gap-5">
        <button
          onClick={handleLogout}
          className="text-white font-bold text-xl py-2 px-3 rounded hover:bg-slate-900 hover:border "
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
