import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Paper,
  Card,
  CardContent,
  Typography,
  Avatar,
  Tooltip,
} from "@mui/material";
import { useMessagesFunctions } from "@/firebase/useMessagesFunctions";
import { useAuthValue } from "@/context/AuthContext";

const Message = ({ isCurrentUser, text, author, avatar }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "end",
      my: 1,
      justifyContent: isCurrentUser ? "end" : "start",
    }}
  >
    <Tooltip title={author || '--'}>{avatar ? <Avatar src={avatar} /> : <Avatar src={avatar}>{author.charAt(0).toUpperCase()}</Avatar>}</Tooltip>
    <Card
      variant="outlined"
      sx={{
        backgroundColor: (theme) =>
          isCurrentUser
            ? theme.palette.secondary.main
            : theme.palette.common.white,
        minWidth: "30%",
        maxWidth: "70%",
        borderRadius: 10,
      }}
    >
      <CardContent>
        <Typography
          sx={{
            color: (theme) =>
              isCurrentUser
                ? theme.palette.common.white
                : theme.palette.common.black,
          }}
          variant="body1"
        >
          {text || '--'}
        </Typography>
        <Typography
          sx={{
            color: (theme) =>
              isCurrentUser
                ? theme.palette.common.white
                : theme.palette.common.black,
          }}
          variant="caption"
          gutterBottom
        >
          {author || '--'}
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

const Messages = () => {

  const {messages, getChatMessages} = useMessagesFunctions();
  const { user } = useAuthValue();

  useEffect(()=>{
    getChatMessages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(messages);

  return (
    <Paper
      elevation={6}
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.light,
        height: "60vh",
        padding: 2,
        overflowY: "scroll",
      }}
    >
      {messages.length && messages.map((message) => (
        <Message isCurrentUser={message.uid === user.uid} key={message.id} text={message?.text} author={message?.name || message?.email} avatar={message.avatar} />
      ))}
    </Paper>
  );
};

Message.defaultProps = {
  isCurrentUser: false,
  text: null,
  author: null,
  avatar: null,
};

Message.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
  avatar: PropTypes.string,
  isCurrentUser: PropTypes.bool,
};

export default Messages;
