import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../Components/Layout';

const DisplayProduct = () => {
 const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/products/${id}`); // Assuming your backend is running on localhost:8080
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
  <Layout>
    <div>
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description || 'N/A'}</p>
      <p>Category: {product.category}</p>
      <img src={product.image || 'placeholder_image.jpg'} alt={product.title} />
      <p>Status: {product.status}</p>
    </div>
    </Layout>
  );
}

export default DisplayProduct;