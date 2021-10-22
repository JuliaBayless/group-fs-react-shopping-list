import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx';
import './App.css';
import GroceryForm from '../GroceryForm/GroceryForm.jsx';
import GroceryList from '../GroceryList/GroceryList.jsx';

import ClickListener from '../ClickListeners/ClickListeners.jsx';

function App() {
  let [groceryList, setGroceryList] = useState([]);
  let [isInEditMode, setIsInEditMode] = useState(false);
  let [groceryItemToEdit, setGroceryItemToEdit] = useState({});

  //when the page opens, you will see...
  useEffect(() => {
    fetchGroceries();
  }, []);

  //fetch those groceries from the DB with GET
  const fetchGroceries = () => {
    axios({
      method: 'GET',
      url: '/groceries',
    })
      .then((response) => {
        console.log('GET', response.data);
        setGroceryList(response.data);
      })
      .catch((error) => {
        console.log('ERROR IN GET', error);
      });
  }; //end fetchGroceries

  //Add those groceries in POST
  const addGroceries = (newItem) => {
    console.log('Post start', newItem);
    axios({
      method: 'POST',
      url: '/groceries',
      data: newItem,
    })
      .then((response) => {
        console.log('POST SUCCESS');
        fetchGroceries();
      })
      .catch((error) => {
        console.log('ERROR IN POST', error);
      });
  }; //end addGroceries

  const editGroceryItem = (groceryItemToEdit) => {
    console.log(`about to edit something on the server with a put`);
    console.log(`that object is`, groceryItemToEdit);
    axios({
      method: `PUT`,
      url: `/groceries/${groceryItemToEdit.id}`,
      data: groceryItemToEdit,
    })
      .then((response) => {
        console.log('POST SUCCESS');
        fetchGroceries();
        setIsInEditMode(false);
      })
      .catch((error) => {
        console.log('ERROR IN POST', error);
      });
  };

  console.log(groceryList);
  console.log(`Is in edit mode:`, isInEditMode);
  return (
    <div className="App">
      <Header />
      {/* We need the following child components here: */}

      <main>
        <GroceryForm
          addGroceries={addGroceries}
          isInEditMode={isInEditMode}
          setIsInEditMode={setIsInEditMode}
          groceryItemToEdit={groceryItemToEdit}
          editGroceryItem={editGroceryItem}
        />
        <ClickListener fetchGroceries={fetchGroceries} />
        <GroceryList
          groceryList={groceryList}
          fetchGroceries={fetchGroceries}
          setIsInEditMode={setIsInEditMode}
          groceryItemToEdit={groceryItemToEdit}
          setGroceryItemToEdit={setGroceryItemToEdit}
        />
      </main>
    </div>
  );
}

export default App;
