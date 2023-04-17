import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

export default function MessageForm() {
  return (
    <Paper
      component="form"
      sx={{ my: 2, p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
    >
      <InputBase
        multiline
        minRows={1}
        maxRows={6}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Message..."
        inputProps={{ 'aria-label': 'message' }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="send">
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
