import React from 'react'
import BreadcrumbContainer from '../components/BreadcrumbContainer'
import Breadcrumbcomponent from '../components/Breadcrumbcomponent'
import MasterLayout from './MasterLayout'
import { Box } from '@mui/material'
import Maincontent from '../components/Maincontent'
import CustomerMainComponent from '../components/CustomerMainComponent'
import {PeopleOutlineOutlined } from '@mui/icons-material';
const Customer = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 1,display:"flex",width:"100%",border:"0px solid gray" , borderRadius:"10px" }}>
       
        <Box sx={{ marginBottom: 2,width:"100%" }}>
       <Breadcrumbcomponent pagename="Customers" IconComponent={PeopleOutlineOutlined}/>
       <Maincontent Innercomponent={CustomerMainComponent}/>
        </Box>

      </Box>
  )
}

export default Customer
