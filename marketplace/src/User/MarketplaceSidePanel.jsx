import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const MarketplaceSidePanel = () => (
  <Grid
    item
    xs={false}
    sm={4}
    md={7}
    sx={{
      backgroundColor: '#1976d2', // blue
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Typography variant="h2" color="inherit" sx={{ color: '#fff' }}>
      Marketplace
    </Typography>
  </Grid>
);

export default MarketplaceSidePanel;