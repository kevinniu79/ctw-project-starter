/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import WasteList from './Waste-List';
import AddWasteItem from './waste-management-form/add-waste-item';
import UpdateWasteManagement from './waste-management-form/update-waste-management';
import { getWasteList, addWaste, updateWaste } from '../../services/services';

export default function WasteItem() {
    const [owner, setOwner] =               useState('');
    const [name, setname] =                 useState('');
    const [price, setPrice] =               useState('');
    const [city, setCity] =                 useState('');
    const [state, setState] =               useState('');
    const [postalCode, setPostalCode] =     useState('');
    const [dateAccepted, setDateAccepted] = useState('');
    const [dateReturned, setDateReturned] = useState('');

    return(
        <div>
            <AddWasteItem/>
            <UpdateWasteManagement/>
            <WasteList/>
        </div>
    );
}