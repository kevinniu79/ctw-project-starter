import Grid from '@mui/material/Grid';
import StudentModal from './studentModal';
import BasicTabs from './studentTable';

export default function Student() {
  
  return (
    <Grid container spacing={2} justifyContent='center'   justify="center">
      <Grid   item xs={8}>
      <BasicTabs > </BasicTabs>
      </Grid>
    </Grid>
  );
}
