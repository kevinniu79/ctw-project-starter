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
  height: theme.spacing('80vh'),
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
                <Grid container
                  spacing={0}
                  align="center"
                  justify="center"
                  direction="column"
                  style={{ backgroundColor: '#2656A5', color: '#FFFFFF' }}>
                  <h2>Student Info</h2>
                </Grid>
                <Grid style={{ marginLeft: '2vh' }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    p: 0.1,
                    m: 0.1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                  }}>
                    <h3>
                      <b>First Name: Aaditya </b>
                    </h3>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    p: 0.1,
                    m: 0.1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                  }}>
                    <h3>
                      <b>Last Name: Tiwari </b>
                    </h3>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    p: 0.1,
                    m: 0.1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                  }}>
                    <h3>
                      <b>Date of Birth: 02/04/2006</b>
                    </h3>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    p: 0.1,
                    m: 0.1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                  }}>
                    <h3>
                      <b>Age: </b>
                    </h3>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    p: 0.1,
                    m: 0.1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                  }}>
                    <h3>
                      <b>Email Address:  </b>
                    </h3>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    p: 0.1,
                    m: 0.1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                  }}>
                    <h3>
                      <b>Phone Number: </b>
                    </h3>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    p: 0.1,
                    m: 0.1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                  }}>
                    <h3>
                      <b>Home Address: </b>
                    </h3>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    p: 0.1,
                    m: 0.1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                  }}>
                    <h3>
                      <b>Apt. #: </b>
                    </h3>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    p: 0.1,
                    m: 0.1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                  }}>
                    <h3>
                      <b>Zip Code: </b>
                    </h3>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    p: 0.1,
                    m: 0.1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                  }}>
                    <h3>
                      <b>State: </b>
                    </h3>
                  </Box>
                </Grid>
              </StudentInfo>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid >
  );
}