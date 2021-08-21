import React, { useEffect, useState } from 'react';
import ItemList from '../itemList/ItemList';
import { buscarDatos } from '../../helpers/buscarDatos';

export default function ItemListContainer(){

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        setLoading(true)
        buscarDatos()
            .then(res => setProductos(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, []);

    return(
        <div className="ItemListContainer">
            <div>{loading ? <h1>"Cargando..."</h1> : <ItemList listado={productos}/>}</div>
        </div>
    )
}