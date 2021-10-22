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
        <div className="inputContainer">
        <form onSubmit={handleSubmit}>
            <label  htmlFor="Item:">Item</label>
                <input className="itemIn" onChange={(event) => setGroceryName(event.target.value) }
                value={groceryName}/>
            
            <div>
            <label htmlFor="Quantity:">Quantity</label>
                <input className="quantityIn" onChange={ (event) => setGroceryQuantity(event.target.value) }
                value={groceryQuantity}/>
            

            <label htmlFor="Unit:">Unit</label>
                <input className="unitIn" onChange={(event) => setGroceryUnit(event.target.value) }
                value={groceryUnit}/>
            </div>
       
            <button>Add Grocery Item</button>
        </form>
        </div>
    )
    
    GroceryForm.propTypes = {
        addGroceries: PropTypes.func.isRequired,
    };

} // end GroceryForm

export default GroceryForm;