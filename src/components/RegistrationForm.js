import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Grid,
  Box,
  Link,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";

const RegistrationForm = () => {
  const router = useRouter();
  const { handleSubmit, control, watch } = useForm();
  const [isShowPassword, setIsShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const onRegisterUser = (data) => {
    console.log(data);
  };

  const handleClickShowPassword = (passwordInput) => {
    setIsShowPassword({
      ...isShowPassword,
      [passwordInput]: !isShowPassword[passwordInput],
    });
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
              type={isShowPassword.password ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword("password")}
                      onMouseDown={handleMouseEvents}
                      onMouseUp={handleMouseEvents}
                      edge="end"
                    >
                      {isShowPassword.password ? (
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
        <Controller
          defaultValue=""
          name="confirmPassword"
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
              label="Confirm Password"
              type={isShowPassword.confirmPassword ? "text" : "password"}
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
            validate: (val) => {
              if (watch("password") != val) {
                return "Your passwords do no match";
              }
            },
            required: "Confirm password is required",
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
          Create account
        </Button>
      </form>
      <Grid container>
        <Grid item>
          <Link
            href="login"
            onClick={(e) => {
              e.preventDefault();
              router.push("login");
            }}
            variant="body2"
          >
            {"Log in"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegistrationForm;
