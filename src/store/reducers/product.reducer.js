
const initialState = {
    Products:[]
}

const productReducer = (state=initialState,action) => {
    if(action.type === "FETCH_BOOKS"){
        return{
            ...state,
            Products:action.payload
        }
    }
    return state
}

export default productReducer;