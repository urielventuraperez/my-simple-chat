import { Grid, Box, Link, TextField, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useForm, Controller } from "react-hook-form";

const Register = () => {
  const { handleSubmit, control, watch } = useForm();

  const onRegisterUser = (data) => {
    console.log(data);
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
              autoFocus
              margin="normal"
              fullWidth
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              label="Password"
              type="password"
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
              autoFocus
              margin="normal"
              fullWidth
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              label="Confirm Password"
              type="password"
            />
          )}
          rules={{
            validate: (val) => {
              if (watch('password') != val) {
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
          <Link href="#" variant="body2">
            {"Log in"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
