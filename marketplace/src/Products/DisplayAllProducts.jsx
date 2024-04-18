import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DisplayAllProducts.css';
import DisplayImage from './DisplayImage.jsx';
import Layout from '../Components/Layout';
import { Link } from 'react-router-dom';

function DisplayAllProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortProperty, setSortProperty] = useState('title');

  useEffect(() => {
    fetchProducts();
  }, []);

    useEffect(() => {
      filterProducts(searchQuery, selectedCategory);
    }, [searchQuery, selectedCategory, products]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/products'); // Assuming your backend is running on localhost:8080
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
  };

    const handleSortChange = (property) => {
      // If the selected property is the same as the current sorting property, toggle the order
      const newSortOrder = property === sortProperty && sortOrder === 'asc' ? 'desc' : 'asc';
      setSortOrder(newSortOrder);
      setSortProperty(property);
    };

   const filterProducts = (searchQuery, category) => {
      let filtered = products;
      if (searchQuery) {
        filtered = filtered.filter(product =>
          product.title.toLowerCase().startsWith(searchQuery)
        );
      }
        if (category && category !== 'All') {
          filtered = filtered.filter(product => product.category === category);
        }
      setFilteredProducts(filtered);
    };

        const sortedProducts = filteredProducts.sort((a, b) => {
          if (sortProperty === 'price') {
            return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
          } else {
            // For sorting by title or any other string property
            return sortOrder === 'asc' ? a[sortProperty].localeCompare(b[sortProperty]) : b[sortProperty].localeCompare(a[sortProperty]);
          }
        });


  return (
  <Layout>
    <div className="product-container">
    <div className="page-title">
          <div className="page-name">
          <h1>Shop All Products</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', padding:'5px'}}>
            <div className="input-container">
              <label className="search-label" htmlFor="search">Search:</label>
              <input
                type="text"
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title"
              />
            </div>
            <div className="filter-container">
               <label className="filter-label" htmlFor="category">Filter by Category:</label>
               <select className="filter-select" id="category" value={selectedCategory} onChange={handleCategoryChange}>
                 <option value="All">All</option>
                 <option value="CLOTHES">Clothes</option>
                 <option value="ELECTRONICS">Electronics</option>
                 <option value="FURNITURE">Furniture</option>
                 <option value="BEAUTY">Beauty</option>
                 <option value="ENTERTAINMENT">Entertainment</option>
               </select>
            </div>
             <div className="sort-controls">
               <button onClick={() => handleSortChange('price')}>Sort by Price</button>
               <button onClick={() => handleSortChange('title')}>Sort by Title</button>
             </div>
            </div>
            </div>
          <div className="product-grid">
            {filteredProducts.map(product => (
             <Link to={`/product/${product.listingId}`} key={product.listingId} className="product-link">
              <div className="product-card"   style={{ border: '2px solid black'}} key={product.listingId}>
                <DisplayImage filename={product.image}/>
                <div className="product-details">
                  <p className="product-title">{product.title}</p>
                  <p className="product-price">${product.price}</p>
                  <p className="product-description">{product.description}</p>
                  <p className="product-category">Category: {product.category}</p>
                  <p className="product-status">Status: {product.status}</p>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
        </Layout>
      );
    }

export default DisplayAllProducts;
