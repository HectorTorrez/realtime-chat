import { Navigate } from "react-router-dom";
import { useAuthProvider } from "../hook/useAuthProvider";

// eslint-disable-next-line react/prop-types
export const ProtectedRouter = ({ children }) => {
  const { user } = useAuthProvider();
  if (!user) return <Navigate to="/login" />;
  return <>{children}</>;
};
