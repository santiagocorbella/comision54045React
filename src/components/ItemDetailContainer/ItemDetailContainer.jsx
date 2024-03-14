import {useState, useEffect } from "react"
import {getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(result => {
            setProduct(result)
        })
    }, [itemId])

    return (
        <main>
            <h3 style={{color:'white'}}>Detalle de producto</h3>
            <ItemDetail {...product}/>
        </main>
      )
    }
    
    export default ItemDetailContainer