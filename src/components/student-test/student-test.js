import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import StudentModal from './studentModal';

export default function Student(props) {
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

  const onStudentInfoClick = () => {
    navigate(ROUTES.STUDENT_INFO);
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
      <Grid container justifyContent='flex-end'>
      <Button variant="contained" onClick={onStudentInfoClick}>
        Student Info Test
      </Button>
      </Grid>
    </Grid>
  );
}
