import React from 'react';
import { MdShoppingCart} from "react-icons/md";
import { useCarritoContext } from '../context/CartContext';


export default function CartWidget(){

    const {cart, carrito} = useCarritoContext()

    return (

        <span className="position-relative" style={{display: cart.isEmpty() ? 'none': 'inline' }}>
            <MdShoppingCart/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.count()}
                </span>
        </span>
    )
}