import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function AddWasteItem(props){
    const {
        name,
        itemName, 
        itemPrice, 
        cityName, 
        stateName, 
        postalCode, 
        acceptedDate, 
        returnedDate, 
        setOwnerFirstName, 
        setOwnerLastName, 
        setItemName, 
        setItemPrice, 
        setCityName, 
        setStateName, 
        setPostalCode, 
        setAcceptedDate,
        setReturnedDate, 
        onSubmit,
      } = props;

      const onSubmitDisabled =
    !ownerFirstName || !ownerLastName || !cityName || !stateName || !postalCode || !acceptedDate || !returnedDate;

  const addStudentHandler = (event) => {
    event.preventDefault();
    onSubmit(ownerFirstName, ownerLastName, cityName, stateName, postalCode, acceptedDate, returnedDate);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            onChange={(event) => setOwnerFirstName(event.target.value)}
            required
            value={ownerFirstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            onChange={(event) => setOwnerLastName(event.target.value)}
            required
            value={ownerLastName}
          />
        </Grid>
     
       
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Cell Phone Number"
            onChange={(event) => setItemName(event.target.value)}
            required
            value={itemName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email Address"
            onChange={(event) => setItemPrice(event.target.value)}
            required
            type="email"
            value={itemPrice}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Cell Phone Number"
            onChange={(event) => setCityName(event.target.value)}
            required
            value={cityName}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Cell Phone Number"
            onChange={(event) => setItemName(event.target.value)}
            required
            value={itemName}
          />
        </Grid>
   <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date of Birth"
            onChange={(event) => onBirthDateChange(event.target.value)}
            required
            type="date"
            value={birthDate}
          />
 </Grid>


      </Grid>
      <Button
        disabled={onSubmitDisabled}
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        type="submit"
        onClick={addStudentHandler}
        variant="contained"
      >
        Add Student
      </Button>
    </Box>
  );
}