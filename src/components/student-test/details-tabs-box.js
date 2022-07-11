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
        
        </Grid>
        </Grid>
        </Grid>
    </Box>
  );
}
