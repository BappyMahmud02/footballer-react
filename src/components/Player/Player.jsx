import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Player.css'
const Player = (props) => {

    const { image, name, id, price } = props.player;

    const handleAddToCart = props.handleAddToCart


    return (
        <>
            <div className='card'>
                <div className="w-96 bg-base-100 shadow-xl rounded-lg">
                    <figure><img className='h-60' src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <h3 className='my-4'>price: {price}</h3>
                        <h3 className='my-4'>ID: {id}</h3>
                        <div className="card-actions mt-4">
                            <button onClick={() => handleAddToCart(props.player)} className="btn btn-primary btn-cart ">Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Player;