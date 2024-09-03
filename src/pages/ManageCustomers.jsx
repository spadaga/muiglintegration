import React from 'react'
import CustomerSettings from '../components/CustomerSettings'
import { Box } from '@mui/material'
import Breadcrumbcomponent from '../components/Breadcrumbcomponent'
import Maincontent from '../components/Maincontent'
import { RequestQuoteOutlined } from '@mui/icons-material'

const ManageCustomers = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 1, display: "flex", width: "100%", border: "0px solid gray", borderRadius: "10px" }}>

    <Box sx={{ marginBottom: 2, width: "100%" }}>
      <Breadcrumbcomponent pagename="Manage Customer" IconComponent={RequestQuoteOutlined}/>
      <Maincontent Innercomponent={CustomerSettings} />
    </Box>

  </Box>
  )
}

export default ManageCustomers
