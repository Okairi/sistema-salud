import { createContext } from "react";
import { useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  return (
    <authContext.Provider value={{ signUp, login }}>
      {children}
    </authContext.Provider>
  );
}
