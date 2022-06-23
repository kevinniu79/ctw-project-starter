/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddWasteItem from './waste-management-form/add-waste-item';
import WasteList from './Waste-List';
import UpdateWasteManagement from './waste-management-form/update-waste-management';
import { getWasteList, addWaste, updateWaste } from '../../services/services';

export default function WasteItems() {
  const [owner, setOwner] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [dateAccepted, setDateAccepted] = useState('');
  const [dateReturned, setDateReturned] = useState('');
  const [wasteItems, setWasteItems] = useState([]);
  const [activeWasteItems, setActiveWasteItems] = useState([]);
  const [updateWasteItemModal, setUpdateWasteItemModal] = useState(false);
  const [WasteItemToUpdate, setWasteItemToUpdate] = useState('');

  useEffect(() => {
    refreshWasteItems();
  }, []);

  const refreshWasteItems = async () => {
    const response = await getWasteList();
    setWasteItems(response);
    setActiveWasteItems(
      response.filter((WasteItem) => WasteItem.active === true)
    );
  };

  const onAddWasteItemFormSubmit = async (
    enteredOwner,
    enteredName,
    enteredPrice,
    enteredCity,
    enteredState,
    enteredPostalCode,
    enteredDateAccepted,
    enteredDateReturned
  ) => {
    const newWasteItem = {
      owner: enteredOwner,
      name: enteredName,
      price: enteredPrice,
      city: enteredCity,
      state: enteredState,
      postalCode: enteredPostalCode,
      dateAccepted: enteredDateAccepted,
      dateReturned: enteredDateReturned,
      active: true,
    };

    await addWaste(newWasteItem);
    refreshWasteItems();
    setOwner('');
    setName('');
    setPrice('');
    setCity('');
    setState('');
    setPostalCode('');
    setDateAccepted('');
    setDateReturned('');
  };

  const archiveWasteItemHandler = async (wasteItemId) => {
    const updatedWasteItem = {
      id: wasteItemId,
      Active: false,
    };
    await updateWaste(updatedWasteItem);
    refreshWasteItems();
  };

  const updateModalChange = (wasteItemId) => {
    if (updateWasteItemModal === true) {
      setUpdateWasteItemModal(false);
    } else {
      const wasteItemIndex = wasteItems.findIndex(
        (wasteItem) => wasteItem.id === wasteItemId
      );
      setWasteItemToUpdate(WasteItems[wasteItemIndex]);
      setUpdateWasteItemModal(true);
    }
  };

  const updateWasteItemHandler = async (
    newId,
    newOwner,
    newName,
    newPrice,
    newCity,
    newState,
    newPostalCode,
    newDateAccepted,
    newDateReturned
  ) => {
    const updatedWaste = {
      id: newId,
      owner: newOwner,
      name: newName,
      price: newPrice,
      city: newCity,
      state: newState,
      postalCode: newPostalCode,
      dateAccepted: newDateAccepted,
      dateReturned: newDateReturned,
      active: true,
    };
    await updateWaste(updatedWaste);
    refreshWasteItems();
    updateModalChange();
  };
  return (
    <Container maxWidth="sm">
      {updateModalChange && (
        <UpdateWasteManagement
          WasteItem={WasteItemToUpdate}
          onSubmit={updateWasteItemHandler}
          handleClose={updateModalChange}
        />
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Waste Items
        </Typography>
        <AddWasteItem
          owner={setOwner}
          name={setName}
          price={setPrice}
          city={setCity}
          state={setState}
          postalCode={setPostalCode}
          dateAccepted={setDateAccepted}
          dateReturned={setDateReturned}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <WasteList
          wasteItem={activeWasteItems}
          archiveWasteItemListHandler={archiveWasteItemHandler}
          updateItemListHandler={updateWasteItemModal}
        />
      </Box>
    </Container>
  );
}
