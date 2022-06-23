/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import WasteList from './Waste-List';
import AddWasteItem from './waste-management-form/add-waste-item';
import UpdateWasteManagement from './waste-management-form/update-waste-management';

export default function WasteItem() {
    const [owner, setOwner] =               useState('');
    const [name, setName] =                 useState('');
    const [price, setPrice] =               useState('');
    const [city, setCity] =                 useState('');
    const [state, setState] =               useState('');
    const [postalCode, setPostalCode] =     useState('');
    const [dateAccepted, setDateAccepted] = useState('');
    const [dateReturned, setDateReturned] = useState('');
    const [WasteItems, setWasteItems] = useState([]);
    const [activeWasteItems, setActiveWasteItems] = useState([]);
    const [updateWasteItemModal, setUpdateWasteItemModal] = useState(false);
    const [WasteItemToUpdate, setWasteItemToUpdate] = useState('');

    useEffect(() => {
        refreshWasteItems();
    }, []);

    const refreshWasteItems = async () => {
        const response = await getWasteItems();
        setWasteItems(response);
        setActiveWasteItems(response.filter((WasteItem) => WasteItem.active === true));
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
        const newStudent = {
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
    
        await AddWasteItem(newStudent);
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

      const archiveWasteItemHandler = async (WasteItemId) => {
        const updatedWasteItem = {
          id: WasteItemId,
          Active: false,
        };
        await updateWasteItem(updatedWasteItem);
        refreshWasteItems();
      };

      const updateModalChange = (id) => {
        if (updateWasteItemModal === true) {
          setUpdateWasteItemModal(false);
        } else {
          const WasteItemIndex = WasteItems.findIndex(
            (WasteItem) => WasteItem.id === WasteItemId
          );
          setWasteItemToUpdate(WasteItems[WasteItemIndex]);
          setUpdateWasteItemModal(true);
        }
      };

      const updateStudentHandler = async (
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
        const updatedStudent = {
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
        await updateWasteItem(updatedWasteItem);
        refreshWasteItems();
        updateModalChange();
      };

    return(
        <div>
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
            <UpdateWasteManagement/>
            <WasteList/>
        </div>
    );
}