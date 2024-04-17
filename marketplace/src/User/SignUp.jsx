import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Marketplace
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();



const SignUp = () => {

    const type = Object.freeze({
            admin : 'ADMIN',
            user : 'USER'
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [profileT , setProfileT ] = useState(type.user);
    const [loggIn , setLoggIn] = useState(0);
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

            if (!email || !password || !firstName || !lastName) {
                alert('All fields are required');
                return;
            }

        try{
        const resp = await axios.post('http://localhost:8080/user', {email, password, firstName, lastName, profileT, loggIn});
               setSuccessMessage('User created successfully!');
                // Clear input fields after successful submission
                setEmail('');
                setPassword('');
                setFirstName('');
                setLastName('');
                // Navigate after a delay to display the success message
                setTimeout(() => {
                    navigate(-1);
                }, 2000); // Navigate after 2 seconds

        }catch(error) {
        console.log(error.response);
        };
      };

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
                      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
{/*                         <LockOutlinedIcon /> */}
                      </Avatar>
                      <Typography component="h1" variant="h5">
                        Sign up
                      </Typography>
                      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              autoComplete="given-name"
                              name="firstName"
                              required
                              fullWidth
                              id="firstName"
                              label="First Name"
                              autoFocus
                              value={firstName}
                              onChange = {(e) => setFirstName(e.target.value)}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              id="lastName"
                              label="Last Name"
                              name="lastName"
                              autoComplete="family-name"
                              value={lastName}
                              onChange ={(e) => setLastName(e.target.value)}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              name="email"
                              autoComplete="email"
                              value={email}
                              onChange = {(e) => setEmail(e.target.value)}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                              autoComplete="new-password"
                              value={password}
                              onChange = {(e) => setPassword(e.target.value)}
                            />
                          </Grid>
                        </Grid>
                        {successMessage && (
                                <Typography variant="h4" color="primary" align="center" sx={{ mt: 1 }}>
                                    {successMessage}
                                </Typography>
                            )}
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                          <Grid item>
                            <Link href="/" variant="body2">
                              Already have an account? Sign in
                            </Link>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                  </Container>
                </ThemeProvider>
              );
}

export default SignUp;