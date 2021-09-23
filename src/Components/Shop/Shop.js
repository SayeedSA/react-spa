import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Products from '../Products/Products';
import './shop.css';

const Shop = () => {
    const firstData = fakeData.slice(0,10)
    console.log(firstData)
    const [products,setProducts]= useState(firstData)
    return (
        <div className="shop-container">
            <div className="products-container">
            <ol>
                {
                  products.map(product => <Products></Products>)
                }
            </ol>           
            </div>
            <div className="cart-container">
                <h1>Cart Portion</h1>                    
            </div>
           
        </div>
    );
};

export default Shop;