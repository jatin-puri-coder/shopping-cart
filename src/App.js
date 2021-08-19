import React,{ useState } from 'react';
import Cart from './features/Cart';
import Shop from './features/Shop';
import products from './products'

function App() {
  //extract info from products
  const { info } = products;
  const [cartItems, setCartItems] = useState([])
  return (
    <div className="App">
      <header className="header">
        <h1>Dangerous Goods</h1>
      </header>
      <div className='row'>
        {/* info is passed to the Shop component as it will be used & displayed here*/}
        <Shop info={ info }></Shop>
        <Cart cartItems={ cartItems}></Cart>
      </div>
    </div>
  );
}
  
export default App;
