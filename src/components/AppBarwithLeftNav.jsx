import React, { useState } from 'react';
import { styled, useTheme } from "@mui/material/styles";
import Tooltip from '@mui/material/Tooltip';
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";

import { Menu, MenuItem } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import InitialsAvatar from "./InitialsAvatar ";
import { PeopleOutlineOutlined } from "@mui/icons-material";
import BreadcrumbContainer from "./BreadcrumbContainer";
import { Outlet, Link, useNavigate } from 'react-router-dom'; // Assuming you're using React Router for routing
import LoadingOverlay from "./LoadingOverlay ";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: 0,
        // width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function AppBarwithLeftNav() {
 
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = React.useState(null);


  const HandleTitleClick =() =>
  {
    navigate('/');
  }

  
 
 
  const handleNavItemClick = (path) => {
    // Navigate to the selected path\
   

    const handleNavigation = (path) => {
        setLoading(true);
        setTimeout(() => {
          navigate(path);
          setLoading(false); // Remove this if you want the loading overlay to persist until the next page loads
        }, 1500); // Simulate a delay; adjust this time as needed
      };

    setSelectedIndex(path);

    switch (path) {

      case 0:
        handleNavigation('customer');
        break;
      case 1:
        handleNavigation('bills');
        break;
      case 2:
        handleNavigation('productcatalog');
        break;
      case 3:
        handleNavigation('purchaseorders');
        break;
    }
    // Additional logic can be added here
  };
  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .MuiTooltip-tooltip`]: {
      backgroundColor: '#1976d2',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 14,
      borderRadius: '4px',
      padding: '8px',
      position: 'relative',
    },
    [`& .MuiTooltip-arrow`]: {
      color: '#1976d2',
    },
    [`& .MuiTooltip-tooltip::before`]: {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '-8px',
      transform: 'translateY(-50%)',
      borderStyle: 'solid',
      borderWidth: '8px 8px 8px 0',
      borderColor: 'transparent #333 transparent transparent',
    },
  }));

  return (

   <>
    {loading && <LoadingOverlay />}
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton

            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                color: "white",
                marginRight: 5,
              },
              // open && { display: 'block' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <div className="titlecontainer" sx={{cursor:"pointer"}} onClick={HandleTitleClick} >
            <Typography variant="h6" noWrap component="div" title='Click here to Home Page' sx={{ fontWeight: 'bold',cursor:"pointer" }}>
              GL Integration
            </Typography>
            {/* Subtext with smaller font size */}
            <Typography variant="body2" sx={{ fontSize: 12 }}>
              Admin
            </Typography>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <AccountCircleOutlinedIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {/* Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{ top: "12px" }}
      >
        <MenuItem onClick={handleMenuClose} sx={{
          fontSize: "0.75rem", mb: 2,


          '&:hover': {
            borderLeft: '4px solid #007bff',
          },

        }}>
          <InitialsAvatar />
          Karthikeya, Murugesan
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{
          fontSize: "0.75rem", mb: 2,

          '&:hover': {
            borderLeft: '4px solid #007bff',
          },

        }}>
          {/* Second menu item with an icon */}
          <LogoutOutlinedIcon fontSize="small" sx={{ m: "0px 4px", color: "#1976d2" }} />
          Log out
        </MenuItem>
      </Menu>
      <Drawer variant="permanent" open={open} onClose={toggleDrawer}>
        {/* <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader> */}
        <Divider />
        <List sx={{ mt: "54px" }}>
          {["Customers", "Bills", "Product Catalog", "Purchase Orders"].map(
            (text, index) => (

              <CustomTooltip title={!open ? text : ""} placement="right" arrow>

                <ListItem key={text} className="LeftNavMenuItem" disablePadding sx={{
                  display: "block", mt: "10px",
                  backgroundColor: selectedIndex === index ? '#1976d2' : 'rgba(0, 0, 0, 0)',
                  '& .MuiListItemIcon-root': {
                    color: selectedIndex === index ? 'white' : 'inherit',          // Icon color on hover
                  },
                  '&:hover': {
                    backgroundColor: '#1976d2', // Change this color as needed

                    color: "white",
                    '& .MuiListItemIcon-root': {
                      color: 'white',          // Icon color on hover
                    },
                  },
                }}>
                  <ListItemButton onClick={() => handleNavItemClick(index)}
                    sx={[
                      {
                        minHeight: 56,
                        px: 2.5,


                      },
                      open
                        ? {
                          justifyContent: "initial",
                        }
                        : {
                          justifyContent: "center",
                        },
                    ]}
                  >
                    <ListItemIcon
                      sx={[
                        {
                          minWidth: 0,
                          justifyContent: "center",


                        },
                        open
                          ? {
                            mr: 3,
                          }
                          : {
                            mr: "auto",
                          },
                      ]}
                    >
                      {index === 0 ? <PeopleOutlineOutlined /> : ""}
                      {index === 1 ? <RequestQuoteOutlinedIcon /> : ""}
                      {index === 2 ? <Inventory2OutlinedIcon /> : ""}
                      {index === 3 ? <ListAltOutlinedIcon /> : ""}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={[
                        {
                          minWidth: 0,
                          justifyContent: "center",


                        },
                        open
                          ? {
                            opacity: 1,
                          }
                          : {
                            opacity: 0,
                          },
                      ]}
                    />
                  </ListItemButton>

                </ListItem></CustomTooltip>
            )
          )}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" className="main_container" sx={{ flexGrow: 1, p: 1, width: "100%" }}>
        <DrawerHeader />
        <Box className="outletcont" sx={{ marginBottom: 2, width: "100%" }}>

          <Outlet className="outletcont" sx={{ marginBottom: 2, width: "100%" }} /> {/* This is where the routed content will be rendered */}
        </Box>

      </Box>
    </Box></>
  );
}
