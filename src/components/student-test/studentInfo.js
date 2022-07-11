import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const StudentInfo = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(40),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  export default function ResponsiveGrid(props) {
    return (
      <Grid container spacing={1}>
      <Grid item xs={3}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(1)).map((_, index) => (
            <Grid item xs={4} sm={4} md={4} key={props}>
              <StudentInfo>Student Info</StudentInfo>
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
    );
  }