import { Box, Typography } from '@mui/material'
import React from 'react'
import SearchContainer from './SearchContainer'
import Tabs from './CustomerTabs'
import CustomerTabs from './CustomerTabs'

const Maincontent = ({Innercomponent}) => {
    return (
        <Box
            sx={{
                height: 'auto',
                minHeight: '400px', // Ensures the box has a minimum height
                backgroundColor: '#fff',
                padding: '16px',
                  border:"1px solid gray",
                borderRadius:"10px"
            }}
        >
           { Innercomponent && <Innercomponent/>}
            {/* <SearchContainer/>
           <CustomerTabs sx={{mt:"20px"}}/> */}
          
        </Box>
    )
}

export default Maincontent
