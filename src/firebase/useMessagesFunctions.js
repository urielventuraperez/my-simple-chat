import { useState } from "react";
import {
  addDoc,
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  serverTimestamp,
} from "firebase/firestore";
import { firebaseAuth, firebaseDB } from "@/firebase/config";

export function useMessagesFunctions() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState([]);

  const getChatMessages = () => {
    setLoading(true);
    setLoaded(false);
    setError("");
    const q = query(
      collection(firebaseDB, "messages"),
      orderBy("createdAt"),
      limit(60)
    );
    onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setLoading(false);
      setLoaded(Boolean(messages.length))
      setMessages(messages);
    });
  };

  const postChatMessage = (data, onSuccess = () => {}) => {
    setLoading(true);
    setLoaded(false);
    setError("");
    createUserWithEmailAndPassword(firebaseAuth, data.email, data.password)
      .then(() => {
        setLoaded(true);
        setLoading(false);
        onSuccess();
      })
      .catch((err) =>
        setError(err.message || "Failed to register the user, try again later.")
      );
  };

  return {
    loading,
    loaded,
    error,
    postChatMessage,
    messages,
    getChatMessages,
  };
}
