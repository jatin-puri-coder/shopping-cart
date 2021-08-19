export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'
export const CHANGE_QTY = 'CHANGE_QTY'

export const addToCart = (itemName) => {
  return {
    type: ADD_TO_CART,
    itemName
  }
}

export const deleteFromCart = (itemName) => {
  return {
    type: DELETE_FROM_CART,
    itemName
  }
}

export const changeQty = (itemName, value) => {
  return {
    type: CHANGE_QTY,
    id: itemName,
    qty: value
  }
}