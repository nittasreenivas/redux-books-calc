
const initialState = {
  Cart:[]
}

const cartReducer = (state=initialState,action) => {
  if(action.type === "ADD_TO_CART"){
    return{
      ...state,
      Cart:[...state.Cart,{...action.payload}]
    }
  }
  if(action.type === "REMOVE_FROM_CART"){
    let remove = state.Cart.filter((item) => {
      return item.index !== action.payload
    })
    return{
      ...state,
      Cart:remove
    }
  }
  if(action.type === "CHANGE_CART_QTY"){
    let changeCart = state.Cart.filter((item) => {
      return item.index === action.payload.index ? (item.qty = action.payload.qty) : item.qty
    })
    return{
      ...state,
      Cart:changeCart
    }
  }
  return state;
}

export default cartReducer