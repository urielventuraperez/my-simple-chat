import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { useForm, Controller } from "react-hook-form";
import { useAuthValue } from "@/context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firebaseDB } from "@/firebase/config";

export default function MessageForm() {
  const { handleSubmit, control } = useForm();

  const {user} = useAuthValue()

  const onPostMessage = async (data) => {
    const { uid, displayName, photoURL } = user;
    await addDoc(collection(firebaseDB, "messages"), {
      text: data.message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
  };

  return (
    <form onSubmit={handleSubmit(onPostMessage)}>
      <Paper
        sx={{
          my: 2,
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Controller
          defaultValue=""
          name="message"
          control={control}
          rules={{
            maxLength: {
              value: 400,
              message: "Message must have a maximum 400 characters",
            },
            required: "Message is required",
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputBase
              multiline
              minRows={1}
              maxRows={2}
              onChange={onChange}
              error={!!error}
              value={value}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Message..."
              inputProps={{ "aria-label": "message" }}
            />
          )}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          component="button"
          type="submit"
          color="primary"
          sx={{ p: "10px" }}
          aria-label="send"
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </form>
  );
}
