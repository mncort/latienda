import React, { useEffect, useState } from 'react';
import ItemList from '../itemList/ItemList';
import { buscarDatos } from '../../helpers/buscarDatos';
import { useParams } from 'react-router-dom';

export default function ItemListContainer(){

    const {cat} = useParams()

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        setLoading(true)
        buscarDatos()
            .then(res => {
                cat && (res = res.filter(item => item.category === cat))
                setProductos(res)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [cat]);

    return(
        <div className="ItemListContainer">
            <div>{loading ? <h1>Cargando...</h1> : <ItemList listado={productos}/>}</div>
        </div>
    )
}