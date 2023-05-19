import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { AuthProvider } from "./components/AuthContext/AuthContext";
import { ProtectedRouter } from "./components/ProtectedRouter/ProtectedRouter";

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRouter>
              <Home />
            </ProtectedRouter>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};
