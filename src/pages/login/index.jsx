import Head from "next/head";
import {
  Grid,
  Typography,
  Box,
} from "@mui/material";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login - My simple chat</title>
        <meta name="description" content="My simple chat" />
      </Head>
      <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={8} md={5}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Welcome back
            </Typography>
            <Typography variant="subtitle1">
              Please, log in to continue
            </Typography>
            <LoginForm />
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://img.freepik.com/free-photo/close-up-attractive-carefree-young-woman-sitting-floor_273609-34877.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 8,
            border: '16px solid white'
          }}
        />
      </Grid>
    </>
  );
}
