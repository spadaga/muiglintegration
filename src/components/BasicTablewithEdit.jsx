import { Box, Divider, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { Bolt } from '@mui/icons-material';

const BasicTablewithEdit = () => {
    const [IsEditing, setIsEditing] = useState(false)
    const [customerName, setCustomerName] = useState('Customer-ABCDEF');
    const [active, setactive] = useState(0);
    const [status, setStatus] = useState('Yes');
    const [isStatusEditing, setIsStatusEditing] = useState(false);

    const HandleEditClick = () => {
        setIsEditing(!IsEditing)
        setIsStatusEditing(true); // Enable status editing when clicking edit

    }
    return (
        <div>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", mr: 1, width: "100%", padding: 0, border: "1px solid #ddd", backgroundColor: "#fffff" }}>
                <Tooltip title="Click here to edit" arrow>
                    <Box onClick={HandleEditClick}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <IconButton><BorderColorOutlinedIcon /> </IconButton>
                        <Typography variant="body2" sx={{ mr: 1 }}>Edit</Typography>
                    </Box>
                </Tooltip>
            </Box>
            <Box sx={{ display: "flex", width: "100%", padding: 0, border: "1px solid #ddd", backgroundColor: "#bbdefb", }}>
                <Box sx={{ flexBasis: "30%", display: "flex", padding: 2, alignItems: "center", justifyContent: "flex-start", fontWeight: "600" ,borderBottom: "1px solid #489eeb"}}> <Typography variant='body2' sx={{ fontWeight: '600' }}>Customer Name :</Typography></Box>
                <Box sx={{ flexBasis: "70%", alignItems: "flex-start", padding: 2, backgroundColor: "white" }}>
                    {IsEditing ? (

                        <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" value={customerName}

                            sx={{ height: '40px', width: "300px" }} // Set height here
                            InputProps={{ sx: { height: '100%' } }} // Ensure input fills the boxx

                        />)
                        : (<Typography variant='body2'>{customerName} </Typography>)}

                </Box>


            </Box>

            <Box sx={{ display: "flex", width: "100%", padding: 0, border: "1px solid #ddd", backgroundColor: "#bbdefb" }}>
                <Box sx={{ flexBasis: "30%", display: "flex", padding: 2, alignItems: "center", justifyContent: "flex-start", fontWeight: "800" }}> <Typography variant='body2' sx={{ fontWeight: '600' }}>Active :</Typography></Box>
                <Box sx={{ flexBasis: "70%", alignItems: "flex-start", padding: 2, backgroundColor: "white" }}>

                    {IsEditing ? (

                        <TextField
                            select

                            variant="outlined"
                            size="small"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            sx={{ height: '40px', width: "300px" }} // Set height here
                            InputProps={{ sx: { height: '100%' } }} // Ensure input fills the box
                        >
                            <MenuItem value="Yes">Yes</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                        </TextField>
                    )
                        : (


                            <Box sx={{ display: "flex", alignItems: 'center' }}>
                                <CircleIcon sx={{ color: '#90ee90', fontSize: 12, mr: 1 }} />
                                <Typography variant='body2'>{status}</Typography>

                            </Box>

                        )}


                </Box>


            </Box>



        </div>
    )
}

export default BasicTablewithEdit
