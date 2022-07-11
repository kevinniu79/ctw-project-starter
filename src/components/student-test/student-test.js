import Grid from '@mui/material/Grid';
import StudentModal from './studentModal';
import StudentRegistryModal from './studentRegistryModal';

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
  const registerHandler = () => {
    console.log('this is when it should register');
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <StudentModal
          modalType="delete"
          confirmHandler={deleteHandler}
        />
      </Grid>
      <Grid item xs={3}>
        <StudentModal
          modalType="deactivate"
          confirmHandler={deactivateHandler}
        />
      </Grid>
      <Grid item xs={3}>
        <StudentModal
          modalType="reactivate"
          confirmHandler={reactivateHandler}
        />
      </Grid>
      <Grid item xs={3}>
        <StudentRegistryModal confirmHandler={registerHandler} />
      </Grid>
    </Grid>
  );
}
