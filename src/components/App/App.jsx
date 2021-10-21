import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx';
import './App.css';

function App() {
  let [groceryList, setGroceryList] = useState([]);

  //when the page opens, you will see...
  useEffect(() => {
    fetchGroceries()
  }, []);

  //fetch those groceries from the DB with GET
  const fetchGroceries = () => {
    axios({
      method: 'GET',
      url: '/groceries'
    })
      .then(response => {
        console.log('GET', response.data);
        setGroceryList(response.data)
      })
      .catch(error => {
        console.log('ERROR IN GET', error);
      })
  } //end fetchGroceries


//Add those groceries in POST
  const addGroceries = (newItem) => {
    console.log('Post start', newItem);
    axios({
      method: 'POST',
      url: '/groceries',
      data: newItem
    })
    .then(response => {
      console.log('POST SUCCESS')
      fetchGroceries();
    })
    .catch(error => {
      console.log('ERROR IN POST', error);
    })


  }//end addGroceries
  console.log(groceryList);
  return (
    <div className="App">
      <Header />
      {/* We need the following child components here: */}
      {/* Form */}
      {/* List */}
      <main>
        <p>Under Construction...</p>
      </main>
    </div>
  );
}

export default App;
