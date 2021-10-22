// This is the input form to input groceries
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GroceryItem from '../GroceryItem/GroceryItem';

function GroceryForm({
  addGroceries,
  isInEditMode,
  setIsInEditMode,
  groceryItemToEdit,
  editGroceryItem,
}) {
  console.log('inside GroceryForm');

  const [groceryName, setGroceryName] = useState('');
  const [groceryQuantity, setGroceryQuantity] = useState('');
  const [groceryUnit, setGroceryUnit] = useState('');

  // will run every time state of isInEditMode changes
  // this will update the
  useEffect(() => {
    updateEditStage();
  }, [isInEditMode]);

  //
  const updateEditStage = () => {
    console.log('the edit mode changed');
    // if in edit mode, set the values of the input boxes to the values of the item to be edited
    console.log(`and the grocery item to update is`, groceryItemToEdit);
    // update the input values to reflect the current item
    setGroceryName(groceryItemToEdit.name);
    setGroceryQuantity(groceryItemToEdit.quantity);
    setGroceryUnit(groceryItemToEdit.unit);
  };

  const handleSubmit = (event) => {
    console.log('inside handleSubmit');
    event.preventDefault();

    let groceryItem = {
      name: groceryName,
      quantity: groceryQuantity,
      unit: groceryUnit,
      isPurchased: false,
    };

    if (isInEditMode) {
      // add the id to the object
      // this is needed for the update put
      groceryItem.id = groceryItemToEdit.id;
      editGroceryItem(groceryItem);
    } else {
      addGroceries(groceryItem);
    }
    // we're not in edit mode anymore, even if we were
    setIsInEditMode(false);
    clearInputFields();
  }; // end handleSubmit

  const clearInputFields = () => {
    setGroceryName('');
    setGroceryQuantity('');
    setGroceryUnit('');
  }; // end clearInputFields();

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Item:">Item</label>
      <input
        onChange={(event) => setGroceryName(event.target.value)}
        value={groceryName}
        placeholder="Item"
      />

      <div>
        <label htmlFor="Quantity:">Quantity</label>
        <input
          onChange={(event) => setGroceryQuantity(event.target.value)}
          value={groceryQuantity}
          placeholder="Quantity"
        />

        <label htmlFor="Unit:">Unit</label>
        <input
          onChange={(event) => setGroceryUnit(event.target.value)}
          value={groceryUnit}
          placeholder="Unit"
        />
      </div>

      <button>{isInEditMode ? 'Edit' : 'Add'} Grocery Item</button>
    </form>
  );

  GroceryForm.propTypes = {
    addGroceries: PropTypes.func.isRequired,
  };
} // end GroceryForm

export default GroceryForm;
