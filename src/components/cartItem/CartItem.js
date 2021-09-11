import React from 'react';
import { useCarritoContext } from '../context/CartContext';

export default function Cart({item}){

    const {cart} = useCarritoContext()

    return (

            <div key={item.id} className="card col-6 mb-3" style={{maxwidth: 250}}> 
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.descripcion}</p>
                            <p className="card-text"><span>Precio: $ {item.precio}</span></p>
                            <p className="card-text"><span>Cantidad: {item.cantidad}</span></p>
                            <p className="card-text"><span>Sub Total: $ {item.precio * item.cantidad}</span></p>
                            <div><button className="btn btn-primary" onClick={() => cart.removeItem(item.id)}> eliminar</button></div>
                        </div>
                    </div>
                </div>
            </div>

    )
}