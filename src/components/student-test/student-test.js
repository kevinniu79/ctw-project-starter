import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import StudentTable from './studentTable';
import ROUTES from '../../constants/routes';
import StudentModal from './studentModal';

export default function Student(props) {
  const text = '< Back to Home';

  const onBackClick = () => {
    navigate(ROUTES.HOME);
  };
  const navigate = useNavigate();

  const onStudentInfoClick = () => {
    navigate(ROUTES.STUDENT_INFO);
  };

  return (
    <Stack
      spacing={2}
      justifyContent="center"
      justify="center"
      sx={{ mx: '20vh' }}
    >
      <StudentTable />
      <Grid item xs={1}>
        <Button onClick={onBackClick} size="small" variant="outlined">
          {text}
        </Button>
        <Button variant="contained" onClick={onStudentInfoClick}>
          Student Info Test
        </Button>
      </Grid>
    </Stack>
  );
}

StudentModal.propTypes = {
  modalType: PropTypes.string.isRequired,
  confirmHandler: PropTypes.func.isRequired,
};
