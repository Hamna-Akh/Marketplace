import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../Components/Layout';
import DisplayImage from './DisplayImage.jsx';
import './DisplayAllProducts.css';

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
    <div className="product-card"   style={{ border: '2px solid black', marginBottom: '20px' }} >
      <DisplayImage filename={product.image}/>
      <div className="product-details">
       <p className="product-title">{product.title}</p>
       <p className="product-price">Price: ${product.price}</p>
       <p className="product-description">Description: {product.description}</p>
       <p className="product-category">Category: {product.category}</p>
       <p className="product-status">Status: {product.status}</p>
      </div>
    </div>
    </Layout>
  );
}



export default DisplayProduct;