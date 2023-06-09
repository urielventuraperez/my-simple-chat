import Head from "next/head";
import { Grid, Typography, Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import Messages from "@/components/Messages";
import MessageForm from "@/components/MessageForm";
import Footer from "@/components/Footer";

export default function Chat() {
  return (
    <>
      <Head>
        <title>Welcome to my simple chat</title>
        <meta name="description" content="My simple chat" />
      </Head>
      <Navbar />
      <Grid container component="main">
        <Grid item xs={12}>
          <Box
            sx={{
              my: 4,
              mx: 4,
            }}
          >
            <Typography variant="h6">Recent chat</Typography>
            <Messages />
            <MessageForm />
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
