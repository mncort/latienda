import React from 'react';

export default function Item({producto}){

    return (            
            <div className="card col-3">
                <img src={producto.img} className="card-img-top" alt={producto.title}/>
                <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                    <p className="card-text">$ {producto.precio}</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>

    )
}