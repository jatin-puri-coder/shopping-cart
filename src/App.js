import React,{ useState } from 'react';
import Cart from './features/Cart';
import Shop from './features/Shop';
import products from './products'

function App() {
  //extract info from products
  const { info } = products;
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
      const exists = cartItems.find((item) => item.name === product.name)
      if (exists) {
        setCartItems(cartItems.map((item) => item.name === product.name ? { ...exists, qty: exists.qty + 1} : item))
      } else {
        setCartItems([...cartItems, { ...product, qty: 1}])
      }
  }
  return (
    <div className="App">
      <header className="header">
        <h1>Dangerous Goods</h1>
      </header>
      <div className='row'>
        {/* info is passed to the Shop component as it will be used & displayed here*/}
        <Shop addToCart={ addToCart } info={ info }></Shop>
        <Cart addToCart={ addToCart } cartItems={ cartItems }></Cart>
      </div>
    </div>
  );
}
  
export default App;
