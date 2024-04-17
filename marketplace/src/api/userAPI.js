import axios from 'axios';

export const getUsers = async () => {
    const response = await axios.get('http://localhost:8080/users');
    return response.data;
};

export const loginUser = async (user) => {
    const response = await axios.post('http://localhost:8080/login', user);
    return response.data;
};