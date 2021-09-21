import React from 'react';
import {Link} from 'react-router-dom'
import '../item/item.css'

export default function Item({producto}){

    return ( 
        <div className="col">           
            <div className="card border-0 shadow-lg rounded-3">
                <img src={producto.img} className="card-img-item" alt={producto.title}/>
                <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                    <p className="card-text">$ {producto.precio}</p>
                    <Link className="btn btn-primary w-100" to={`/producto/${producto.id}`}>Ver</Link>
                </div>
            </div>
        </div>

    )
}