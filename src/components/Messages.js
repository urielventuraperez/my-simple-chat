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

const Message = ({ itsMe }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "end",
      my: 1,
      justifyContent: itsMe ? "end" : "start",
    }}
  >
    <Avatar>R</Avatar>
    <Card
      variant="outlined"
      sx={{
        backgroundColor: (theme) =>
          itsMe ? theme.palette.secondary.main : theme.palette.common.white,
        minWidth: "30%",
        maxWidth: "70%",
        borderRadius: 10,
      }}
    >
      <CardContent>
        <Typography
          sx={{
            color: (theme) =>
              itsMe ? theme.palette.common.white : theme.palette.common.black,
          }}
          variant="body1"
        >
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography
          sx={{
            color: (theme) =>
              itsMe ? theme.palette.common.white : theme.palette.common.black,
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
      <Message itsMe />
      <Message />
      <Message />
      <Message />
      <Message itsMe />
      <Message />
      <Message />
      <Message />
      <Message itsMe />
    </Paper>
  );
};

Message.propTypes = {
  itsMe: PropTypes.bool.isRequired,
};

export default Messages;
