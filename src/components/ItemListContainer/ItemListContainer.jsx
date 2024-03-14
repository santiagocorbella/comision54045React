import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

 const ItemListContainer = ({greeting }) => {
    const[products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
           .then(result => {
            setProducts(result)
           })
           .catch(error => {
                console.log(error)
           })    
           .finally(() => {
               setLoading(false)
           })   
        },[categoryId])       

        if(loading) {
            return  <h4 style={{ color: 'orange'}}>Cargando listado de productos...</h4>
        }

        return (
         <main>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
         </main>
      )
    }
    
    export default ItemListContainer