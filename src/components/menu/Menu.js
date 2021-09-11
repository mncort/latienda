import React from 'react';
import './Menu.css';
import Cart from '../cart/cart';
import { Link } from 'react-router-dom';

export default function Menu(){
    return (
      
    <div className="menu-nav">
        <div className="logo">
            <Link to={'/'}><img src="./assets/logoBENITOS.png" alt="Benitos"/></Link>
        </div>

        <div className="menu">
            <Link className="menu-item" to={'/categoria/remeras'}>Remeras</Link>
            <Link className="menu-item" to={'/categoria/pantalones'}>Pantalones</Link>
            <Link className="menu-item" to={'/categoria/zapatillas'}>Zapatillas</Link>
            <Link className="menu-item" to={'/carrito'}><Cart/></Link>
        </div>
    </div>

    )
}