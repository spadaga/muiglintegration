import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, TablePagination, TextField, Paper, Box, Typography } from '@mui/material';
// import { format } from 'date-fns';

const fetchData = async () => {




    const response = await fetch('/data/Billls.json')
        .then((response) => response.json())


    return response;

};

const BillsTable = () => {
    const [rows, setRows] = useState([]);
    const [filteredRows, setFilteredRows] = useState([]);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('PC');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const loadData = async () => {
            //   const data = await fetchData();
            //   setRows(data);
            //   setFilteredRows(data);
            try {
                const data = await fetchData();
                setRows(data); setFilteredRows(data);
            } catch (error) {
                console.error('Error loading data:', error);
            }

        };
        loadData();
    }, []);





    useEffect(() => {
        const filtered = rows.filter(row =>
            Object.values(row).some(value =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        setFilteredRows(filtered);
        setPage(0);
    }, [searchTerm, rows]);

    const handleRequestSort = (property) => {
        const isAscending = orderBy === property && order === 'asc';
        setOrder(isAscending ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const getSortedRows = () => {
        return [...filteredRows].sort((a, b) => {
            if (a[orderBy] < b[orderBy]) {
                return order === 'asc' ? -1 : 1;
            }
            if (a[orderBy] > b[orderBy]) {
                return order === 'asc' ? 1 : -1;
            }
            return 0;
        });
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Failed':
                return 'red';
            case 'Pending':
                return 'blue';
            case 'Transmitted':
                return 'green';
            case 'Inprogress':
                return 'purple';
            default:
                return 'black';
        }
    };
    // Custom class name for the search label
    const useStyles = {
        searchLabel: {
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            padding: '0 10px',

        }
    };
    const displayRows = getSortedRows().slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    // Calculate the displayed range and total records
    const totalRecords = rows.length;
    const startIndex = page * rowsPerPage + 1;
    const endIndex = Math.min((page + 1) * rowsPerPage, totalRecords);

    return (

        <Paper>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
                <TextField
                    label="Search"
                    variant="outlined"
                    onChange={handleSearch}

                    style={{ margin: '1px', width: "400px", justifyContent: "center", height: 42, alignContent: "center", marginRight: 0 }}
                    // Set the height here
                    InputProps={{
                        style: { height: '100%', boxSizing: 'border-box' }  // Ensure the input element also respects the height
                    }}


                /></Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {['PC', 'Invoice', 'Customer', 'Status', 'Submitted On'].map((column) => (
                                <TableCell key={column} className="header-cell" sx={{ width: '20%', }}>
                                    <TableSortLabel
                                        active={orderBy === column}
                                        direction={orderBy === column ? order : 'asc'}
                                        onClick={() => handleRequestSort(column)}
                                    >
                                        {column}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            displayRows.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} align="center">
                                        No records found
                                    </TableCell>
                                </TableRow>
                            ) : (


                                displayRows.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{row.PC}</TableCell>
                                        <TableCell>{row.Invoice}</TableCell>
                                        <TableCell>{row.Customer}</TableCell>
                                        <TableCell sx={{ color: getStatusColor(row.Status), }}>{row.Status}</TableCell>
                                        <TableCell>{row.SubmittedOn}</TableCell>
                                    </TableRow>
                                ))
                            )}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                <Typography variant="body2">
                    Showing {startIndex} to {endIndex} of {totalRecords} entries
                </Typography>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={filteredRows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </Paper>
    );
};

export default BillsTable;
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/data/Billls.json'); // Replace with your API URL
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const jsonData = await response.json(); // Parse the JSON from the response
//         //setData(jsonData); // Set the fetched data to state
//         setRows(jsonData);setFilteredRows(jsonData);
//       } catch (error) {
//         console.log(error.message); // Handle errors
//         return;
//       } finally {
//        // setLoading(false); // Set loading to false when the request is complete
//         console.log("done")
//       }
//     };

//     fetchData(); // Call the async function to fetch data
//   }, []); // Empty dependency array means this effect runs once when the component mounts


//   useEffect(() => {
//     fetch('/data/Billls.json')
//         .then((response) => response.json())
//         .then((jsonData) => {setRows(jsonData);setFilteredRows(jsonData);})

//         setRows(jsonData);setFilteredRows(jsonData);
//         .catch((error) => console.error('Error fetching the data:', error));
// }, []);