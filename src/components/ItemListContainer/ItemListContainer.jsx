
import { useState, useEffect} from "react"
//import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useNotification } from "../../notification/hooks2/useNotification"

import { getDocs, collection, query, where} from 'firebase/firestore'

import { db } from "../../services/firebase/firebaseConfig"

 
console.log("hola")
 const ItemListContainer = ({ greeting }) => {
    const[products, setProducts] = useState()
    const[render, setRender] = useState(false)
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    const { showNotification } = useNotification()
 console.log(categoryId)
    /*useEffect(() => {
      setTimeout(() => {
      setRender(prev => !prev)
      
      }, 2000)  
      }, [])*/
        
     useEffect(() => {
      console.log("entró")
     }),
    useEffect(() => {
console.log("hola")
      /*const productsCollection = categoryId ? (
           query(collection(db, 'products'), where('category', '==', categoryId))
      ) : (     
        query(collection(db, 'products'))
      ) 
      console.log(productsCollection)    
      getDocs(productsCollection)
          .then(querySnapshot => {
              const productsAdapted = querySnapshot.docs.map(doc => {
              const data = doc.data()
              
              return { id: doc.id, ...data}
            })
          console.log(productsAdapted)
          setProducts(productsAdapted)
         })
        .catch(() => {
            showNotification('error', 'hubo un error cargando los productos')
        })*/
     
       },[])
         console.log(products)
         return (
         <div style= {{}} onClick={()=> console.log('hice click en itemListcontainer')}>
          <main>
          <h1>{greeting}</h1>
           
          </main>
         </div> 
      )
      }  
      
    export default ItemListContainer
    

  /*DEL REPOSITORIO DEL PROFESOR 
  <ItemList products={products}/>
  */
  