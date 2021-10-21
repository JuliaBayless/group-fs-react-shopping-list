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

//fetch those groceries from the DB
  const fetchGroceries = () => {
    axios.get({
      method: 'GET',
      url: '/groceries'
    })
    .then(response => {
      console.log('GET:', response.data);
      setGroceryList(response.data) 
  })
  .catch(error => {
      console.log('ERROR IN GET', error);
  })
  }




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
