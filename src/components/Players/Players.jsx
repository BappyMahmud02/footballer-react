import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Players.css'
const Players = () => {

    const [players, setPlayers] = useState([]);

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);

    const handleAddToCart = (player) => {
        const newCart = [...cart, player] ;
        setCart(newCart);
    }

    return (
        <div className='players-container'>

            <div className='player-container'>
                {
                    players.map(player => <Player
                        key={player.id}
                        player={player}
                        handleAddToCart ={handleAddToCart}
                    ></Player>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Players;