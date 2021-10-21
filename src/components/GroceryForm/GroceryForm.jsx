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
            <label htmlFor="Item:">
                <input onChange={(event) => setGroceryItem({name: event.target.value})}
                value={groceryItem.name} />
            </label>

            <label htmlFor="Quantity:">
                <input onChange={(event) => setGroceryQuantity({quantity: event.target.value})}
                value={groceryQuantity.quantity} />
            </label>

            <label htmlFor="Unit:">
                <input onChange={(event) => setGroceryUnit({unit: event.target.value})}
                value={groceryUnit.unit} />
            </label>

            <input type="submit" value="Submit" />
        </form>
    )
    
    GroceryForm.propTypes = {
        addGroceries: PropTypes.func.isRequired,
    };

} // end GroceryForm

export default GroceryForm;