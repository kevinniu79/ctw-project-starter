import Grid from '@mui/material/Grid';
import StudentModal from './studentModal';
import BasicTabs from './studentTabs';

export default function Student() {
  
  return (
    <Grid container spacing={2} justifyContent='center'>
     
      
      <Grid   item xs={8}>
      <BasicTabs > </BasicTabs>
      </Grid>
    </Grid>
  );
}
