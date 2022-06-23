import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

export default function WasteList(props) {
  const { itemLists, archiveItemListHandler, updateItemListHandler } = props;

  const archiveList = (event) => {
    archiveItemListHandler(event.target.value);
  };

  const updateItem = (event) => {
    updateItemListHandler(event.target.value);
  };

  return (
    // <Box sx={{ mt: 3 }}>
    //   <Grid container spacing={2}>
    //     {itemLists.map((itemList) => (
    //       <Grid item xs={12} key={itemList.id}>
    //         <Typography component="p">Item Id: {itemList.id}</Typography>
    //         <Typography component="p">
    //           Owner Name: {itemList.owner}
    //         </Typography>
    //         <Typography component="p">
    //           Item Name: {itemList.name}, Price: {itemList.price}
    //         </Typography>
    //         <Typography component="p">
    //           City: {itemList.city}, Postal Code: {itemList.postalCode}, State: {itemList.state}
    //         </Typography>
    //         <Typography component="p">
    //           Date Accepted: {itemList.dateAccepted}, Date Returned: {itemList.dateReturned}
    //         </Typography>
    //         <Button value={itemList.id} onClick={archiveList}>
    //           Delete
    //         </Button>
    //         <Button value={itemList.id} onClick={updateItem}>
    //           Update
    //         </Button>
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Box>
    <h1>Hello</h1>
  );
}

WasteList.propTypes = {
  itemLists: PropTypes.array.isRequired,
  archiveItemListHandler: PropTypes.func.isRequired,
  updateItemListHandler: PropTypes.func.isRequired,
};
