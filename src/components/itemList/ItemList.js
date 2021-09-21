import React from 'react';
import Item from '../item/Item'
import '../itemList/ItemList.css'

export default function ItemList({listado}){

    return (
        <div className="container pt-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {
                    listado.map(producto => <Item key={producto.id} producto={producto}/>)
                }
            </div>
        </div>
        
    )

}