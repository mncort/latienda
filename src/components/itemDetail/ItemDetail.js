import React from 'react';
import {Link} from 'react-router-dom'

export default function ItemDetail({item}){

    console.log(item)

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="card col-8">
                    <img src={item.img} className="card-img-top" alt={item.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">$ {item.precio}</p>
                        <Link className="btn btn-primary" to={`/carrito`}>Comprar</Link>
                    </div>
                </div>
            </div>
        </div>
        
    )

}