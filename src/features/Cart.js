import React from 'react'

function Cart(props) {
  const { cartItems, addToCart } = props
  return (
    <aside className='box col-small'>
      <h2>Cart</h2>
      <div>
        { cartItems.length === 0 && <p>No items in cart</p> }
      </div>
      {cartItems.map((item) => (
        <div key={item.name} className='row'>
          <div>{item.name}</div>
          <div>
            <button onClick={() => addToCart(item)} className='add'>+</button>
            {/* <button onClick={() => onDelete(item)} className='minus'>-</button> */}
          </div>
          <div>
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
    </aside>
  )
}

export default Cart