import React, { useEffect, useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Title from './Title';
import axios from 'axios';

export default function Products() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/seller'); // Assuming your backend endpoint for fetching user's products is /seller
      setRows(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <React.Fragment>
      <Title>Product Listings</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.listingId}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{`$${row.price}`}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}