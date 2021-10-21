import React from 'react';

import Header from '../Header/Header.jsx';
import './App.css';
import GroceryForm from '../GroceryForm/GroceryForm.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      {/* We need the following child components here: */}
      {/* Form */}
      {/* List */}
      <GroceryForm addGroceries={addGroceries}/>
      <main>
        <p>Under Construction...</p>
      </main>
    </div>
  );
}

export default App;
