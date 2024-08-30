import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchAndButtonComponent from './SearchAndButtonComponent';
import ResponsiveCard from './ResponsiveCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function CustomerTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',  border:"1px solid gray",
      borderRadius:"6px",marginTop:"20px" }}>
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="basic tabs example"
      variant="fullWidth" // Makes the tabs fill the width of the container
    >
      <Tab label="Connected/Disconnected" />
      <Tab label="Pending Connections" />
    </Tabs>
    <Box sx={{ padding: 2 }}>
      {value === 0 && <Box>
        
        
        
        <SearchAndButtonComponent/>

        <ResponsiveCard/>
        
        
        
        </Box>}
      {value === 1 && <Box>Content for Tab 22</Box>}
    </Box>
  </Box>
  );
}
