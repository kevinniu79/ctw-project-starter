import Grid from '@mui/material/Grid';
import StudentModal from './studentModal';

export default function Student() {
  return (
    <Grid container spacing={2}>
      <Grid item sx={4}>
        <StudentModal modalType="delete" />
      </Grid>
      <Grid item sx={4}>
        <StudentModal modalType="deactivate" />
      </Grid>
      <Grid item sx={4}>
        <StudentModal modalType="reactivate" />
      </Grid>
    </Grid>
  );
}
