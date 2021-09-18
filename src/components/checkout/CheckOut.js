import React, {useEffect, useState} from 'react';
import { useUserContext } from '../context/UserContext';
import { useCarritoContext } from '../context/CartContext';
import Modalito from '../modalito/Modalito';
import Formulario from '../formulario/Formulario'

export default function CheckOut({checkOut, setCheckOut}){

    const {cart} = useCarritoContext()
    const {showModal, setshowModal} = useUserContext()
    const [formData, setFormData] = useState({
        nombre: '',
        email:'',
        direccion:'',
        entrega: ''
    })

    useEffect(() => {
        setshowModal(checkOut)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkOut]);

    useEffect(() => {
        setCheckOut(showModal)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showModal]);

    const handleForm = (e, name=e.target.name, value=e.target.value) => {
        setFormData({...formData, [name]: value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(e.target.name === "terminar"){
            cart.generarOrden(formData)
        }else{
            setshowModal(false)
        }
        
    }

    const finalizarCompra = () => {
        cart.clearCarrito()
        setshowModal(false)
    }

    return (
        <Modalito titulo={!cart.numeroOrden ? "Finalizar Compra" : "Compra Finalizada"}>
            {
                !cart.numeroOrden ?
                <Formulario handleForm={handleForm} handleSubmit={handleSubmit}/>
                : 
                <div>
                    <h2>Su numero de orden es : {cart.numeroOrden}</h2>
                    <button className="btn btn-primary w-100" onClick={finalizarCompra}>Cerrar</button>
                </div>
            }
        </Modalito>
    )
}