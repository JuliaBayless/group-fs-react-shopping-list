// This is the input form to input groceries
import React, {useState} from 'react';
import PropTypes from 'prop-types';

function GroceryForm ({addGroceries}) {
    console.log('inside GroceryForm');

    const [groceryItem, setGroceryItem] = useState('');
    const [groceryQuantity, setGroceryQuantity] = useState('');
    const [groceryUnit, setGroceryUnit] = useState('');

    const handleSubmit = (event) => {
        console.log('inside handleSubmit');
        event.preventDefault();

        groceryItem = {
            name: groceryItem,
            quantity: groceryQuantity,
            unit: groceryUnit,
            isPurchased: false
        };

        addGroceries(groceryItem);
        clearInputFields();

    } // end handleSubmit

    const clearInputFields = () => {
        setGroceryItem('');
        setGroceryQuantity('');
        setGroceryUnit('');
    } // end clearInputFields();


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="Item:">Item</label>
                <input onChange={(event) => setGroceryItem(event.target.value) }
                value={groceryItem.name} 
                placeholder="Item"/>
            
            <div>
            <label htmlFor="Quantity:">Quantity</label>
                <input onChange={ (event) => setGroceryQuantity(event.target.value) }
                value={groceryQuantity.quantity}
                placeholder="Quantity"/>
            

            <label htmlFor="Unit:">Unit</label>
                <input onChange={(event) => setGroceryUnit(event.target.value) }
                value={groceryUnit.unit}
                placeholder="Unit"/>
            </div>
            

            
            <button>Add Grocery Item</button>
        </form>
    )
    
    GroceryForm.propTypes = {
        addGroceries: PropTypes.func.isRequired,
    };

} // end GroceryForm

export default GroceryForm;