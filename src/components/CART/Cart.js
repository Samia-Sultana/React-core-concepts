import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0);
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if (total>0){
        shipping = 12.99;
    }
    const tax = (total/10).toFixed(2);
    const grandTotal = (total+shipping+Number(tax)).toFixed(2);
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items orderd::{cart.length}</p>
            <p>shipping: {shipping}</p>
            <p>tax:{tax}</p>
            <p>total price: {grandTotal}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;