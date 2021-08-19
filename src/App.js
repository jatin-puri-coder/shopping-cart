import React,{ useState } from 'react';
import Cart from './features/Cart';
import Shop from './features/Shop';
import products from './products'

function App() {
  //extract info from products
  const { info } = products;
  //setting state for items in cart
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    //when clicking add to cart, first check if item already exists in cart. If it does add 1 to its quantity otherwise get all product data and give it a quantity of 1.
      const exists = cartItems.find((item) => item.name === product.name)
      if (exists) {
        setCartItems(cartItems.map((item) => item.name === product.name ? { ...exists, qty: exists.qty + 1} : item))
      } else {
        setCartItems([...cartItems, { ...product, qty: 1}])
      }
  }

  const deleteFromCart = (product) => {
    //when clicking remove button, first check if item quantity is 1. If so, then remove item using filter method. If item quantity is greater than 1 reduce quantity by 1.
      const exists = cartItems.find((item) => item.name === product.name)
      if (exists.qty === 1) {
        setCartItems(cartItems.filter((item) => item.name !== product.name))
      } else {
        setCartItems(cartItems.map((item) => item.name === product.name ? { ...exists, qty: exists.qty - 1} : item))
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
        <Cart addToCart={ addToCart } deleteFromCart={ deleteFromCart } cartItems={ cartItems }></Cart>
      </div>
    </div>
  );
}
  
export default App;
