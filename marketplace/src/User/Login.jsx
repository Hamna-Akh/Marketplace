import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import SignIn from './SignIn';
import {getUsers, loginUser} from '../api/userAPI';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const users = await getUsers();
            const matchingUser = users.find(user => user.email === email && user.password === password);
            if (matchingUser) {
                await loginUser(matchingUser);
                navigate('/products');
            } else {
                setError('The wrong email or password was entered. Please try again.');
            }
        } catch (error) {
            setError('Failed to fetch users');
        }
    };

    return (
        <SignIn
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