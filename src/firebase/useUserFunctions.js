import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth } from "@/firebase/config";

export function useUserFunctions() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");

  const login = (data, onSuccess = () => {}) => {
    setLoading(true);
    setLoaded(false);
    setError("");
    signInWithEmailAndPassword(firebaseAuth, data.email, data.password)
      .then(() => {
        setLoaded(true);
        setLoading(false);
        onSuccess();
      })
      .catch((err) => {
        setLoading(false);
        setError(
          err.message || "Failed to retrieve the user login, try again later."
        );
      });
  };

  const register = (data, onSuccess = () => {}) => {
    setLoading(true);
    setLoaded(false);
    setError("");
    createUserWithEmailAndPassword(firebaseAuth, data.email, data.password)
      .then(() => {
        setLoaded(true);
        setLoading(false);
        onSuccess();
      })
      .catch((err) => {
        setLoading(false);
        setError(
          err.message || "Failed to register the user, try again later."
        );
      });
  };

  return {
    loading,
    loaded,
    error,
    register,
    login,
  };
}
