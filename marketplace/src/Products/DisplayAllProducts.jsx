import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DisplayAllProducts.css';
import Layout from '../Components/Layout';

function DisplayAllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/products'); // Assuming your backend is running on localhost:8080
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
  <Layout>
    <div className="product-container">
          <h1>Products</h1>
          <div className="product-grid">
            {products.map(product => (
              <div className="product-card" key={product.listingId}>
                <img className="product-image" src={product.image || 'placeholder_image.jpg'} alt={product.title}/>
                <div className="product-details">
                  <p className="product-title">{product.title}</p>
                  <p className="product-price">${product.price}</p>
                  <p className="product-description">{product.description}</p>
                  <p className="product-category">Category: {product.category}</p>
                  <p className="product-status">Status: {product.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Layout>
      );
    }

export default DisplayAllProducts;
