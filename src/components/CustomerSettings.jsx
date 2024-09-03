import React from 'react'
import BasicTablewithEdit from './BasicTablewithEdit'
import { Box, Typography, Icon } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'; // Example icon
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

const Card = ({IconComponent , mainText, subText1, subText2 }) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2,
            borderBottom: '1px solid #ccc',
            borderRadius: 0,
            mb: 0, // Margin bottom for spacing between cards
            bgcolor: '#f9f9f9',cursor:"pointer",
            height: 90 // Fixed height for all cards
        }}
    >
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                mr: 1 // Margin right to space icon from text
            }}
        >
            <Icon>
                <IconComponent  />
            </Icon>
        </Box>
        <Box>
            <Typography variant="h8">{mainText}</Typography>
            <Typography variant="body2" color="textSecondary">
                {subText1}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {subText2}
            </Typography>
        </Box>
    </Box>
);
const CardsInBox = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                border: '0px solid #ccc',
                borderRadius: 2,
                p: 0
            }}
        >
            <Card IconComponent={ManageAccountsOutlinedIcon} mainText="Customers" subText1="8 Accounts" subText2="" />
            <Card IconComponent={InsertLinkOutlinedIcon}  mainText="Connections" subText1="NetSuites" subText2="1 Connection" />
            <Card IconComponent={Inventory2OutlinedIcon}  mainText="Bills and Credit Memo Settings" subText1="Automotic" subText2="Item Level" />
        </Box>
    );
};
const CardsInProductsBox = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                border: '0px solid #ccc',
                borderRadius: 2,
                p: 0
            }}
        >
              <Card IconComponent={InsertLinkOutlinedIcon} mainText="Product Catalog" subText1="166 Products" subText2="" />
            <Card  IconComponent={SettingsOutlinedIcon} mainText="Upload Products Excel" subText1="16 Uploads" subText2="" />
            <Card IconComponent={ManageAccountsOutlinedIcon} mainText="Search Products" subText1=" " subText2="" />
            <Card IconComponent={InsertLinkOutlinedIcon} mainText="History" subText1=" " subText2=" " />
        </Box>
    );
};

const CardsInTransactionBox = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                border: '0px solid #ccc',
                borderRadius: 2,
                p: 0
            }}
        >
            <Card  IconComponent={ManageAccountsOutlinedIcon} mainText="Purchase Orders" subText1="166 Orders" subText2="Last Received on 01/01/24" />
            <Card IconComponent={InsertLinkOutlinedIcon} mainText="Customer Bils" subText1="100 Records" subText2="Last Received on 01/01/24" />
            <Card  IconComponent={SettingsOutlinedIcon} mainText="Customer Text 1" subText1="Sub Text 1" subText2="Last Received on 01/01/24" />
            <Card IconComponent={ManageAccountsOutlinedIcon} mainText="Customer Text 2" subText1="Sub Text 3" subText2="Last Received on 01/01/24" />
            <Card IconComponent={InsertLinkOutlinedIcon} mainText="Customer Text 3" subText1="Sub Text 5" subText2="Last Received on 01/01/24" />
        </Box>
    );
};
const CustomerSettings = () => {
    return (
        <div>
            <BasicTablewithEdit />
            <Box sx={{ display: "flex", p: 2, gap: 2, width: "100%" }}>
                <Box component="fieldset" sx={{
                    flex: 1, border: '1px solid #ccc', borderRadius: 2, p: 1, '& legend': {
                        bgcolor: 'primary.main', // Background color for the legend
                        color: 'white', // Text color
                        padding: '4PX 12px',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        fontSize: '0.7rem',
                        textAlign: 'left',
                        letterSpacing:"1px",
                        left: 0,
                        right: 0,
                    },
                }}>
                    <legend>SETTINGS</legend>

                    <CardsInBox />
                </Box>


                <Box component="fieldset" sx={{
                     flex: 1, border: '1px solid #ccc', borderRadius: 2, p: 1, '& legend': {
                        bgcolor: 'primary.main', // Background color for the legend
                        color: 'white', // Text color
                        padding: '4PX 12px',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        fontSize: '0.7rem',
                        textAlign: 'left',
                        letterSpacing:"1px",
                        left: 0,
                        right: 0,cursor:"pointer",
                    },
                }}>
                    <legend>PRODUCTS</legend>

                    <CardsInProductsBox />

                </Box>
                <Box component="fieldset" sx={{
                    flex: 1, border: '1px solid #ccc', borderRadius: 2, p: 1, '& legend': {
                        bgcolor: 'primary.main', // Background color for the legend
                        color: 'white', // Text color
                        padding: '4PX 12px',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        fontSize: '0.7rem',
                        textAlign: 'left',
                        letterSpacing:"1px",

                        left: 0,
                        right: 0,
                    },
                }}>
                    <legend>TRANSACTIONS</legend>

                    <CardsInTransactionBox />

                </Box>
            </Box>
        </div >
    )
}

export default CustomerSettings
