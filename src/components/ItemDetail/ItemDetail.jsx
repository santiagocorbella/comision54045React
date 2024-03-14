import ItemCount from "../itemCount/itemCount"


const ItemDetail = ({ name, category, price, img, description, stock }) => { 
 return (
    <article>
        <img src={img} style={{ width: 100}}/>
        <h3 style={{color:'white'}}>{name}</h3>
        <h4 style={{color:'white'}} >Categoria: {category}</h4>
        <h4 style={{color:'white'}} >${price}</h4>
        <h4 style={{color:'white'}} >Descripcion: {description}</h4>
        <ItemCount stock={stock}/>
    </article>
   )
 }
 
 export default ItemDetail