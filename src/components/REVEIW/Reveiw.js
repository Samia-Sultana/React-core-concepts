import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../CART/Cart';
import ReveiwItem from '../REVEIW_ITEM/ReveiwItem';

const Reveiw = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlace] = useState(false);
    const removeProduct = (productKey) =>{
        console.log(productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() =>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key =>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[])
    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlace(true);
        processOrder();
    }
    
    return (
        <div className="shop-container">
            <div className="product-container">
            {
                cart.map(pd => <ReveiwItem product = {pd} key ={pd.key} removeProduct ={removeProduct}></ReveiwItem>)
            }
            {
                orderPlaced && 
                <h1>Thanks for placing order..........</h1>
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <button className="main-btn" onClick={handlePlaceOrder}>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Reveiw;