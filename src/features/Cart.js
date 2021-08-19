import React from 'react'

function Cart(props) {
  const { cartItems } = props
  return (
    <aside className='box col-small'>
      <h2>Cart</h2>
      <div>
        {cartItems.length === 0 && <p>No items in cart</p>}
      </div>
    </aside>
  )
}

export default Cart