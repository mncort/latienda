import React, { useState, useContext, createContext } from "react"

export const CarritoContext = createContext([])

export const useCarritoContext = () => useContext(CarritoContext)

export const CartContext = ({children}) => {

    console.log(children)

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
  cart.clearCarrito = () =>{
    setCarrito([])
  }
  cart.isInCarrito = (id) => { 
    return carrito.find(item => item.id === id) ? true : false
  }

  return (
    <CarritoContext.Provider value={{carrito, cart}} >
        {children}
    </CarritoContext.Provider>

  )

}