import React from 'react';
import { Box, TextField, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const SearchAndButtonComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Aligns search box to the left and button to the right
        width: '100%', // Full width of the container
        padding: '8px 0px', // Optional padding
      }}
    >
      {/* Search Box */}
      <TextField
        placeholder="Search..."
        variant="outlined"
        sx={{ 
          width: '300px', // Adjust width as needed
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {/* Button */}
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{ 
          backgroundColor: '#1976d2',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#115293',
          },
        }}
      >
        New Integration
      </Button>
    </Box>
  );
};

export default SearchAndButtonComponent;
