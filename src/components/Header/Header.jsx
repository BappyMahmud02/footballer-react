import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className='bappy '>
            <div className="navbar bg-base-300 my-6 ">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">PLAYERS</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 ">
                        <li className='mx-3'><a>MESSI</a></li>
                        <li className='mx-3'><a>CR7</a></li>
                        <li className='mx-3'><a>NEYMAR</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;