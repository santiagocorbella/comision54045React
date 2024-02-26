import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <header className={classes.header}>
         <h4 style={{ color: 'red',fontSize:'10'}}>¡Buenas!</h4>
         <nav>
          <a className= 'btn btn-primary'>¡¡¡Nosotros Somos!!!</a>
         </nav>
      <CartWidget />
        </header>
       
    )
}       
    
    export default Navbar















/*import classes from './Navbar.module.css'

const navbar = () => {
    //console.log(classes)
    return (
        <header className={classes.header}>
         <h4 style={{ color: 'red',fontSize:20}}>la indumentaria que necesitas</h4>
         <nav>
            <a className='btn btn-primary'>Remeras</a>
            <a>Pantalones</a>
            <a>Buzos</a>
         </nav>
        </header>
    )
}

export default navbar*/