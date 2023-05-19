import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";

export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ loginWithGoogle, user }}>
      {children}
    </AuthContext.Provider>
  );
};
