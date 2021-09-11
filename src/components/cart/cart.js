import React from 'react';
import { useCarritoContext } from '../context/CartContext';
import CartItem from '../cartItem/CartItem'
import { Link } from 'react-router-dom';


export default function Cart(value){

    const {cart, carrito} = useCarritoContext()

    return (

        
        

        <div className="container">
            <div className="row justify-content-center">
                {!cart.isEmpty() ? 
                    carrito.map( item => <CartItem key={item.id} item={item}/>)
                    : 
                    <div>
                        <p>El carrito esta vacio</p>
                        <Link to="/" className="btn btn-primary">Seguir Comprando</Link>
                    </div>
                
                }
            </div>
        </div> 
        
    )
}