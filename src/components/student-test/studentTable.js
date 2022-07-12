/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import StudentModal from './studentModal';
import StudentRegistryModal from './studentRegistryModal';
import SearchBar from './searchBar';

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const deactivateHandler = () => {
  console.log('this is when it should deactivate');
};

const deleteHandler = () => {
  console.log('this is when it should delete');
};

const reactivateHandler = () => {
  console.log('this is when it should reactivate');
};

TabPanel.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function createDataActive(
  firstName,
  lastName,
  email,
  number,
  coaches,
  deactivate
) {
  return { firstName, lastName, email, number, coaches, deactivate };
}

function createDataInactive(
  firstName,
  lastName,
  email,
  number,
  deleteStudent,
  reactivate
) {
  return { firstName, lastName, email, number, deleteStudent, reactivate };
}

const rows = [
  createDataActive(
    'Kevin',
    'Niu',
    'test@gmail.com',
    '414 - 414 - 414',
    24,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
  createDataActive(
    'Jason',
    'Dong',
    'test@gmail.com',
    '414 - 414 - 414',
    37,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
  createDataActive(
    'Sirat',
    'Mokha',
    'test@gmail.com',
    '414 - 414 - 414',
    24,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
  createDataActive(
    'Noah',
    'Ren',
    'test@gmail.com',
    '414 - 414 - 414',
    67,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
  createDataActive(
    'Holly',
    'Raetz',
    'test@gmail.com',
    '414 - 414 - 414',
    67,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
  createDataActive(
    'Aadi',
    'Tiwari',
    'test@gmail.com',
    '414 - 414 - 414',
    49,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
  createDataActive(
    'Aadi',
    'Tiwari',
    'test@gmail.com',
    '414 - 414 - 414',
    49,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
  createDataActive(
    'Aadi',
    'Tiwari',
    'test@gmail.com',
    '414 - 414 - 414',
    49,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
  createDataActive(
    'Aadi',
    'Tiwari',
    'test@gmail.com',
    '414 - 414 - 414',
    49,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
  createDataActive(
    'Aadi',
    'Tiwari',
    'test@gmail.com',
    '414 - 414 - 414',
    49,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
];

const rowsInactive = [
  createDataInactive(
    'Hello',
    'Test',
    'test@gmail.com',
    '414 - 414 - 414',
    <Stack spacing={2} direction="row">
      <StudentModal modalType="delete" confirmHandler={deleteHandler} />
    </Stack>,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="reactivate" confirmHandler={reactivateHandler} />
    </Stack>
  ),
  createDataInactive(
    'Bob',
    'Jones',
    'test@gmail.com',
    '414 - 414 - 414',
    <Stack spacing={2} direction="row">
      <StudentModal modalType="delete" confirmHandler={deleteHandler} />
    </Stack>,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="reactivate" confirmHandler={reactivateHandler} />
    </Stack>
  ),
];

export default function StudentTable() {
  const [search, setSearch] = useState('');

  const [value, setValue] = React.useState(0);
  const [age, setAge] = React.useState('');
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: '100%', height: '60%' }}>
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
                    <SearchBar 
                        setSearch={setSearch}
                    />
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <StudentRegistryModal 
                    />
                </Grid>
            </Grid>
      <TabPanel value={value} index={0}>
        <TableContainer component={Paper} sx={{ height: '70vh' }}>
          <Table
            sx={{ minWidth: 10, height: 'max-content' }}
            aria-label="simple table"
            stickyHeader
          >
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Name </StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Phone Number</StyledTableCell>
                <StyledTableCell align="left"> </StyledTableCell>
                <StyledTableCell align="left"> </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rows
                .filter((post) => {
                  if (search === '') {
                    return post;
                  }
                  if (
                    post.firstName.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return post;
                  }
                  if (
                    post.lastName.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return post;
                  }
                  if (post.email.toLowerCase().includes(search.toLowerCase())) {
                    return post;
                  }
                  if (
                    post.number.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return post;
                  }
                  return null;
                })
                .map((row) => (
                  <StyledTableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.lastName}, {row.firstName}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.email}</StyledTableCell>
                    <StyledTableCell align="left">{row.number}</StyledTableCell>
                    <StyledTableCell align="left">
                      {' '}
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Coach
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Coach 1</MenuItem>
                            <MenuItem value={20}>Coach 2</MenuItem>
                            <MenuItem value={30}>Coach 3</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.deactivate}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 10 }} aria-label="simple table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Name </StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Phone Number</StyledTableCell>
                <StyledTableCell align="left"> </StyledTableCell>
                <StyledTableCell align="left"> </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rowsInactive
                .filter((post) => {
                  if (search === '') {
                    return post;
                  }
                  if (
                    post.firstName.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return post;
                  }
                  if (
                    post.lastName.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return post;
                  }
                  if (post.email.toLowerCase().includes(search.toLowerCase())) {
                    return post;
                  }
                  if (
                    post.number.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return post;
                  }
                  return null;
                })
                .map((row) => (
                  <StyledTableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.lastName}, {row.firstName}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.email}</StyledTableCell>
                    <StyledTableCell align="left">{row.number}</StyledTableCell>
                    <StyledTableCell align="left">
                      {row.deleteStudent}{' '}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.reactivate}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
    </Box>
  );
}
