import './App.css'
 import Navbar from './components/navbar/navbar'
 import ItemListContainer from './components/ItemListContainer/ItemListContainer'
 //import ItemCount from './components/itemCount/itemCount'
 import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
 import { BrowserRouter, Routes, Route } from 'react-router-dom'

 function App() {
  return (
    <>
     <section style={{color:'white'}}>
      <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>} />
         <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos de la categoria:'}/>} />        
         <Route path='/item/:itemId' element={<ItemDetailContainer />} />
       </Routes>
      </BrowserRouter>
     </section> 
    </>
   )
  }   
    
export default App  