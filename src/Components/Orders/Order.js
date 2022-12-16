import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Order = () => {
    const {products, previousStoredCart} = useLoaderData();
   const [cart, setCart] = useState(previousStoredCart);
    
   const deleteCart = (id) => {
    const deletedProduct = cart.filter(product=> product.id !== id);
    setCart(deletedProduct);
    removeFromDb(id);
  }
  
  const clearCart = () =>{
    setCart([]);
    deleteShoppingCart();
  }


    return (
        <div  className="shop-container">
            <div className="shop-wrapper">
            <div className='orders-container'>
               {
                cart.map(product => <ReviewItems key={product.id} product={product}  deleteCart={deleteCart}></ReviewItems>)
               }

               {
                cart.length === 0 && <h2>No Items for Review . Please <Link to='/'>Shop</Link></h2>
               }

            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}>
                <Link to='/shipping'>
                    <button className='review-items'>
                      <span>Proceed Shipping</span>
                      <span><FontAwesomeIcon  icon={faAngleRight}></FontAwesomeIcon></span>
                      </button>
                    </Link>
                </Cart>
            </div>
            </div>
         </div>
    );
};

export default Order;