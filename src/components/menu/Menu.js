import React from 'react';
import './Menu.css';
import Cart from '../cart/cart';

export default function Menu(){
    return (
      
    <div className="menu-nav">
        <div className="logo">
            <img src="logoBENITOS.png"/>
        </div>

        <div className="menu">
            <a className="menu-item" href="#">Fiambres</a>
            <a className="menu-item" href="#">Picadas</a>
            <a className="menu-item" href="#">Comidas</a>
            <Cart className="menu-item"/>
        </div>
    </div>

    )
}