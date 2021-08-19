import React from 'react';
import Cart from './features/Cart';
import Shop from './features/Shop';
import products from './products'

function App() {
  const { info } = products;
  return (
    <div className="App">
      <header className="header">
        <h1>Dangerous Goods</h1>
      </header>
      <div className='row'>
        <Shop info={ info }></Shop>
        <Cart></Cart>
      </div>
    </div>
  );
}
  
export default App;
