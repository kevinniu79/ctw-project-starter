/* eslint-disable prettier/prettier */
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TextField from '@mui/material/TextField';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';

import StudentRegistryModal from './studentRegistryModal';
import StudentModal from './studentModal';

const rows = [
    {firstName: 'student', lastName: 'one', email: 'superduperlongemail@enormousdomain.com', phone: '(123)-456-7890'},
    {firstName: 'Jane', lastName: 'Doe', email: 'e@mail.com', phone: '(111)-111-1111'},
    {firstName: 'John', lastName: 'Doe', email: 'em@il.com', phone: '(222)-222-2222'},
    {firstName: 'John', lastName: 'Doe', email: 'em@il.com', phone: '(222)-222-2222'},
    {firstName: 'John', lastName: 'Doe', email: 'em@il.com', phone: '(222)-222-2222'},
    {firstName: 'John', lastName: 'Doe', email: 'em@il.com', phone: '(222)-222-2222'},
    {firstName: 'John', lastName: 'Doe', email: 'em@il.com', phone: '(222)-222-2222'},
    {firstName: 'John', lastName: 'Doe', email: 'em@il.com', phone: '(222)-222-2222'},
    {firstName: 'John', lastName: 'Doe', email: 'em@il.com', phone: '(222)-222-2222'},
    {firstName: 'John', lastName: 'Doe', email: 'em@il.com', phone: '(222)-222-2222'},
    {firstName: 'John', lastName: 'Doe', email: 'em@il.com', phone: '(222)-222-2222'},
    {firstName: 'John', lastName: 'Doe', email: 'em@il.com', phone: '(222)-222-2222'},
    {firstName: 'John', lastName: 'Doe', email: 'em@il.com', phone: '(222)-222-2222'},
];

const deactivateHandler = () => {
    console.log('this is when it should deactivate');
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#2656A5',
        color: theme.palette.common.white,
    },
    // [`&.${tableCellClasses.body}`]: { },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

export default function StudentTable() {
    const registerHandler = (
        enteredFirstName,
        enteredLastName,
        enteredEmail,
        enteredPhoneNumber,
        enteredDateOfBirth
      ) => {
        console.log(
          enteredFirstName,
          enteredLastName,
          enteredEmail,
          enteredPhoneNumber,
          enteredDateOfBirth
        );
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setDateOfBirth('');
    };

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    return(
        <Paper>
            <Grid container spacing={0}>
                <Grid item xs={1}>
                    Active
                </Grid>
                <Grid item xs={1}>
                    Inactive
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <Box>
                    <TextField
                        label="Search"
                        id="outlined-end-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <SearchIcon/>
                            </InputAdornment>,
                        }}
                        fullWidth
                        size="small"
                    />
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <StudentRegistryModal 
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        phoneNumber={phoneNumber}
                        dateOfBirth={dateOfBirth}
                        onFirstNameChange={setFirstName}
                        onLastNameChange={setLastName}
                        onEmailChange={setEmail}
                        onPhoneNumberChange={setPhoneNumber}
                        onDateOfBirthChange={setDateOfBirth}
                        confirmHandler={registerHandler} 
                    />
                </Grid>
            </Grid>
            <TableContainer sx={{height: '60vh'}}>
                <Table stickyHeader sx={{height: '70vh'}}>
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>
                                Name
                            </StyledTableCell>
                            <StyledTableCell>
                                Email
                            </StyledTableCell>
                            <StyledTableCell>
                                Phone Number
                            </StyledTableCell>
                            <StyledTableCell/>
                            <StyledTableCell/>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <StyledTableCell>{row.lastName}, {row.firstName}</StyledTableCell>
                        <StyledTableCell>{row.email}</StyledTableCell>
                        <StyledTableCell>{row.phone}</StyledTableCell>
                        <StyledTableCell>coach</StyledTableCell>
                        <StyledTableCell>
                            <StudentModal
                                modalType="deactivate"
                                confirmHandler={deactivateHandler}
                            />
                        </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}