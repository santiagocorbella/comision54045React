import { useContext } from "react"
import {CartContext } from "../../context/CartContext"

const Checkout = () => {
    const { cart, total} = useContext(CartContext)

    const createOrder = (userData) => {
        const objOrder = {
            buyer: {
                name: 'Santiago Corbella' ,
                email: 'santicorbella@gmail.com',
                phone: '3516358439',
            },
            items: cart,
            total
        }
    }

    return (
        <div>
            <h1>Checkout</h1>
            <h3>Crear formulario para el ingreso de datos</h3>
            <button onClick={createOrder}>Generar orden de compras</button>
        </div>
    )
} 

export default Checkout