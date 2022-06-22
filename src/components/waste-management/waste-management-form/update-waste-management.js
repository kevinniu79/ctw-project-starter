import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle } from '@mui/material';
import { useState, useEffect } from 'react';

export default function WasteManagement(props) {
    const { item, onSubmit, handleClose} = props;

    }

    const[name, setName] = useState(' ');
    const[owner, setOwner] = useState(' ');
    const[itemName, setItemName] = useState(' ');
    const[itemPrice, setItemPrice] = useState(' ');
    const[city, setCity] = useState(' ');
    const[state, setState] = useState(' ');
    const[postalCode, setPostalCode] = useState(' ');
    const[dateAccepted, setDateAccepted] = useState(' ');
    const[dateReturned, setDateReturned] = useState(' ');

}