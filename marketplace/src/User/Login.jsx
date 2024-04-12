import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Typography } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.get('http://localhost:8080/users');
            const users = response.data;
            const matchingUser = users.find(user => user.email === email && user.password === password);
            if (matchingUser != null) {
                console.log('Valid credentials');
                const response = await axios.post('http://localhost:8080/login', matchingUser);
                console.log(response.data);
            } else {
                console.log('Invalid credentials');
            }
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
                <Typography variant="h4" align="center">Login</Typography>
                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>Login</Button>
                {error && <Typography color="error">{error}</Typography>}
            </Grid>
        </Grid>
    );
};

export default Login;
