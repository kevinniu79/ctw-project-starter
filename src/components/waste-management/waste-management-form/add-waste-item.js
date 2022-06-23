import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function AddWasteItem(props){
    const {
        name,
        owner, 
        price, 
        city, 
        state, 
        postalCode, 
        dateAccepted, 
       dateReturned, 
        setName, 
        setOwner,
        setPrice, 
         setState, 
        setCity, 
       
          setPostalCode, 
        setDateAccepted,
        setDateReturned, 
        onSubmit,
      } = props;

      const onSubmitDisabled =
    !owner || !!city || !state || !postalCode || !dateAccepted || !dateReturned;

  const addItemHandler = (event) => {
    event.preventDefault();
    onSubmit(owner, name, city, state, postalCode, dateAccepted, dateReturned);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Owner"
            onChange={(event) => setOwner(event.target.value)}
            required
            value={owner}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            onChange={(event) => setName(event.target.value)}
            required
            value={name}
          />
        </Grid>
     
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Price"
            onChange={(event) => setPrice(event.target.value)}
            required
            value={price}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="City"
            onChange={(event) => setCity(event.target.value)}
            required
            value={city}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="State"
            onChange={(event) => setState(event.target.value)}
            required
            value={state}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Postal Code"
            onChange={(event) => setPostalCode(event.target.value)}
            required
            value={postalCode}
          />
        </Grid>
   
   <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date Accepted"
            onChange={(event) => setDateAccepted(event.target.value)}
            required
            type="date"
            value={dateAccepted}
          />
 </Grid>

    
 <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date Returned"
            onChange={(event) => setDateReturned(event.target.value)}
            required
            type="date"
            value={dateReturned}
          />
 </Grid>


      </Grid>
      <Button
        disabled={onSubmitDisabled}
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        type="submit"
        onClick={addItemHandler}
        variant="contained"
      >
        Add Item
      </Button>
    </Box>
  );
}


AddWasteItem.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  dateAccepted: PropTypes.func.isRequired,
  dateReturned: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setOwner: PropTypes.func.isRequired,
  setPrice: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  setPostalCode: PropTypes.func.isRequired,
  setDateReturned: PropTypes.func.isRequired,
  setDateAccepted: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
