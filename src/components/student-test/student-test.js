import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import ROUTES from '../../constants/routes';
import StudentModal from './studentModal';

export default function Student() {
  const navigate = useNavigate();

  const deleteHandler = () => {
    console.log('this is when it should delete');
  };
  const deactivateHandler = () => {
    console.log('this is when it should deactivate');
  };
  const reactivateHandler = () => {
    console.log('this is when it should reactivate');
  };

  const onStudentDetailClick = () => {
    navigate(ROUTES.WASTE_MANAGEMENT);
  };
  //

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <StudentModal modalType="delete" confirmHandler={deleteHandler} />
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
      <Button variant="contained" onClick={onStudentDetailClick}>
        Student Detail Test
      </Button>
    </Grid>
  );
}
