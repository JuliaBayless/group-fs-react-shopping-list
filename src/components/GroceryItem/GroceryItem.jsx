// This component is a single grocery item that is displayed within GroceryList
import axios from 'axios';

function GroceryList({ fetchGroceries, groceryItem }) {
  const buyItem = () => {
    console.log(
      `In buyItem, about to do a put with grocery item id`,
      groceryItem.id
    );
    axios
      .put(`/${groceryItem.id}`)
      .then((response) => {
        // refresh the DOM
        fetchGroceries();
      })
      .catch((err) => {
        console.log(
          `There was an error updating the item on the database:`,
          err
        );
      });
  };

  const removeItem = () => {
    console.log(
      `In buyItem, about to do a delete with grocery item id`,
      groceryItem.id
    );
    axios
      .delete(`/:id`)
      .then((response) => {
        // refresh the DOM
        fetchGroceries();
      })
      .catch((err) => {
        console.log(
          `There was an error deleting the item from the database:`,
          err
        );
      });
  };

  return (
    <div>
      <p>{groceryItem.name}</p>
      <p>
        {groceryItem.quantity} {groceryItem.unit}
      </p>
      <div>
        <button onClick={buyItem}>Buy</button>
        <button onClick={removeItem}>Remove</button>
      </div>
    </div>
  );
}

export default GroceryList;
