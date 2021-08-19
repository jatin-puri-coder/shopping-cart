import { ADD_TO_CART, DELETE_FROM_CART, CHANGE_QTY } from '../actions/index'

const cart = (state = [], action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return getNewCart(state, action.name)
    case DELETE_FROM_CART:
      return state.filter(item => item.name !== action.name)
    case CHANGE_QTY:
      return action.cart
    default:
      return state
  }
}

function getNewCart(cart, name) {
  var exists = false
  const newCart = cart.map(item => {
    if (item.name === name) {
      item.quantity += 1
      exists = true
    }
    return item
  })

  if (exists) {
    return newCart
  } else {
    newCart.push({name:name, quantity: 1})
    return newCart
  }
}

export default cart