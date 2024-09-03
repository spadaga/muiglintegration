import React from 'react'
import { Box } from '@mui/material'
import Maincontent from '../components/Maincontent'
import Breadcrumbcomponent from '../components/Breadcrumbcomponent'
import CustomerMainComponent from '../components/CustomerMainComponent'
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import BillsTable from '../components/BillsTable'

const BIlls = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 1, display: "flex", width: "100%", border: "0px solid gray", borderRadius: "10px" }}>

      <Box sx={{ marginBottom: 2, width: "100%" }}>
        <Breadcrumbcomponent pagename="Bills" IconComponent={RequestQuoteOutlinedIcon}/>
        <Maincontent Innercomponent={BillsTable} />
      </Box>

    </Box>
  )
}

export default BIlls
