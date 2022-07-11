/* eslint-disable prettier/prettier */
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import StudentModal from './studentModal';
import StudentRegistryModal from './studentRegistryModal';

export default function Student() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const deleteHandler = () => {
    console.log('this is when it should delete');
  };
  const deactivateHandler = () => {
    console.log('this is when it should deactivate');
  };
  const reactivateHandler = () => {
    console.log('this is when it should reactivate');
  };
  const registerHandler = (
    enteredFirstName,
    enteredLastName,
    enteredEmail,
    enteredPhoneNumber,
    enteredDateOfBirth
  ) => {
    console.log(
      enteredFirstName,
      enteredLastName,
      enteredEmail,
      enteredPhoneNumber,
      enteredDateOfBirth
    );
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setDateOfBirth('');
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
        <StudentRegistryModal 
        firstName={firstName}
        lastName={lastName}
        email={email}
        phoneNumber={phoneNumber}
        dateOfBirth={dateOfBirth}
        onFirstNameChange={setFirstName}
        onLastNameChange={setLastName}
        onEmailChange={setEmail}
        onPhoneNumberChange={setPhoneNumber}
        onDateOfBirthChange={setDateOfBirth}
        confirmHandler={registerHandler} />
      </Grid>
    </Grid>
  );
}
