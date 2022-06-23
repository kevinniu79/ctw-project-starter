/* eslint-disable prettier/prettier */
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import AddStudent from './student-forms/add-student';
import StudentsList from './students-list';
import UpdateStudent from './student-forms/update-student';
import {
  getStudents,
  addStudent,
  updateStudent,
} from '../../services/services';
import UpdateWasteManagement from './waste-management-form/update-waste-management';
import WasteList from './Waste-List';

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
          {UpdateWasteManagement && (
            <UpdateWasteItem
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
              Students
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
              archiveItemListandler={archiveItemListHandler}
              updateItemListHandler={updatWasteItemModalChange}
            />
          </Box>
        </Container>
      );
}