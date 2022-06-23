import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

export default function WasteList(props) {
  const { itemLists, archiveItemListHandler, updateWasteItemListHandler } =
    props;

  const archiveList = (event) => {
    archiveItemListHandler(event.target.value);
  };

  const updateItem = (event) => {
    updateWasteItemListHandler(event.target.value);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {itemLists.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Typography component="p">Item Id: {item.id}</Typography>
            <Typography component="p">Owner Name: {item.itemOwner}</Typography>
            <Typography component="p">
              Item Name: {item.itemName}, Price: {item.itemPrice}
            </Typography>
            <Typography component="p">
              City: {item.itemCity}, Postal Code: {item.itemPostalCode}, State:{' '}
              {item.itemState}
            </Typography>
            <Typography component="p">
              Date Accepted: {item.itemDateAccepted}, Date Returned:{' '}
              {item.itemDateReturned}
            </Typography>
            <Button value={item.id} onClick={archiveList}>
              Delete
            </Button>
            <Button value={item.id} onClick={updateItem}>
              Update
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

WasteList.propTypes = {
  itemLists: PropTypes.array.isRequired,
  archiveItemListHandler: PropTypes.func.isRequired,
  updateWasteItemListHandler: PropTypes.func.isRequired,
};
