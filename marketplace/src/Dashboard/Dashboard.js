import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SoldItemsByCategory from './SoldItemsByCategory';
import AverageSoldProducts from './AverageSoldProducts';
import Products from './Products';
import { Typography } from '@mui/material';
import './Dashboard.css';
import Layout from '../Components/Layout';

export default function Dashboard() {
    return (
        <Layout>
            <div className="dashboard-container">
                <h1>My Dashboard</h1>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <SoldItemsByCategory />
                        </Paper>
                    </Grid>
                    {/* AverageSoldProducts */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper
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
                    {/* Recent Orders */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Products />
                        </Paper>
                    </Grid>
                </Grid>
             </div>
        </Layout>
    );
}