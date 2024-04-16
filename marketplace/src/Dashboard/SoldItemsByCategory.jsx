import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { Chart, PieController, ArcElement, CategoryScale, Tooltip, Legend } from 'chart.js';

Chart.register(PieController, ArcElement, CategoryScale, Tooltip, Legend);

export default function SoldItemsByCategory() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/products/sold-by-category')
        .then(response => {
            console.log(response.data);
            let labels = response.data.map(item => item['category']);
            let data = response.data.map(item => item['count']);
            const backgroundColors = {
                'CLOTHES': 'rgba(255, 99, 132, 0.2)',
                'ELECTRONICS': 'rgba(54, 162, 235, 0.2)',
                'FURNITURE': 'rgba(255, 206, 86, 0.2)',
                'BEAUTY': 'rgba(75, 192, 192, 0.2)',
                'ENTERTAINMENT': 'rgba(153, 102, 255, 0.2)',
            };

            // If no items sold, set labels and data to display message
            if (labels.length === 0) {
                labels = ["Sell an item to view your summary! 😊"];
                data = [1];
            }

            const colors = labels.map(label => backgroundColors[label] || 'rgba(0, 0, 0, 0.1)');
            setChartData({
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors,
                }],
            });
        })
        .catch(error => {
            console.error('Error fetching sold products by category:', error);
        });
}, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Sold Items by Category
        </Typography>
        {chartData.labels && <Pie data={chartData} />}
      </CardContent>
    </Card>
  );

}

//<Pie data={chartData} />