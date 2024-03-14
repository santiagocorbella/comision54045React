import classes from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <CartWidget />
            <h1 style={{ color: 'white'}}>BEAUTIFUL CLOTHES</h1>
            <nav>
              <Link style={{color:'red'}} to='/category/remera'>remeras_</Link>
              <Link style={{color:'red'}} to='/category/buzo'>buzos_</Link>
              <Link style={{color:'red'}} to='/category/pantalon'>pantalones_</Link>
              <Link style={{color:'red'}} to='/category/camisa'>camisas_</Link>  
            </nav>
            
        </header>
    )
}

export default Navbar















