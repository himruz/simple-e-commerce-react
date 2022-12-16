import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
const products = useLoaderData();
const [cart, setCart] = useState([]);


 useEffect(() =>{
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProducts = products.find(product => product.id===id)
      if(addedProducts){
        const quantity = storedCart[id];
        addedProducts.quantity = quantity;
        savedCart.push(addedProducts);
      }
    }
    setCart(savedCart);
  },[products])

  const addToCart = (selectedProduct) =>{
    let newCart = [];
    const existCart = cart.find(product => product.id === selectedProduct.id);
    if(!existCart){
       selectedProduct.quantity = 1 ;
       newCart = [...cart, selectedProduct];
  }else{
    const rest = cart.filter(product => product.id !== selectedProduct.id )
    existCart.quantity = existCart.quantity + 1;
    newCart = [...rest, existCart]
  }
    setCart(newCart);
    addToDb(selectedProduct.id);
  }

  const clearCart = () =>{
    setCart([]);
    deleteShoppingCart();
  }

    return (
        <div  className="shop-container">
            <div className="shop-wrapper">
            <div className='products-container'>
                {
                    products.map((product)=><Products product={product} addToCart={addToCart} key={product.id}></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}>
                  <Link to='/order'>
                    <button className='review-items'>
                      <span>Review Order</span>
                      <span><FontAwesomeIcon  icon={faAngleRight}></FontAwesomeIcon></span>
                      </button>
                    </Link>
                </Cart>
            </div>
            </div>
         </div>
    );
};

export default Shop;