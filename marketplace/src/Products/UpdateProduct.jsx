import React, { useState, useEffect } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Grid, Snackbar } from '@mui/material';
import axios from 'axios';
import Layout from '../Components/Layout';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/lab/Alert';
import DisplayImage from './DisplayImage.jsx'; // Import DisplayImage component

function UpdateProduct() {
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image: '',
        status: ''
    });
    
    useEffect(() => {
        fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/products/${id}`);
            setFormData(response.data);
            setProduct(response.data);
            //setImage(URL.createObjectURL(response.data.image)); // Set the current image when fetching the product
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const imageChange = (e) => {
        setFile(e.target.files[0]);
        setFormData({...formData, image: e.target.files[0].name});
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if all required fields are filled
        if (!formData.title) {
            setErrorMessage('Please enter a title');
            setOpenSnackbar(true);
            return;
        }

        if (!formData.price) {
            setErrorMessage('Please enter a price');
            setOpenSnackbar(true);
            return;
        }

        if (!formData.category) {
            setErrorMessage('Please enter a category');
            setOpenSnackbar(true);
            return;
        }

        // Check if price is greater than 0
        if (formData.price <= 0) {
            setErrorMessage('Price must be greater than 0');
            setOpenSnackbar(true);
            return;
        }

        const data = new FormData();
            data.append('file', file);
            try {
                const response = await axios.post('http://localhost:8080/image', data,
            {headers: {
                  'Content-Type': 'multipart/form-data'
               }
            });
            } catch (error) {
                  console.error('Error creating product:', error);
            }

        try {
            await axios.put(`http://localhost:8080/products/${id}`, formData);
            setFormData({
                title: '',
                price: '',
                description: '',
                category: '',
                image: '',
                status: ''
            });
            setSuccessMessage('Product updated successfully!');
            setOpenSnackbar(true);
            navigate('/sell');
        } catch (error) {
            console.error('Error updating product:', error);
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Layout>
            <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2, marginBottom:'40px', backgroundColor: 'white', border: '2px solid black', borderRadius: '10px'  }}>
                <h1>Update Product</h1>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Title"
                                variant="outlined"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Price"
                                variant="outlined"
                                name="price"
                                type="number"
                                value={formData.price}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Description"
                                variant="outlined"
                                name="description"
                                multiline
                                rows={4}
                                value={formData.description}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel>Category</InputLabel>
                                <Select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    label="Category"
                                >
                                    <MenuItem value="CLOTHES">CLOTHES</MenuItem>
                                    <MenuItem value="ELECTRONICS">ELECTRONICS</MenuItem>
                                    <MenuItem value="FURNITURE">FURNITURE</MenuItem>
                                    <MenuItem value="BEAUTY">BEAUTY</MenuItem>
                                    <MenuItem value="ENTERTAINMENT">ENTERTAINMENT</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                         {/* Display the current image of the product */}
                        <Grid item xs={12}>
                            <DisplayImage filename={product && product.image} />
                        </Grid>
                        <Grid item xs={12} container direction="column" alignItems="center">
                          <Grid item >
                            <img
                              width="100%"
                              name = "image"
                              value={image}
                              src = {image}
                            />
                          </Grid>
                          <label htmlFor="contained-button-file">
                             <Button variant="contained" component="span">
                               Select Image
                               <input
                                 accept="image/*"
                                 name='image'
                                 id="contained-button-file"
                                 multiple
                                 type="file"
                                 onChange={imageChange}
                               />
                             </Button>
                          </label>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel>Status</InputLabel>
                                <Select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    label="Status"
                                >
                                    <MenuItem value="ACTIVE">Active</MenuItem>
                                    <MenuItem value="INACTIVE">Inactive</MenuItem>
                                    <MenuItem value="SOLD">Sold</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">Update Product</Button>
                        </Grid>
                    </Grid>
                </form>
                <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    {errorMessage ? (
                        <Alert onClose={handleCloseSnackbar} severity="error">
                            {errorMessage}
                        </Alert>
                    ) : (
                        <Alert onClose={handleCloseSnackbar} severity="success">
                            {successMessage}
                        </Alert>
                    )}
                </Snackbar>
            </Box>
        </Layout>
    );
}

export default UpdateProduct;
