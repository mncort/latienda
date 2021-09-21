import React, {useState} from 'react';
import { useCarritoContext } from '../context/CartContext';
import CartItem from '../cartItem/CartItem'
import { Link } from 'react-router-dom';
import CheckOut from '../checkout/CheckOut';


export default function Cart(value){

    const {cart, carrito} = useCarritoContext()

    const [checkOut, setCheckOut] = useState(false)
    

    return (   

        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-6">
                {
                    !cart.isEmpty() ? 
                        <>
                            {carrito.map( item => <CartItem key={item.id} item={item}/>)}
                            <button className="btn btn-primary w-100" onClick={ () => setCheckOut(!checkOut)}>Finalizar Compra</button>
                        </>
                    :
                        <div>
                            <p>El carrito esta vacio</p>
                            <Link to="/" className="btn btn-primary">Seguir Comprando</Link>
                        </div>
                }
                </div>
            </div>
            <CheckOut checkOut={checkOut} setCheckOut={setCheckOut}/>
        </div> 
        
    )
}