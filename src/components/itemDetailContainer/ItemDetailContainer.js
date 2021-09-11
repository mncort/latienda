import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';
import {fire} from '../../firebase'

export default function ItemDetailContainer(){

    const {productoId} = useParams()

    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [producto]);

    useEffect(() => {
        setLoading(true)
        fire.getCollection(setProducto, "productos", {doc: productoId})
    }, [productoId]);

    

    return (
        <div className="ItemDetailContainer">
            <div>{loading ? <h1>Cargando...</h1> : <ItemDetail item={producto}/>}</div>
        </div>
    )
}