/* eslint-disable prettier/prettier */
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import AddWasteItem from './waste-management-form/add-waste-item';
import WasteList from './Waste-List';
import UpdateWasteManagement from './waste-management-form/update-waste-management';

export default function WasteItem() {
    const [owner, setOwner] =               useState('');
    const [name, setname] =                 useState('');
    const [price, setPrice] =               useState('');
    const [city, setCity] =                 useState('');
    const [state, setState] =               useState('');
    const [postalCode, setPostalCode] =     useState('');
    const [dateAccepted, setDateAccepted] = useState('');
    const [dateReturned, setDateReturned] = useState('');

    return (
        <Container maxWidth="sm">
          {updateModalChange && (
            <UpdateWasteManagement
              WasteItem={wasteItemToUpdate}
              onSubmit={updateItemHandler}
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
              wasteItem={Waste}
              archiveWasteItemListandler={archiveWasteItemListHandler}
              updateItemListHandler={updatWasteItemModalChange}
            />
          </Box>
        </Container>
      );
}