import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Link,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useUserFunctions } from "@/firebase/useUserFunctions";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { firebaseAuth } from "@/firebase/config";
import { useAuthValue } from "@/context/AuthContext";

const LoginForm = () => {
  const {user} = useAuthValue();
  const router = useRouter();
  const { handleSubmit, control } = useForm();
  const { loaded, loading, error, login } = useUserFunctions();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onLoginUser = (data) => {
    login(data);
  };

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleMouseEvents = (e) => {
    e.preventDefault();
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(firebaseAuth, provider);
  };

  useEffect(()=>{
    if(user) {
      router.push('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Box noValidate sx={{ mt: 1 }}>
      <form onSubmit={handleSubmit(onLoginUser)}>
        <Controller
          defaultValue=""
          name="email"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              autoComplete="email"
              autoFocus
              margin="normal"
              fullWidth
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              label="Email Address"
            />
          )}
          rules={{
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid Email addressº",
            },
            required: "Email is required",
          }}
        />
        <Controller
          defaultValue=""
          name="password"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              autoComplete="password"
              margin="normal"
              fullWidth
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              label="Password"
              type={isShowPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword("confirmPassword")}
                      onMouseDown={handleMouseEvents}
                      onMouseUp={handleMouseEvents}
                      edge="end"
                    >
                      {isShowPassword.confirmPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
          rules={{
            minLength: {
              value: 6,
              message: "Password must have a minimum 8 characters",
            },
            required: "Password is required",
          }}
        />
        <Button
          disabled={loading}
          type="submit"
          disableElevation
          fullWidth
          size="small"
          variant="contained"
          sx={{ mt: 3 }}
        >
          Login
        </Button>
      </form>
      <Button
        disableElevation
        startIcon={<GoogleIcon />}
        fullWidth
        size="small"
        variant="outlined"
        sx={{ mt: 1.5, mb: 2 }}
        onClick={googleSignIn}
      >
        Sign up with Google
      </Button>
      <Grid container>
        <Grid item>
          <Link
            href="sign-up"
            onClick={(e) => {
              e.preventDefault();
              router.push("sign-up");
            }}
            variant="body2"
          >
            {"Create an account"}
          </Link>
        </Grid>
      </Grid>
      <Snackbar open={loaded || Boolean(error)} autoHideDuration={1000}>
        <Alert severity={loaded ? "success" : "error"} sx={{ width: "100%" }}>
          {loaded ? "Welcome!" : null}
          {error ? error : null}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginForm;
