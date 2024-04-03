import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import cart from './assets/cart2.svg.png.png'
import {Link } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to={'/cart'}>
          <img src ={cart} height="50" width="50" />
         { totalQuantity }
        </Link>
    )
}

export default CartWidget