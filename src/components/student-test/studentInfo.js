import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TabsFunction from './detailsTabs';
import ROUTES from '../../constants/routes';

const StudentInfo = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,

  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  p: 0.1,
  m: 0.1,
  bgcolor: 'background.paper',
  borderRadius: 1,
}));

export default function ResponsiveGrid(props) {
  const onBackClick = () => {
    navigate(ROUTES.STUDENT_TEST);
  };
  const navigate = useNavigate();
  const buttonText = '< Back to table';
  return (
    <Grid container>
      <Paper
        sx={{
          backgroundColor: 'dark',
          '#1A2027': '#fff',
          textAlign: 'center',
          height: '80vh',
          color: 'secondary',
          width: '50vh',
          mr: '10vh',
        }}
      >
        <Grid
          container
          spacing={0}
          align="center"
          justify="center"
          direction="column"
          style={{ backgroundColor: '#2656A5', color: '#FFFFFF' }}
        >
          <h2>Student Info</h2>
        </Grid>
        <Grid style={{ marginLeft: '2vh' }}>
          <StudentInfo>
            <h3>
              <b>First Name: Aaditya </b>
            </h3>
          </StudentInfo>
          <StudentInfo>
            <h3>
              <b>Last Name: Tiwari </b>
            </h3>
          </StudentInfo>
          <StudentInfo>
            <h3>
              <b>Date of Birth: 02/04/2006</b>
            </h3>
          </StudentInfo>
          <StudentInfo>
            <h3>
              <b>Age: </b>
            </h3>
          </StudentInfo>
          <StudentInfo>
            <h3>
              <b>Email Address: </b>
            </h3>
          </StudentInfo>
          <StudentInfo>
            <h3>
              <b>Phone Number: </b>
            </h3>
          </StudentInfo>
          <StudentInfo>
            <h3>
              <b>Home Address: </b>
            </h3>
          </StudentInfo>
          <StudentInfo>
            <h3>
              <b>Apt. #: </b>
            </h3>
          </StudentInfo>
          <StudentInfo>
            <h3>
              <b>Zip Code: </b>
            </h3>
          </StudentInfo>
          <StudentInfo>
            <h3>
              <b>State: </b>
            </h3>
          </StudentInfo>
        </Grid>
      </Paper>
      <TabsFunction />
      <Button
        variant="outlined"
        size="small"
        onClick={onBackClick}
        justify="left"
      >
        {buttonText}
      </Button>
    </Grid>
  );
}
