import React from 'react'
import SearchContainer from './SearchContainer'
import CustomerTabs from './CustomerTabs'

const CustomerMainComponent = () => {
  return (
    <>
        <SearchContainer/>
        <CustomerTabs sx={{mt:"20px"}}/>
    </>
  )
}

export default CustomerMainComponent
