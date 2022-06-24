import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle } from '@mui/material';
import { useState, useEffect } from 'react';

export default function UpdateWasteManagement(props) {
  const { item, onSubmit, handleClose } = props;

  const [owner, setOwner] = useState(' ');
  const [name, setName] = useState(' ');
  const [price, setPrice] = useState(' ');
  const [city, setCity] = useState(' ');
  const [state, setState] = useState(' ');
  const [postalCode, setPostalCode] = useState(' ');
  const [dateAccepted, setDateAccepted] = useState(' ');
  const [dateReturned, setDateReturned] = useState(' ');

  useEffect(() => {
    initForm();
  }, []);

  const initForm = () => {
    if (item.owner != null) {
      setOwner(item.owner);
    }
    if (item.name != null) {
      setName(item.name);
    }
    if (item.price != null) {
      setPrice(item.price);
    }
    if (item.city != null) {
      setCity(item.city);
    }
    if (item.state != null) {
      setState(item.state);
    }
    if (item.postalCode != null) {
      setPostalCode(item.postalCode);
    }
    if (item.dateAccepted != null) {
      setDateAccepted(item.dateAccepted);
    }
    if (item.dateReturned != null) {
      setDateReturned(item.dateReturned);
    }
  };

  const updateItemHandler = (event) => {
    event.preventDefault();
    onSubmit(
      item.id,
      item,
      owner,
      name,
      price,
      city,
      state,
      postalCode,
      dateAccepted,
      dateReturned
    );
  };

  const ownerChangeHandler = (event) => {
    setOwner(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const cityChangeHandler = (event) => {
    setCity(event.target.value);
  };
  const stateChangeHandler = (event) => {
    setState(event.target.value);
  };
  const postalCodeChangeHandler = (event) => {
    setPostalCode(event.target.value);
  };
  const dateAcceptedChangeHandler = (event) => {
    setDateAccepted(event.target.value);
  };
  const dateReturnedChangeHandler = (event) => {
    setDateReturned(event.target.value);
  };

  return (
    <Dialog open onClose={handleClose}>
      <DialogTitle>Update Item</DialogTitle>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Owner Name"
              onChange={ownerChangeHandler}
              value={owner}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Item Name"
              onChange={nameChangeHandler}
              value={name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Item Price"
              onChange={priceChangeHandler}
              value={price}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="City"
              onChange={cityChangeHandler}
              value={city}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="State"
              onChange={stateChangeHandler}
              value={state}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Postal Code"
              onChange={postalCodeChangeHandler}
              value={postalCode}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date Accepted"
              onChange={dateAcceptedChangeHandler}
              value={dateAccepted}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date Returned"
              onChange={dateReturnedChangeHandler}
              value={dateReturned}
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          sx={{ mt: 3, mb: 2 }}
          type="submit"
          onClick={updateItemHandler}
          variant="contained"
        >
          Update Item
        </Button>
      </Box>
    </Dialog>
  
  );
}

UpdateWasteManagement.propTypes = {
  item: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

UpdateWasteManagement.defaultProps = {
  item: {
    owner: 'kevin',
    name: 'kevin',
    price: 'kevin',
    city: 'kevin',
    state: 'kevin',
    postalCode: 'kevin',
  },
};
