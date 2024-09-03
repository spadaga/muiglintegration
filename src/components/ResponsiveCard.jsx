import React, { useState, useEffect } from 'react';
import { Box, Typography, Divider, Tooltip, } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import { PeopleOutlineOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const ResponsiveCard = () => {


    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/data/cardsData.json`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching the data:', error));
    }, []);


    // Function to render the left icon based on the icon name in the JSON data
    const renderIcon = (iconName) => {
        switch (iconName) {
            case 'PeopleOutlineOutlined':
                return <PeopleOutlineOutlined sx={{ fontSize: '32px', opacity: "0.5" }} />;
            case 'Home':
                return <HomeIcon />;
            default:
                return <PeopleOutlineOutlined />;
        }
    };

    // Function to render the dynamic status icon
    const renderStatusIcon = (status) => {
        switch (status) {
            case 'active':
                // return <CheckCircleIcon sx={{ color: 'green' }} />;
                return `${process.env.PUBLIC_URL}/images/1.png`
            case 'inactive':
                return `${process.env.PUBLIC_URL}/images/2.png`
            default:
                return `${process.env.PUBLIC_URL}/images/2.png`
        }
    };
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/managercustomer');
    };
    return (





        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {data.map((item) => (
                <Box
                    key={item.id}

                    sx={{
                        width: '257px',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '8px 8px',
                        backgroundColor: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        border: '1px solid #ccc',
                        boxShadow: '0px 0px 1px 0px rgba(0, 0, 0, 0.3)',
                        borderLeft: '4px solid #dedede',
                        paddingLeft: '8px',
                        borderBottom: '4px solid #dedede',
                        '&:hover': {
                            boxShadow: '0 0 0 3px #75d1ff',
                            border: '1px solid #dedede',
                            backgroundColor: '#fff',
                            top: 'initial',
                        },
                    }}

                    onClick={handleCardClick}
                >
                    {/* Top Section with Left Icon and Right Labels */}
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        {/* Left Icon */}
                        <Box sx={{ marginRight: '16px' }}>
                            {renderIcon(item.icon)}
                        </Box>
                        {/* Right Side Labels */}
                        <Box>
                            <Tooltip title={item.label1} arrow>
                                <Box
                                    sx={{
                                        maxWidth: '100%', // Ensure it takes up the full width of the container
                                        whiteSpace: 'normal', // Allows text to wrap
                                        overflow: 'hidden', // Hides overflow
                                        textOverflow: 'ellipsis', // Adds ellipsis
                                        display: '-webkit-box', // Required for the line clamping to work
                                        WebkitLineClamp: 2, // Limits text to 2 lines
                                        WebkitBoxOrient: 'vertical', // Required for the line clamping to work
                                        lineHeight: 1.4
                                    }}
                                >
                                    <Typography variant="subtitle1" sx={{
                                        fontSize: "12px", lineHeight: 1.4
                                    }}>{item.label1}</Typography>
                                </Box>
                            </Tooltip>
                            <Typography variant="body2" sx={{ fontSize: "11px", lineHeight: "1.6", opacity: "0.8", color: "blue" }}>{item.label2}</Typography>
                            <Typography variant="body2" sx={{ fontSize: "11px", lineHeight: "1.6", opacity: "0.8", color: "maroon" }}>{item.label3}</Typography>
                        </Box>
                    </Box>

                    {/* Underline */}
                    <Divider />

                    {/* Bottom Section with Status Icon, Middle and Right Text */}
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '4px' }}>
                        {/* Status Icon */}
                        <Box sx={{ marginRight: '16px' }}>
                            <img
                                src={renderStatusIcon(item.status)}
                                alt={item.status}
                                style={{ width: '24px', height: '24px' }}
                            />
                        </Box>
                        {/* Middle Text */}
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="body2">{item.middleText}</Typography>
                        </Box>
                        {/* Right Text */}
                        <Box>
                            <Typography variant="body2">{item.rightText}</Typography>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default ResponsiveCard;
