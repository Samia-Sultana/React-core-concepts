import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Product = (props) => {
    const {name,img,seller,price,stock,key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h4><Link to={"/product/"+key}>{name}</Link></h4>
                <br/>
                <p><small>by:{seller}</small></p>
                <br/>
                <p><small>price:{price}</small></p>
                <br/>
                <p><small>stock:{stock}</small></p>
                {
                    props.showAddToCart &&
                    <button className="main-btn" onClick = {() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
                }
            </div>
        </div>
    );
};

export default Product;