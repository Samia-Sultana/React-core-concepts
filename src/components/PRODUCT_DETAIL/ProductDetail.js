import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../PRODUCT/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(prod => prod.key === productKey);
    return (
        <div>
            <Product product = {product} showAddToCart = {false}></Product>
        </div>
    );
};

export default ProductDetail;