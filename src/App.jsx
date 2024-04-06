 import './App.css'
 import Navbar from './components/navbar/navbar'
 import ItemListContainer from './components/ItemListContainer/ItemListContainer'
 //import ItemCount from './components/itemCount/itemCount'
 import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
 import { BrowserRouter, Routes, Route } from 'react-router-dom'
 import { CartProvider } from './context/CartContext'
 import { NotificationProvider } from './notification/NotificationsService'
 import CartView from './components/Cartview/CartView'
//CLASE DE EVENTOS:
//import Button from './components/Button/Button'
import Checkout from './components/Checkout/Checkout'
import FormWithValidationHOC from './components/FormWithValidationHOC/FormWithValidationHOC'

 const App = () => {

  
  return (
    <>
     <section style={{color:'white'}}>
      <BrowserRouter> 
       <NotificationProvider>
        <CartProvider>
         <Navbar />
          <Routes>
           <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>} />
           <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listados de productos filtrados'}/>} />        
           <Route path='/item/:itemId' element={<ItemDetailContainer />} />
           <Route path='/cart' element={<CartView/>}/>
           <Route path='/checkout' element={<Checkout/>}/>
           <Route path='/formwithvalidationhoc' element={<FormWithValidationHOC/>}/>
          </Routes>
         </CartProvider>
        </NotificationProvider>
       </BrowserRouter>     
      </section>
    </>
   )
 }   
    
export default App  