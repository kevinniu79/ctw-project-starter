/* eslint-disable prettier/prettier */
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import StudentModal from './studentModal';

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
    return(
        <Paper>
            <Table>
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
                    <StyledTableRow>
                        <StyledTableCell>
                            name
                        </StyledTableCell>
                        <StyledTableCell>
                            superduperlongemail@enormousdomain.com
                        </StyledTableCell>
                        <StyledTableCell>
                            phone
                        </StyledTableCell>
                        <StyledTableCell>
                            coach button
                        </StyledTableCell>
                        <StyledTableCell>
                            <StudentModal 
                            modalType="deactivate"
                            confirmHandler={deactivateHandler}
                            />
                        </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>
                            name
                        </StyledTableCell>
                        <StyledTableCell>
                            email
                        </StyledTableCell>
                        <StyledTableCell>
                            phone
                        </StyledTableCell>
                        <StyledTableCell>
                            coach button
                        </StyledTableCell>
                        <StyledTableCell>
                            <StudentModal 
                            modalType="deactivate"
                            confirmHandler={deactivateHandler}
                            />
                        </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>
                            name
                        </StyledTableCell>
                        <StyledTableCell>
                            email
                        </StyledTableCell>
                        <StyledTableCell>
                            phone
                        </StyledTableCell>
                        <StyledTableCell>
                            coach button
                        </StyledTableCell>
                        <StyledTableCell>
                            <StudentModal 
                            modalType="deactivate"
                            confirmHandler={deactivateHandler}
                            />
                        </StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </Paper>
    );
}