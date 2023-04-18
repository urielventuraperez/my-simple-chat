import React, { useState } from "react";
import {
  Grid,
  Box,
  Link,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginForm = () => {
  const router = useRouter();
  const { handleSubmit, control } = useForm();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onRegisterUser = (data) => {
    console.log(data);
  };

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleMouseEvents = (e) => {
    e.preventDefault();
  };

  return (
    <Box noValidate sx={{ mt: 1 }}>
      <form onSubmit={handleSubmit(onRegisterUser)}>
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
    </Box>
  );
};

export default LoginForm;
