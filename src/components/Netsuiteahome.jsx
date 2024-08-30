import React from 'react'
import HeaderWithContent from './HeaderWithContent';
import { Typography } from '@mui/material';

const Netsuiteahome = () => {
    const imageSrc = "/images/"; // Replace with your image imsource
  const headerText = "Header Title";

  return (
    <HeaderWithContent imageSrc={imageSrc} headerText={headerText}>
    <Typography variant="body1">
      This is the main content below the header. You can add more content here.
    </Typography>
  </HeaderWithContent>
  )
}

export default Netsuiteahome
