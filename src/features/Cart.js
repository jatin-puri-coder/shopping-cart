import React from 'react'

function Cart(props) {
  const { cartItems, addToCart, deleteFromCart } = props
  const totalPrice = cartItems.reduce((pv, cv) => pv + cv.price * cv.qty, 0)
  return (
    <aside className='box col-small'>
      <h2>Cart</h2>
      <div>
        { cartItems.length === 0 && <p>No items in cart</p> }
      </div>
      {/* map through the items in the cart and display name, quantity and price(fixed at 2 decimals) */}
      {cartItems.map((item) => (
        <div key={item.name} className='row'>
          <div>{item.name}</div>
          <div>
            <button onClick={() => addToCart(item)} className='add'>+</button>
            <button onClick={() => deleteFromCart(item)} className='remove'><img src='trash.ico' alt='remove' /></button>
          </div>
          <div>
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <div>
          <hr></hr>
          <h2>Total Price</h2>
          <p>{ totalPrice.toFixed(2) }</p>
        </div>
      )}
    </aside>
  )
}

export default Cart