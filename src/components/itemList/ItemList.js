import React from 'react';
import Item from '../item/Item'

export default function ItemList({listado}){

    return (
        <div className="container">
            <div className="row">
                {
                    listado.map(producto => <Item key={producto.id} producto={producto}/>)
                }
            </div>
        </div>
        
    )

}