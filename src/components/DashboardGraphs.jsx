// Dashboard.js
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import './chartSetup'; // Ensure this import is present

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Ensures the chart container can change size
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true, // Automatically skip labels if needed
          maxRotation: 0, // Prevent rotation of X-axis labels
          minRotation: 0, // Prevent rotation of X-axis labels
        },
      },
      y: {
        ticks: {
          padding: 10, // Add padding to create vertical space between Y-axis values
        },
      },
    },
  };

const data = {
  labels: ['2019', '2020', '2021', '2022', '2023'],
  datasets: [
    {
      label: 'Data',
      data: [65, 59, 80, 81, 56],
      backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
    },
  ],
};

const CustomGraphBox = ({ title, GraphComponent,isTall  }) => (
  <Box
    sx={{
      flex: 1,
      p: 2,
      m: 1,
      bgcolor: '#f5f5f5',
      borderRadius: 2,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      textAlign: 'center', 
      height: isTall ? 300 : 300, // Set a larger height for tall graphs
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Box sx={{ flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end' }}>
      <GraphComponent data={data} options={chartOptions} />
    </Box>
  </Box>
);

const DashboardGraphs = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <CustomGraphBox title="Customers" GraphComponent={Bar}  />
      </Grid>
      <Grid item xs={12} md={3}>
        <CustomGraphBox title="Bills" GraphComponent={Line} />
      </Grid>
     
      <Grid item xs={12} md={3}>
        <CustomGraphBox title="Product Catalog" GraphComponent={Doughnut} />
      </Grid> <Grid item xs={12} md={3}>
        <CustomGraphBox title="Purchase Orders" GraphComponent={Pie} />
      </Grid>
    </Grid>
  );
};

export default DashboardGraphs;
