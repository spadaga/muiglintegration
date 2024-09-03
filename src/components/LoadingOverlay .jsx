import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const LoadingOverlay = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent background
                zIndex: 1300, // Ensure it's above other content
            }}
        >
            <CircularProgress style={{ color: '#ffffff' }} /> {/* White spinner */}
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="white"
                    sx={{ marginTop: 8 }} // Spacing between spinner and text
                >Loading the content...</Typography>
            </Box>
        </Box>
    );
};

export default LoadingOverlay;
