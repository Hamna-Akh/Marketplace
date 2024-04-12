// CreateProduct.js

import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Grid, Snackbar  } from '@mui/material';
import axios from 'axios';

function CreateProduct() {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    status: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/products', formData); // Assuming your backend is running on localhost:8080
          setFormData({
            title: '',
            price: '',
            description: '',
            category: '',
            image: '',
            status: ''
          });
          setSuccessMessage('Product created successfully!');
          setOpenSnackbar(true);
      // Optionally, redirect to the products list page or show a success message
    } catch (error) {
      console.error('Error creating product:', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
      <h1>Create Product</h1>
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
          <Grid item xs={12}>
            <TextField
              label="Image URL"
              variant="outlined"
              name="image"
              value={formData.image}
              onChange={handleChange}
              fullWidth
            />
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
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">Create Product</Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
              open={openSnackbar}
              autoHideDuration={6000}
              onClose={handleCloseSnackbar}
              message={successMessage}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            />
    </Box>
  );
}

export default CreateProduct;
