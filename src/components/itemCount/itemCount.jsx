  import { useState } from "react"

      const ItemCount = ({initial = 1, stock, onAdd }) => {
           const [ count, setCount ] = useState(initial)

           const decrement = () => {
               if(count > 1) {
                  setCount(prev => prev -1)
               }
           }
           
           const increment = () => {
            if(count < stock) {
                setCount(prev => prev + 1)
            }
           }
           
           return (
               <article>
                <h3 style={{ color:'red'}}>{count}</h3>
                <button onClick={decrement}>-</button>
                <button style={{ color:'red'}} onClick={() => onAdd(count)}>Agregar al carrito</button>
                <button onClick={increment}>+</button>
               </article>
           )

    } 
    export default ItemCount
     
        //EVENTOS:

        /*const ItemCount = ({ initialValue = 1, stock, onAdd}) => {
            const[count, setCount] = useState(initialValue)

            const decrement = () => {
                if(count > 1) {
                    setCount(count => count -1)
                }
            }
            
            const increment = () => {
                if(count < stock) {
                    setCount(prev => prev + 1)
                }
        }
        
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={decrement}>Decrementar</button>
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
                <button onClick={increment}>Incrementar</button>
            </div>
        )
    }       
            
        export default ItemCount
        */
    // Fin del ejemplo de eventos
