import React from 'react';

const ReveiwItem = (props) => {
    const {name,quantity,img,price,key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h4>Name:{name}</h4>
                <p>price:{price}</p>
                <p>quantity:{quantity}</p>
                <button onClick={() => props.removeProduct(key)}>Remove product</button>
            </div>
        </div>
    );
};

export default ReveiwItem;