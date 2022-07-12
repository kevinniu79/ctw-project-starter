/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
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
import StudentModal from './studentModal';
import StudentRegistryModal from './studentRegistryModal';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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

function createDataActive(name, email, number, coaches, deactivate) {
  return { name, email, number, coaches, deactivate };
}

function createDataInactive(name, email, number, deleteStudent, reactivate) {
  return { name, email, number, deleteStudent, reactivate };
}

const rows = [
  createDataActive(
    'Niu, Kevin',
    'test@gmail.com',
    '414 - 414 - 414',
    24,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
  createDataActive(
    'Dong, Jason',
    'test@gmail.com',
    '414 - 414 - 414',
    37,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
  createDataActive(
    'Mokha, Sirat',
    'test@gmail.com',
    '414 - 414 - 414',
    24,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
  createDataActive(
    'Ren Noah',
    'test@gmail.com',
    '414 - 414 - 414',
    67,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
  createDataActive(
    'Tiwari, Aadi',
    'test@gmail.com',
    '414 - 414 - 414',
    49,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
  createDataActive(
    'Tiwari, Aadi',
    'test@gmail.com',
    '414 - 414 - 414',
    49,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
  createDataActive(
    'Tiwari, Aadi',
    'test@gmail.com',
    '414 - 414 - 414',
    49,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
  createDataActive(
    'Tiwari, Aadi',
    'test@gmail.com',
    '414 - 414 - 414',
    49,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
  createDataActive(
    'Tiwari, Aadi',
    'test@gmail.com',
    '414 - 414 - 414',
    49,
    <Stack spacing={2} direction="row">
      <StudentModal modalType="deactivate" confirmHandler={deactivateHandler} />
    </Stack>
  ),
  createDataActive(
    'Tiwari, Aadi',
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
    'Test, Hello',
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
    'Jones, Bob',
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [age, setAge] = React.useState('');
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: '100%', height: '60%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Active" {...a11yProps(0)} />
          <Tab label="Inactive" {...a11yProps(1)} />

          <Grid container justifyContent="flex-end">
            <StudentRegistryModal />
          </Grid>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TableContainer component={Paper} sx={{ height: '70vh' }}>
          <Table
            sx={{ minWidth: 10, height: 'max-content' }}
            aria-label="simple table"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell>Name </TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Phone Number</TableCell>
                <TableCell align="left"> </TableCell>
                <TableCell align="left"> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.number}</TableCell>
                  <TableCell align="left">
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
                  </TableCell>
                  <TableCell align="left">{row.deactivate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 10 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name </TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Phone Number</TableCell>
                <TableCell align="left"> </TableCell>
                <TableCell align="left"> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsInactive.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.number}</TableCell>
                  <TableCell align="left">{row.deleteStudent} </TableCell>
                  <TableCell align="left">{row.reactivate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
    </Box>
  );
}
