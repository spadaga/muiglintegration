import React from 'react';
import { Box, Typography } from '@mui/material';

const HeaderWithContent = ({ imageSrc, headerText, children }) => {
  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #ddd', // Bottom border for the header
          paddingBottom: 2,
          marginBottom: 2,
        }}
      >
        {/* Image on the left */}
        <Box
          component="img"
          src={imageSrc}
          alt="Header Image"
          sx={{
            width: 50, // Adjust the size of the image
            height: 50,
            marginRight: 2,
          }}
        />

        {/* Text on the right */}
        <Typography variant="h6" component="div">
          {headerText}
        </Typography>
      </Box>

      {/* Main Content Section */}
      <Box>
        {children} {/* This will render the main content */}
      </Box>
    </Box>
  );
};

export default HeaderWithContent;
