import React from 'react'
import { Box } from '@mui/material'
import Maincontent from '../components/Maincontent'
import Breadcrumbcomponent from '../components/Breadcrumbcomponent'
import CustomerMainComponent from '../components/CustomerMainComponent'
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";

const ProductCatalog = () => {

    return (
      <Box component="main" sx={{ flexGrow: 1, p: 1, display: "flex", width: "100%", border: "0px solid gray", borderRadius: "10px" }}>
  
        <Box sx={{ marginBottom: 2, width: "100%" }}>
          <Breadcrumbcomponent pagename="Product Catalog" IconComponent={Inventory2OutlinedIcon}/>
          <Maincontent Innercomponent={CustomerMainComponent} />
        </Box>
  
      </Box>
    )
  
}

export default ProductCatalog
