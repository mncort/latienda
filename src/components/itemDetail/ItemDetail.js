import {React, useState} from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Counter from '../counter/Counter';


export default function ItemDetail({item}){

    const {id, img, title, descripcion, precio, stock} = item

    const {addItem, isInCarrito} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const agregar = () => {
        addItem({id, img, title, precio}, cantidad)
        console.log(isInCarrito(item.id))
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="card col-8">
                    <img src={img} className="card-img-top" alt={title}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <span className="card-text"><p>{descripcion}</p><p>$ {precio}</p> <p>Stock: {stock}</p></span>
                        <Counter id={id} stock={stock} cantidad={cantidad} setCantidad={setCantidad} agregar={agregar}/>
                    </div>
                </div>
            </div>
        </div>
        
    )

}