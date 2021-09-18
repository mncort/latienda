import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../context/CartContext';


export default function Counter({id, stock, cantidad, setCantidad, agregar}){

    const {cart} = useCarritoContext()

    const restCantidad = () => {
        cantidad > 1 && setCantidad(cantidad - 1)        
    }
    const sumCantidad = () => {
       stock > cantidad && setCantidad(cantidad + 1)
    }

    return (
        <>
            <div className="w-50 m-auto">
                {cart.isInCarrito(id) ?
                    <div>
                        <Link to={'/carrito'} className="btn btn-success">Terminar Compra</Link>
                    </div>
                    :
                    <div>
                        <div>
                            <button className="btn btn-primary" onClick={restCantidad}>-</button>
                            <span className="mx-3">{cantidad}</span>
                            <button className="btn btn-primary" onClick={sumCantidad}>+</button>
                        </div>
                        <button className="btn btn-primary m-2" onClick={agregar}>Agregar al Carrito</button>
                    </div>
                }
            </div>
        </>
    )
}