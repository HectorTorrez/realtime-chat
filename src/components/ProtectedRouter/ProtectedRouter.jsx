import { Navigate } from "react-router-dom";
import { useAuthProvider } from "../hook/useAuthProvider";

// eslint-disable-next-line react/prop-types
export const ProtectedRouter = ({ children }) => {
  const { user, loading } = useAuthProvider();
  if (loading) return <div className="bg-slate-900"></div>;
  if (!user) return <Navigate to="/login" />;
  return <>{children}</>;
};
