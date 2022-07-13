/* eslint-disable prettier/prettier */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ROUTES from '../../constants/routes';
import StudentModal from './studentModal';

export default function Student(props) {
  const navigate = useNavigate();

  const deleteHandler = () => {
    console.log('this is when it should delete');
  };
  const onDetailsTabsBoxClick = () => {
    navigate(ROUTES.DETAILS_TABS_BOX);
  };
  const reactivateHandler = () => {
    console.log('this is when it should reactivate');
  };

  const deactivateHandler = () => {
    console.log('this is when it should reactivate');
  };

  const onStudentInfoClick = () => {
    navigate(ROUTES.STUDENT_INFO);
  };

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
      <Button variant="contained" onClick={onStudentInfoClick}>
        Student Info Test
      </Button>
    </Grid>
  );
}

StudentModal.propTypes = {
    modalType: PropTypes.string.isRequired,
    confirmHandler: PropTypes.func.isRequired,
};