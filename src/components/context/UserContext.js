import React, { useState, useContext, createContext } from "react"

export const UIContext = createContext([])

export const useUserContext = () => useContext(UIContext)

export const UserContext = ({children}) => {

  const [showModal, setshowModal] = useState(false)

  return (
    <UIContext.Provider value={{showModal, setshowModal}} >
        {children}
    </UIContext.Provider>

  )

}