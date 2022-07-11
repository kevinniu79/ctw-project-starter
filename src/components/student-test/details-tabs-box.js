/* eslint-disable prettier/prettier */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicTabs from './detailsTabs';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (


    <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent='flex-end'>
        <Grid item xs={9}>
        <Grid item xs={12}>
    <BasicTabs> test </BasicTabs>
          <Item>
            <h3>
              <b>Post Secondary Plan</b>
            </h3>
            <h5>
              <b>Plans After College: </b>
            </h5>
            <h5>
              <b>I have applied to a college: </b>
            </h5>
            <h5>
              <b>Colleges they’ve applied to/plan to apply to: </b>
            </h5>
            <h5>
              <b>I have begun my work on my college essay:</b>
            </h5>
            <h5>
              <b>I need help writing my college essay:</b>
            </h5>
            <h5>
              <b>First choice of college:</b>
            </h5>
            <h3>
              <b>College Entrance Exam Information: </b>
            </h3>
            <h5>
              <b>PACT Score: 100 Date of PACT: 10/22/2021</b></h5>
            <h5>
              <b>PSAT Score: 100 <h5 style={{textAlign: 'center'}}> Date of PSAT: 10/22/2021</h5></b>
            </h5>
            <h5>
              <b>ACT Score: 100 Date of ACT: 10/22/2021</b>
            </h5>
            <h5>
              <b>SAT Score: 100 Date of SAT: 10/22/2021 </b>
            </h5>
            <h3>
              <b>Financial Aid:</b>
            </h3>
            <h5>
              <b>I have already completed the financial aid process:</b>
            </h5>
            <h5>
              <b>I need assistance filling out my FAFSA/Financial aid forms:</b>
            </h5>
            <h5>
              <b>Support they need:</b>
            </h5>
          </Item>
        </Grid>
        </Grid>
        </Grid>
    </Box>
  );
}
