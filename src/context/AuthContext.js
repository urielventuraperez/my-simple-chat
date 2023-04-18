import React, { useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/firebase/config";
import LoginPage from "@/pages/login";
import SignUpPage from "@/pages/sign-up";
import Chat from "@/pages";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user)
    })
  }, [])
  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
}

export function useAuthValue() {
  return useContext(AuthContext);
}

export const ProtectRoute = ({ children }) => {
  const { user } = useAuthValue();
  const isSignUpPage = typeof window !== "undefined" && window.location.pathname === '/sign-up';
  if (!user && isSignUpPage){
    return <SignUpPage />; 
  }
  if (!user){
    return <LoginPage />; 
  }
  return children;
};
