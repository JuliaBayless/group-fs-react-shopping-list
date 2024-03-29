// This component is a single grocery item that is displayed within GroceryList
import axios from 'axios';

function GroceryItem({
  fetchGroceries,
  groceryItem,
  setIsInEditMode,
  setGroceryItemToEdit,
  groceryItemToEdit,
}) {
  const buyItem = () => {
    console.log(
      `In buyItem, about to do a put with grocery item id`,
      groceryItem.id
    );
    axios
      .put(`/groceries/${groceryItem.id}`)
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
      .delete(`/groceries/${groceryItem.id}`)
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

  const editItem = () => {
    setIsInEditMode(true);
    console.log(groceryItemToEdit);
    // pass the current groceryItem as the groceryItemToEdit
    setGroceryItemToEdit({ ...groceryItem });
  };

  return (
    <div className="groceryItem">
      <p>{groceryItem.name}</p>
      <p>
        {groceryItem.quantity} {groceryItem.unit}
      </p>
      <div>
        {groceryItem.isPurchased ? (
          <p>Purchased</p>
        ) : (
          <>
            <button onClick={buyItem}>Buy</button>
            <button onClick={removeItem}>Remove</button>
            <button onClick={editItem}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
}

export default GroceryItem;
