import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { blue } from '@mui/material/colors';

const StudentInfo = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  height: theme.spacing('85vh'),
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid(props) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
          {Array.from(Array(1)).map((_, index) => (
            <Grid item xs={4} sm={4} md={4} key={props}>
              <StudentInfo>
                <h2>Student Info</h2>
                <Grid item xs={4.15} align='left' container spacing={0.5} style={{ padding: 5, marginLeft: 10 }}>
                  <h3>
                    <b>First Name: </b>
                  </h3>
                  <h3>
                    <b>Last Name: </b>
                  </h3>
                  <h3>
                    <b>Date of Birth: </b>
                  </h3>
                  <h3>
                    <b>Age: </b>
                  </h3>
                  <h3>
                    <b>Email Address: </b>
                  </h3>
                  <h3>
                    <b>Phone Number: </b>
                  </h3>
                  <h3>
                    <b>Home Address: </b>
                  </h3>
                  <h3>
                    <b>Apt. #: </b>
                  </h3>
                  <h3>
                    <b>Zip Code: </b>
                  </h3>
                  <h3>
                    <b>State: </b>
                  </h3>
                </Grid>
              </StudentInfo>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}