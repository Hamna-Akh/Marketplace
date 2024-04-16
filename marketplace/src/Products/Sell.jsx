import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../Layout';
import './DisplayAllProducts.css';
import './Sell.css'; // Import CSS file
import DeleteConfirmation from './DeleteConfirmation';
import './DisplayAllProducts.css';

function Sell() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/seller'); // Assuming your backend endpoint for fetching user's products is /seller
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCreateListing = () => {
    navigate('/create-product');
  };

  const handleUpdate = (productId) => {
    // Handle update logic
    console.log('Updating product with ID:', productId);
  };

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`http://localhost:8080/products/${selectedProduct.listingId}`);
      // Refresh products after deletion
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    } finally {
      // Close the confirmation dialog
      setShowDeleteConfirmation(false);
    }
  };

  const handleDeleteCancel = () => {
    // Close the confirmation dialog
    setShowDeleteConfirmation(false);
  };

return (
    <Layout>
      <div className="product-container">
        <h1>My Products</h1>
        <button className="create-listing-button" onClick={handleCreateListing}>Create New Listing</button>
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
                <div className="product-actions">
                  <button onClick={() => handleUpdate(product.listingId)} className="action-button update-button">Update</button>
                  <button onClick={() => handleDelete(product)} className="action-button delete-button">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showDeleteConfirmation && <DeleteConfirmation product={selectedProduct} onDelete={handleDeleteConfirm} onCancel={handleDeleteCancel} />}
    </Layout>
  );
}
export default Sell;
