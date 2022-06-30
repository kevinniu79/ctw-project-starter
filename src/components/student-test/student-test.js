import Grid from '@mui/material/Grid';
import StudentModal from './studentModal';

export default function Student() {
  const deleteHandler = () => {
    console.log('this is when it should delete');
  };
  const deactivateHandler = () => {
    console.log('this is when it should deactivate');
  };
  const reactivateHandler = () => {
    console.log('this is when it should reactivate');
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <StudentModal
          modalType="delete"
          confirmHandler={deleteHandler}
        />
      </Grid>
      <Grid item xs={4}>
        <StudentModal
          modalType="deactivate"
          confirmHandler={deactivateHandler}
        />
      </Grid>
      <Grid item xs={4}>
        <StudentModal
          modalType="reactivate"
          confirmHandler={reactivateHandler}
        />
      </Grid>
    </Grid>
  );
}
