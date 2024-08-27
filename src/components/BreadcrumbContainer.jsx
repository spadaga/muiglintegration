import React from 'react';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { Home, HomeOutlined, PeopleOutlineOutlined } from '@mui/icons-material';
import Maincontent from './Maincontent';

const BreadcrumbContainer = () => {
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px', // Optional padding
                    backgroundColor: '#f5f5f5', // Optional background color
                }}
            >
                {/* Breadcrumb on the left */}
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                    <Box
                        sx={{
                            display: "flex", justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    ><Home sx={{fontSize:"16px" ,m:"0px 4px"}} /> Home
                    </Box>
                    </Link>
                    {/* <Link underline="hover" color="inherit" href="/category">
                        Category
                    </Link> */}
                    <Typography color="text.primary">Current Page</Typography>
                </Breadcrumbs>

                {/* Text on the right */}
                <Typography>
                    <Box
                        sx={{
                            display: "flex", justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    ><PeopleOutlineOutlined /> Customers
                    </Box>
                </Typography>
                
            </Box><Maincontent/>
            {/* Box below the breadcrumb with auto height */}
            
        </Box>
    );
};

export default BreadcrumbContainer;
