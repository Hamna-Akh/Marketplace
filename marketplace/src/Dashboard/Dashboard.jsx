import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SoldItemsByCategory from './SoldItemsByCategory';
import AverageSoldProducts from './AverageSoldProducts';
import Products from './Products';
import './Dashboard.css';
import '../App.css';
import Layout from '../Components/Layout';

export default function Dashboard() {
    return (
        <Layout>
            <div className="dashboard-container">
                <div className="page-title-container">
                    <h1 className="page-name">My Dashboard</h1>
                </div>
                <Grid container spacing={3}>
                    {/* Sold Items by Category - Pie Chart */}
                    <Grid item xs={12} md={4} lg={3} >
                        <Paper className="dashboard-card"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                
                            }}
                        >
                            <SoldItemsByCategory />
                        </Paper>
                    </Grid>
                    {/* Average Sold Products */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className="dashboard-card"
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 240,
                            }}
                        >
                            <AverageSoldProducts />
                        </Paper>
                    </Grid>
                    {/* Product Listings */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }} className="dashboard-card">
                            <Products />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    );
}