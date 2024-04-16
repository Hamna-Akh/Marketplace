import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Typography } from '@mui/material';
import './Login.css'; // Import the CSS file
import SignInSide from './SignInSide';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.get('http://localhost:8080/users');
            const users = response.data;
            const matchingUser = users.find(user => user.email === email && user.password === password);
            if (matchingUser != null) {
                console.log('Valid credentials');
                const response = await axios.post('http://localhost:8080/login', matchingUser);
                console.log(response.data);
                navigate('/products');
            } else {
                console.log('Invalid credentials');
                alert('The wrong email or password was entered. Please try again.');
            }
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    };

    return (
        <SignInSide
                handleSubmit={handleLogin}
                setEmail={setEmail}
                setPassword={setPassword}
                email={email}
                password={password}
                error={error}
                setError={setError}
            />
        
    );
};

export default Login;
