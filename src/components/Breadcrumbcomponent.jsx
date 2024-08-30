import React from 'react';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { Home, HomeOutlined, PeopleOutlineOutlined } from '@mui/icons-material';
import Maincontent from './Maincontent';
import { yellow } from '@mui/material/colors';

const Breadcrumbcomponent = ({ pagename, IconComponent }) => {
    return (
        <Box sx={{ flexGrow: 1, p: 1, width: "100%", background: yellow }}>
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
                        ><Home sx={{ fontSize: "16px", m: "0px 4px" }} /> Home
                        </Box>
                    </Link>
                    {/* <Link underline="hover" color="inherit" href="/category">
                        Category
                    </Link> */}
                    <Typography color="text.primary">{pagename}</Typography>
                </Breadcrumbs>

                {/* Text on the right */}
                <Typography>
                    <Box
                        sx={{
                            display: "flex", justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <IconComponent />  {pagename}
                    </Box>
                </Typography>

            </Box>
            {/* Box below the breadcrumb with auto height */}

        </Box>
    );
};

export default Breadcrumbcomponent;
