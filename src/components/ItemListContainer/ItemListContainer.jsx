import { useState, useEffect} from "react"
//import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useNotification } from "../../notification/hooks2/useNotification"
import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"


 

 const ItemListContainer = ({ greeting }) => {
    const[products, setProducts] = useState()
    const[render, setRender] = useState(false)
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    const { showNotification } = useNotification()
 
    useEffect(() => {
      setTimeout(() => {
      setRender(prev => !prev)
      setLoading(render)
       } , 2000)  
 }, [])
       
      
    
    useEffect(() => {

      const productsCollection = categoryId ? (
           query(collection(db, 'products'), where('category', '==', categoryId))
      ) : (     
        collection(db, 'products')
      ) 
       console.log(productsCollection)   
      getDocs(productsCollection)
          .then(querySnapshot => {
              const productsAdapted = querySnapshot.docs.map(doc => {
              const data = doc.data()
              
              return { id: doc.id, ...data}
            })
          
          setProducts(productsAdapted)
          console.log(productsAdapted)
         })
        .catch(() => {
            showNotification('error', 'hubo un error cargando los productos')
        })

       
       },[categoryId])
      
       if(loading) {
        return  <h4 style={{ color: 'orange'}}>Cargando listado de productos...</h4>
    }
         
         return (
         <div style= {{}} onClick={() => console.log('hice click en itemListcontainer')}>
         <main>
          <h1>{greeting}</h1>
          <ItemList products={products}/>
         </main>
          
         </div> 
      )
      }  
      
    export default ItemListContainer
    


  
         