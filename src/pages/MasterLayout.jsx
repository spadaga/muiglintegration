import { Box, CssBaseline, Toolbar } from '@mui/material'
import React from 'react'
import AppBarwithLeftNav from '../components/AppBarwithLeftNav'
import { Outlet } from 'react-router-dom'

const MasterLayout = () => {
    return (
        <Box sx={{ display: 'flex',width:"100%"}}>
            <CssBaseline />
            <AppBarwithLeftNav />
            
        </Box>
    )
}

export default MasterLayout
