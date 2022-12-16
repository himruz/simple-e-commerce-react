import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Products.css';

const Products = (props) => {
    const {addToCart, product} = props
    const {name,img,seller,price,ratings} = product
    return (
        
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p className='price'>Price :{price}</p>
                <p><small> Manufacturer : {seller}</small></p>
                <p><small> Ratings : {ratings}</small></p>
            </div>
            <button onClick={() =>{addToCart(product)}} className='btn-cart'><p className='cart-text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
           
        </div>
        
       
    );
};

export default Products;