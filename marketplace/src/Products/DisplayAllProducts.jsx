import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.ListingID}>
            <p>{product.listingId} </p>
             <p> {product.title} </p>
             <p> Price: ${product.price} </p>
             <p> Description: {product.description} </p>
             <p> Category: {product.category} </p>
             <img src={product.image || 'placeholder_image.jpg'} alt={product.title}/>
             <p> Status: {product.status} </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayAllProducts;
