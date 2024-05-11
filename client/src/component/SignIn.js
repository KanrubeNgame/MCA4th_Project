import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const defaultTheme = createTheme();

export default function SignIn({store}) {
const navigate = useNavigate();

  const handleSubmit = (event) => {
    alert(document.getElementsByName('email')[0].value);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    /**console.log({
      email: data.get('email'),
      password: data.get('password'),
    });**/
    axios.post('http://localhost:8081/login',{
      email: data.get('email'),
      password: data.get('password'),
    }).then((res) => {
      console.log(res.data);
      if(res.data.msg!=="failed"){
        const {email, role } = res.data.msg;
        console.log("Role:", role);
        store.dispatch({"type":"login",data:{"email":email, "role":role, "token":res.data.token}});

        //Redirecting to specific Dashboard
        if(role === '1'){
          console.log("redireting to Admin");
          navigate("/student");
        }else if( role === '2'){
          console.log("redirecting to company");
          navigate("/student");
        }else if( role === '3'){
          console.log("redirecting to stuident");
          navigate("/student");
        }
      }
  });
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ width: 50, height: 50, bgcolor: 'primary.main', margin: 3 }}>
            <AccountCircle />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/reg" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}