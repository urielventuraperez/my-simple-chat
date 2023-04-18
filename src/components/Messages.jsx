import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Paper,
  Card,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";

const Message = ({ isCurrentUser }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "end",
      my: 1,
      justifyContent: isCurrentUser ? "end" : "start",
    }}
  >
    <Avatar>R</Avatar>
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
          Lorem ipsum dolor sit amet
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
          Lorem ipsum dolor sit amet
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

const Messages = () => {
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
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message isCurrentUser />
      <Message />
      <Message />
      <Message />
      <Message isCurrentUser />
      <Message />
      <Message />
      <Message />
      <Message isCurrentUser />
    </Paper>
  );
};

Message.defaultProps = {
  isCurrentUser: false,
};

Message.propTypes = {
  isCurrentUser: PropTypes.bool,
};

export default Messages;
