// This is the input form to input groceries
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
    if (isInEditMode) {
      setGroceryName(groceryItemToEdit.name);
      setGroceryQuantity(groceryItemToEdit.quantity);
      setGroceryUnit(groceryItemToEdit.unit);
    }
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
    clearInputFields();
  }; // end handleSubmit

  const clearInputFields = () => {
    setGroceryName('');
    setGroceryQuantity('');
    setGroceryUnit('');
  }; // end clearInputFields();

  return (
    <div className="inputContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Item:">Item</label>
        <input
          className="itemIn"
          onChange={(event) => setGroceryName(event.target.value)}
          value={groceryName}
        />

        <div>
          <label htmlFor="Quantity:">Quantity</label>
          <input
            className="quantityIn"
            onChange={(event) => setGroceryQuantity(event.target.value)}
            value={groceryQuantity}
          />

          <label htmlFor="Unit:">Unit</label>
          <input
            className="unitIn"
            onChange={(event) => setGroceryUnit(event.target.value)}
            value={groceryUnit}
          />
        </div>

        <button>{isInEditMode ? 'Edit' : 'Add'} Grocery Item</button>
      </form>
    </div>
  );

  GroceryForm.propTypes = {
    addGroceries: PropTypes.func.isRequired,
  };
} // end GroceryForm

export default GroceryForm;
