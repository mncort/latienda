import React, { useEffect, useState } from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import { fire } from '../../firebase';

export default function ItemListContainer(){

    const {cat} = useParams()

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)        
    }, [productos]);

    useEffect(() => {
        setLoading(true)
        let opt = cat ? {where : ["category","==",cat]} : {}
        fire.getCollection(setProductos, "productos", opt)
    }, [cat]);

    return(
        <div className="ItemListContainer">
            <div>{loading ? <h1>Cargando...</h1> : <ItemList listado={productos}/>}</div>
        </div>
    )
}