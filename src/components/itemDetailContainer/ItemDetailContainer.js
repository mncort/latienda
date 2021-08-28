import React, {useEffect, useState} from 'react';
import { buscarDatos } from '../../helpers/buscarDatos';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail'

export default function ItemDetailContainer(){

    const {productoId} = useParams()

    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        setLoading(true)
        buscarDatos()
            .then(res => {
                setProducto(res.find(item => item.id === parseInt(productoId)))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [productoId]);

    return (
        <div className="ItemDetailContainer">
            <div>{loading ? <h1>Cargando...</h1> : <ItemDetail item={producto}/>}</div>
        </div>
    )
}