import {
  Grid,
  Box,
  Link,
  TextField,
  Button,
} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';

export default function Register() {
  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button disableElevation type="submit" fullWidth size="small" variant="contained" sx={{ mt: 3 }}>
        Create account
      </Button>
      <Button disableElevation startIcon={<GoogleIcon />} fullWidth size="small" variant="outlined" sx={{ mt: 1.5, mb: 2 }}>
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
}
