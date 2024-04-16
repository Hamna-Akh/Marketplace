import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Title from './Title';
import { Typography } from '@mui/material';

export default function AverageSoldProducts() {
  const [avgSales, setAvgSales] = useState(0);

  function preventDefault(event) {
    event.preventDefault();
  }

  useEffect(() => {
    axios.get('http://localhost:8080/products/average-sales')
      .then(response => {
        setAvgSales(response.data);
      })
      .catch(error => {
        console.error('Error fetching average sales:', error);
      });
  }, []);

  return (
    <React.Fragment>
      <Title>Average Sales of Sold Items</Title>
      <Typography component="p" variant="h4">
        ${avgSales.toFixed(2)}
      </Typography>
    </React.Fragment>
  );
}