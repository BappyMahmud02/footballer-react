import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    let totalPrice = 0;
    for (const player of cart) {
        totalPrice = totalPrice + player.price;
    }

    const tax = totalPrice * 7 / 100 ;
    const grandTotal = totalPrice + tax ;

    return (
        <div className='cart w-96'>
            <h2 className='text-3xl '>Order summery</h2> <br />
            <p className='text-2xl'>1. Selected items: {cart.length}</p>
            <p className='text-2xl my-2'>2. Total Price: ${totalPrice.toFixed(2)}
            </p>
            <p className='text-2xl'>3. Tax: ${tax.toFixed(2)}</p>
            <p className='text-2xl my-2'>4. Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;