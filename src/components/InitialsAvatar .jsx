import React from 'react';
import { Avatar } from '@mui/material';
import { styled } from '@mui/system';

const StyledAvatar = styled(Avatar)({
  backgroundColor: '#1976d2', // Circle color
  width: 30, // Circle width
  height: 30, // Circle height
  fontSize: '0.75rem', // Initials font size
  fontWeight: 'bold', // Initials font weight
  marginRight:"4px"
});

const InitialsAvatar = () => {
  return (
    <StyledAvatar>
      KM
    </StyledAvatar>
  );
};

export default InitialsAvatar;
