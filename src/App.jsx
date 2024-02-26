import Navbar from "./components/navbar/navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
//EL IMPORT BUTTON Y EL IMPORT ItemCount NO LOS VOY A UTILIZAR POR AHORA.
//LOS DEJO COMENTADOS POR SI LOS USO DESPUÉS.
//import Button from "./components/Button/Button"
//import ItemCount from "./components/itemCount/itemCount"

function App() {
  return (
    <>
      <Navbar/>
     
     <h1>BEATIFUL CLOTHES</h1>
     <ItemListContainer greeting='¡¡¡Bienvenidos!!!'/>
     <nav style={{textAlign:'center'}}>
        <a style={{ color: 'red',fontSize: 21 }}>Remeras_  </a>
        <a style={{ color: 'red',fontSize: 21 }}> Buzos_  </a>
        <a style={{ color: 'red',fontSize: 21 }}>Jeans_</a>
     </nav>
    </>
  )
}

export default App

/* A LAS SIGUIENTES LÍNEAS DE CODIGO LAS DEJO COMENTADAS
NO LAS VOY A USAR POR EL MOMENTO*/ 

/*<ItemCount initialValue={1} min={0} max={10}/>
<ItemCount initialValue={10} min={5} max={15}/>
<ItemCount initialValue={100} min={95} max={105}/> 

<a>prueba</a>/}
<Button label='Home' textColor='red'  className='btn btn-primary' callback={() => console.log('hice click en Home')} />
<Button label='Contact' textColor='blue' background='orange' className='btn btn-primary' callback={() => console.log('hice click en Contact')} />
<Button label='About' textColor='white' className='btn btn-primary' callback={() => console.log('hice click en About')}/> 
*/
