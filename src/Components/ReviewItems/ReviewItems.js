import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItems.css';

const ReviewItems = ({product, deleteCart}) => {
    const {name, price, quantity, img, shipping, id} = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-info">
                    <p>{name}</p>
                    <p><small>Price : ${price}</small></p>
                    <p><small>Shipping : ${shipping}</small></p>
                    <p><small>Quantity : {quantity}</small></p>
                </div>
                <div className="delete-item-btn">
                    <button onClick={()=> deleteCart(id)} className='dlt-btn'>
                        <FontAwesomeIcon className='dlt-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;