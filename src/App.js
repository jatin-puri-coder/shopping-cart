import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Cart from './features/Cart';
import Shop from './features/Shop';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dangerous Goods</h1>
      </header>
      <div className='row'>
        <Shop></Shop>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
