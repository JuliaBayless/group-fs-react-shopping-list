// This is the input form to input groceries
import React, {useState} from 'react';
import PropTypes from 'prop-types';

function GroceryForm ({addGroceries}) {
    console.log('inside GroceryForm');

    const [groceryName, setGroceryName] = useState('');
    const [groceryQuantity, setGroceryQuantity] = useState('');
    const [groceryUnit, setGroceryUnit] = useState('');

    const handleSubmit = (event) => {
        console.log('inside handleSubmit');
        event.preventDefault();

        let groceryItem = {
            name: groceryName,
            quantity: groceryQuantity,
            unit: groceryUnit,
            isPurchased: false
        };

        addGroceries(groceryItem);
        clearInputFields();

    } // end handleSubmit

    const clearInputFields = () => {
        setGroceryName('');
        setGroceryQuantity('');
        setGroceryUnit('');
    } // end clearInputFields();


    return (
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="Item:">Item</label>
                <input onChange={(event) => setGroceryName(event.target.value) }
                value={groceryName} 
                placeholder="Item"/>
            
            <div>
            <label htmlFor="Quantity:">Quantity</label>
                <input onChange={ (event) => setGroceryQuantity(event.target.value) }
                value={groceryQuantity}
                placeholder="Quantity"/>
            

            <label htmlFor="Unit:">Unit</label>
                <input onChange={(event) => setGroceryUnit(event.target.value) }
                value={groceryUnit}
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