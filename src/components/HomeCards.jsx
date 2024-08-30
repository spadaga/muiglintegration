import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/system';

const cardsData = [
    { id: 1, number: '101', text: 'Customers', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.', bgColor: '#e3f2fd' },
    { id: 2, number: '202', text: 'Bills', details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', bgColor: '#ffebee' },
    { id: 3, number: '303', text: 'Product Catalog', details: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', bgColor: '#e8f5e9' },
    { id: 4, number: '404', text: 'Purchase Orders', details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.', bgColor: '#fff3e0' },
];

const StyledCard = styled(Card)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    maxWidth: '260px',
    minHeight: '120px',
    margin: '16px',
    perspective: '1000px',
    '&:hover .flip-card-inner': {
        transform: 'rotateY(180deg)',
    },
}));

const FlipCardInner = styled('div')({

    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
});

const FlipCardFront = styled(CardContent)(({ bgColor }) => ({


    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backfaceVisibility: 'hidden',
}));

const FlipCardBack = styled(CardContent)({
    backgroundColor: '#fff',
    color: 'black',
    padding: '16px',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transform: 'rotateY(180deg)',
    backfaceVisibility: 'hidden',
});

const CustomCard = ({ number, text, details, bgColor }) => {
    return (
        <StyledCard>
            <FlipCardInner className="flip-card-inner">
                <FlipCardFront sx={{
                    backgroundColor: bgColor,
                    backgroundImage: `linear-gradient(135deg, ${bgColor} 40%, rgba(255, 255, 255, 0.2) 100%)`,
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',

                }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="subtitle1" fontWeight="bold" color="primary">
                            {text}
                        </Typography>
                        <Box
                            sx={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontWeight: "500"

                            }}
                        >
                            <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold", color: '#1976d2', opacity: "1" }} variant="h5">{number}</Typography>
                        </Box>


                        {/* <IconButton  sx={{
                position: 'absolute',
                right: '0px',
                top: '46%',
                transform: 'translateY(-50%)',
                
              }}>
              <ChevronRightIcon sx={{fontSize:"34px" ,opacity:"0.5"}} />
            </IconButton> */}
                    </Box>
                    <Box
                        mt={2}
                        sx={{
                            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                        }}
                    />
                    <Box mt={2}>
                        <Typography
                            variant="body2"
                            sx={{
                                display: '-webkit-box',
                                overflow: 'hidden',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2,
                                textAlign: "left"
                            }}
                        >
                            {details}
                        </Typography>
                    </Box>
                </FlipCardFront>
                <FlipCardBack>
                    <Typography variant="body2">{details}</Typography>
                </FlipCardBack>
            </FlipCardInner>
        </StyledCard>
    );
};

const HomeCards = () => {
    return (
        <Box display="flex" flexWrap="wrap" justifyContent="left">
            {cardsData.map((card) => (
                <CustomCard
                    key={card.id}
                    number={card.number}
                    text={card.text}
                    details={card.details}
                    bgColor={card.bgColor}
                />
            ))}
        </Box>
    );
};

export default HomeCards;
