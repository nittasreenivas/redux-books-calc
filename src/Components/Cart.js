
import { connect } from "react-redux";
import { useEffect, useState } from "react";
const Cart = (props) => {
    console.log(props)
    const [total,setTotal] = useState(0)
    const changeQty = (index,qty) => {
        console.log("changeQty button clicked")
        props.dispatch({
            type:"CHANGE_CART_QTY",
            payload:{
                index:index,
                qty:qty
            }
        })
    }
    useEffect(() => {
     let totalAmout =  props.cart.Cart.reduce((acc,curr) => {
        return acc + Number(curr.price) * curr.qty
      },0)
      setTotal(totalAmout)
    },[props.cart.Cart])
    return(
        <div className="cart-container">
           <b> Cart </b>
           <b> Total:${total}</b>
           {
            props.cart.Cart.length > 0 ? (
            props.cart.Cart.map((item,index) => {
                return(
                    <div key={index} className="carts">
                        <h3> {item.title}</h3>
                        <img alt="title" width={122} src={item.thumbnailUrl}/>
                        <p> {item.shortDescription}</p>
                        <h4> ${item.price}</h4>
                        <div className="cart-button">
                            <button onClick={() => changeQty(item.index,item.qty-1)}>-</button>
                            <span> {item.qty}</span>
                            <button onClick={() => changeQty(item.index,item.qty+1)}> + </button>
                            </div>
                        </div>
                )
            })
            ):(
                <span> <em>  YOUR CART IS EMPTY </em> </span>
            )
           }
        </div>
    )
}

export default connect(function(store){
    return store
})(Cart)