import React from "react";
import { Box, Paper, Card, CardContent, Typography, Avatar } from "@mui/material";

const Message = () => (
  <Box sx={{display: 'flex', alignItems: 'end'}}>
    <Avatar>
      R
    </Avatar>
    <Card variant="outlined" sx={{ width: "80%", borderRadius: 10 }}>
      <CardContent>
        <Typography variant="body1">Testing</Typography>
        <Typography variant="caption" gutterBottom>
          Testing
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
      }}
    >
      <Message />
    </Paper>
  );
};

export default Messages;
