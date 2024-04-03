import Item from "../Item/Item"

const ItemList = ({ products }) => {
console.log(products)


    return (
<div style={{ display: 'flex', flexDirection:'column'}} onClick={() => console.log('hice click en itemList')}>
     {
      <section style={{color:'white'}}>
        {
            products.map(product => {
              return <Item key={product.id} {...product}/>
            })
        } 
       </section>
      }     
     </div> 
     )
  }
  
  export default ItemList               
        
        
          
             
                   
          

          
        
    


