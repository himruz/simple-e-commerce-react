import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = ({cart, clearCart, children}) => {
    
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        shipping = shipping + product.shipping;
        
    }
    const tax = (totalPrice * 0.1).toFixed(2); 
    const grandTotal = (parseFloat(totalPrice) + parseFloat(shipping) + parseFloat(tax)).toFixed(2);
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items : {quantity}</p>
            <p>Total Price : ${totalPrice}</p>
            <p>Total Shipping Charge : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h2>Grand Total : ${grandTotal}</h2>
            <button className='clear-cart' onClick={clearCart}>
               <span>Clear Cart</span><span><FontAwesomeIcon className='clear-cart-icon' icon={faTrashAlt}></FontAwesomeIcon></span>
            </button>
            {
                children
            }
        </div>
    );
};

export default Cart;


