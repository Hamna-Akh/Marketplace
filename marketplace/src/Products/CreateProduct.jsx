import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Grid, Snackbar  } from '@mui/material';
import axios from 'axios';
import Layout from '../Layout';

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
  const [file, setFile] = useState('');
  const [image, setImage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const imageChange = (e) => {
//     console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    setFormData({...formData, image: e.target.files[0].name});
    setImage(URL.createObjectURL(e.target.files[0]));
//     console.log(formData.image)
  };

console.log(image);
  const handleSubmit = async (e) => {
    e.preventDefault();

//     saving the image
    const data = new FormData();
        data.append('file', file);
        try {
              const response = await axios.post('http://localhost:8080/image', data,
              {headers: {
                'Content-Type': 'multipart/form-data'
                }
              }); // Assuming your backend is running on localhost:8080
                  console.log(response);
              // Optionally, redirect to the products list page or show a success message
        } catch (error) {
              console.error('Error creating product:', error);
              // Handle error (e.g., display an error message to the user)

        }

//     saving the product
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
  <Layout>
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
{/*               <button onClick = {imageUpload}> */}
{/*                 Upload */}
{/*               </button> */}
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
    </Layout>
  );
}

export default CreateProduct;
