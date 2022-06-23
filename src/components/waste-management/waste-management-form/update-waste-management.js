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
  const [itemName, setItemName] = useState(' ');
  const [itemPrice, setItemPrice] = useState(' ');
  const [city, setCity] = useState(' ');
  const [state, setState] = useState(' ');
  const [postalCode, setPostalCode] = useState(' ');
  const [dateAccepted, setDateAccepted] = useState(' ');
  const [dateReturned, setDateReturned] = useState(' ');

  useEffect(() => {
    initForm();
  }, []);

  const initForm = () => {
    if (item.itemOwner != null) {
      setOwner(item.itemOwner);
    }
    if (item.itemItemName != null) {
      setItemName(item.itemItemName);
    }
    if (item.itemItemPrice != null) {
      setItemPrice(item.itemItemPrice);
    }
    if (item.itemCity != null) {
      setCity(item.itemCity);
    }
    if (item.itemState != null) {
      setState(item.itemState);
    }
    if (item.itemPostalCode != null) {
      setPostalCode(item.itemPostalCode);
    }
    if (item.itemDateAccepted != null) {
      setDateAccepted(item.itemDateAccepted);
    }
    if (item.itemDateReturned != null) {
      setDateReturned(item.itemDateReturned);
    }
  };

  const updateItemHandler = (event) => {
    event.preventDefault();
    onSubmit(
      item,
      owner,
      itemName,
      itemPrice,
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
  const itemNameChangeHandler = (event) => {
    setItemName(event.target.value);
  };
  const itemPriceChangeHandler = (event) => {
    setItemPrice(event.target.value);
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
              onChange={itemNameChangeHandler}
              value={itemName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Item Price"
              onChange={itemPriceChangeHandler}
              value={itemPrice}
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
              value={state}
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

UpdateItem.propTypes = {
  item: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};
