import React, { useEffect,useState, useContext, createContext } from "react"
import {fire} from '../../firebase'

export const CarritoContext = createContext([])

export const useCarritoContext = () => useContext(CarritoContext)

export const CartContext = ({children}) => {

  const [carrito, setCarrito] = useState([])
  const [orden, setOrden] = useState({})
  const [numeroOrden, setNumeroOrden] = useState(false)

  useEffect(() =>{
    orden?.carrito && fire.setCollection("ventas", [orden], null, setNumeroOrden)
  },[orden])

  useEffect(() => {
    cart.numeroOrden = numeroOrden

    numeroOrden && carrito.forEach(item => fire.updateCollectionDoc("productos", item.id, {stock: (item.stock - item.cantidad)}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[numeroOrden])

  const cart = {}

  cart.numeroOrden = numeroOrden

  cart.addItem = (item, cant) => {
    carrito.push({
      ...item, 
      cantidad: cant
    })
    carrito.total = cart.total()
    setCarrito([...carrito])
  }
  cart.total = () => {
    return carrito.reduce((a,b) => a + (parseInt(b.cantidad) * parseInt(b.precio)),0)
  }

  cart.removeItem = (id) => {
    setCarrito(carrito.filter( item => item.id !== id))
  }
  cart.clearCarrito = () =>{
    setCarrito([])
    setOrden({})
    setNumeroOrden(false)
  }
  cart.isInCarrito = (id) => { 
    return carrito.find(item => item.id === id) ? true : false
  }

  cart.isEmpty = () => carrito.length === 0

  cart.count = () => carrito.reduce( (a,b) => a+parseInt(b.cantidad), 0) || 0

  cart.generarOrden = (buyer) =>{
    setOrden({
      comprador: {...buyer},
      carrito: {...carrito}
    })
  }

  return (
    <CarritoContext.Provider value={{carrito, cart}} >
        {children}
    </CarritoContext.Provider>

  )

}