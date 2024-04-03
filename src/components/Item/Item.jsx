import { Link } from "react-router-dom"

const Item = ({ id, name, category, price, img}) => {

  const handleClick = (e) => {
    e.stopPropagation()
      console.log('hice click en item')
  }    
  return (
   <div onClick={handleClick}>
    <article>
         <h4>categoria: {category}</h4>
         <h3>{name}</h3>
         <img src={img} style={{width:100}}/>
         <h4>${price}</h4>
         <Link to={`/item/${id}`}>ver detalle</Link>
    </article>
   </div> 
  )                
} 

export default Item