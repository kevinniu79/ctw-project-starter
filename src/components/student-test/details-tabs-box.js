/* eslint-disable prettier/prettier */
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TabsFunction from './detailsTabs';



export default function GridForDetails() {
  return (

    <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent='flex-end'>
        <Grid item xs={9}>
        <Grid item xs={12}>
    <TabsFunction> </TabsFunction>
        
        </Grid>
        </Grid>
        </Grid>
    </Box>
  );
}
