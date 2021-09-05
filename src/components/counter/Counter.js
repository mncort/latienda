import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


export default function Counter({id, stock, cantidad, setCantidad, agregar}){

    const {isInCarrito} = useContext(CartContext)

    const restCantidad = () => {
        cantidad > 1 && setCantidad(cantidad - 1)        
    }
    const sumCantidad = () => {
       stock > cantidad && setCantidad(cantidad + 1)
    }

    return (
        <>
            <div className="w-50 m-auto">
                {isInCarrito(id) ?

                    <span>
                        <Link to={'/carrito'} className="btn btn-success">Terminar Compra</Link>
                    </span>
                    :
                    <span>
                        <button className="btn btn-primary" onClick={restCantidad}>-</button>
                        <span className="mx-3">{cantidad}</span>
                        <button className="btn btn-primary" onClick={sumCantidad}>+</button>
                    </span>
                }
            </div>
            <button className="btn btn-primary m-2" onClick={agregar}>Agregar al Carrito</button>
        </>
    )
}