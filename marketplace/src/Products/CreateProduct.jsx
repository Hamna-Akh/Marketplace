import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Grid, Snackbar } from '@mui/material';
import axios from 'axios';
import Layout from '../Components/Layout';
import Alert from '@mui/lab/Alert';
import { useNavigate } from 'react-router-dom';

function CreateProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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


//     saving the image
    const data = new FormData();
        data.append('file', file);
        let valid = true;
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
              setErrorMessage("invald image size");
              setOpenSnackbar(true);
              valid = false;
              // Handle error (e.g., display an error message to the user)

        }

//     saving the product
        if(valid){
            try {
              await axios.post('http://localhost:8080/products', {...formData, status: 'ACTIVE'}); // Assuming your backend is running on localhost:8080
              setFormData({
                title: '',
                price: '',
                description: '',
                category: '',
                image: ''
              });
              setSuccessMessage('Product created successfully!');
              setOpenSnackbar(true);
              navigate('/sell');  // Redirect to /sell
            } catch (error) {
              console.error('Error creating product:', error);
              // Handle error (e.g., display an error message to the user)
            }
        }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Layout>
      <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2, marginBottom:'40px', backgroundColor: 'white', border: '2px solid black', borderRadius: '10px' }}>
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
              <Button type="submit" variant="contained" color="primary">Create Product</Button>
            </Grid>
          </Grid>
        </form>
        <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}>
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

export default CreateProduct;
