import React from 'react';
import { Box, TextField, InputAdornment, Typography, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBoxWithAutocomplete = ({ label, options }) => {
    console.log({options})
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '0px 0px',
                backgroundColor: '#f5f5f5', // Optional background color
                border:'1px solid gray'
            }}
        >
            <Box
                sx={{
                    flex: '0.2 0 auto', // Ensures the column takes width based on its content
                    padding: '16px 16px', // Padding inside the column
                    borderRight: '1px solid #ccc', // Right border
                    backgroundColor: '#e0e0e0', // Background color for the column
                     
                }}
            >
                {/* Left side text */}
                <Typography variant="h6">
                    {label}
                </Typography>
            </Box>
            <Box
        sx={{
            flex:1,
            p:"0px 8px",
          flexGrow: 1, // Allows the column to take up remaining space
        }}
      >
                {/* Right side search box with autocomplete */}
                <Autocomplete
                    freeSolo
                    sx={{ p: 1, flex: 1 }}
                    options={options}
          getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            placeholder="Search..."
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}

                            sx={{
                                width: '280px', // Ensures search box takes full width of the container
                                height: '46px', // Sets height of the TextField
                                '& .MuiInputBase-root': {
                                  height: '100%', // Ensures inner input takes full height
                                },
                              }}
                        />
                    )}
                  
                />
            </Box>
    </Box>
    );
};

export default SearchBoxWithAutocomplete;
