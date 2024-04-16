import React, { useEffect, useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Link from '@mui/material/Link';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Products() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then(response => response.json())
      .then(data => setRows(data));
  }, []);

  return (
    <React.Fragment>
      <Title>Product Listings</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Listing ID</TableCell>
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
              <TableCell>{row.listingId}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{`$${row.price}`}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more listings
      </Link>
    </React.Fragment>
  );
}