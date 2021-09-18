import React, { useState, useEffect } from 'react';
import './Menu.css';
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom';
import {fire} from '../../firebase'


export default function Menu(){

    const [categoria, setCategoria] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [categoria]);

    useEffect(() => {
        setLoading(true)
        fire.getCollection(setCategoria, "categorias")
    }, []);

    return (
      
    <div className="menu-nav">
        <div className="logo">
            <Link to={'/'}><img src="./assets/logoBENITOS.png" alt="Benitos"/></Link>
        </div>

        <div className="menu">

            {!loading ? categoria.map(cat => 
                    <Link key={cat.name} className="menu-item" to={`/categoria/${cat.name}`}>{cat.name}</Link>
                ) : ""}
            <Link className="menu-item" to={'/carrito'}><CartWidget/></Link>
        </div>
    </div>

    )
}