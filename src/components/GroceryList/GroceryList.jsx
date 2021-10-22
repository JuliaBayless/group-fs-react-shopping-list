// This is a child of App and builds a list of GroceryItem components
import GroceryItem from "../GroceryItem/GroceryItem";

function GroceryList ({groceryList, fetchGroceries}) {
    console.log('inside GroceryList');

    return (
        <div className="groceryList">
            {groceryList.map((groceryItem) =>{
               
                return (
                    <GroceryItem groceryItem={groceryItem} key={groceryItem.id}
                    fetchGroceries={fetchGroceries} />
                )
                
            })}
        </div>
       
    )
} // end GroceryList

export default GroceryList;