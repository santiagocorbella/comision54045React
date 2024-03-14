import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
      <section style={{color:'white'}}>
        {
            products.map(product => {
              return <Item key={product.id} {...product}/>
            })
        } 
       </section>
     )
  }
  export default ItemList               
        
        
          
             
                   
          

          
        
    


