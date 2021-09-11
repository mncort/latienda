import React, { useState, useContext, createContext } from "react"

export const CarritoContext = createContext([])

export const useCarritoContext = () => useContext(CarritoContext)

export const CartContext = ({children}) => {

  const [carrito, setCarrito] = useState([])

  const cart = {}

  cart.addItem = (item, cant) => {
    setCarrito([
        ...carrito,
        {
            ...item, cantidad: cant
        }
    ])
  }

  cart.removeItem = (id) => {
    setCarrito(carrito.filter( item => item.id !== id))
  }
  cart.clearCarrito = () =>{
    setCarrito([])
  }
  cart.isInCarrito = (id) => { 
    return carrito.find(item => item.id === id) ? true : false
  }

  cart.isEmpty = () => carrito.length === 0

  cart.count = () => carrito.reduce( (a,b) => a+parseInt(b.cantidad), 0) || 0

  return (
    <CarritoContext.Provider value={{carrito, cart}} >
        {children}
    </CarritoContext.Provider>

  )

}