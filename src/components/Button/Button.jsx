/*const Button = (props) => {
    console.log(props)
    return <button  
    onClick={props.callback}
    style={{ background: props.background,color: props.textColor }}
    className={props.className}>{props.label}
    {props.text}
    </button>
} 

export default Butto*/


    //useEffect(() => {
     // console.log(buttonRef)
     // const boton = buttonRef.current

     //const handleClick = () => console.log('hice click')

     // boton.addEventListener('click', handleClick)

     //return () => {
    //boton.removeEventListener('click', handleClick)
    //    }    
        
    //},[])

    //EVENTOS:
import {useEffect, useRef } from "react"

const Button = () => {
const buttonRef = useRef()

    
    const handleClick = (e) => {
        console.log(e) 
    }

    console.log(buttonRef)
    return (
        <button ref={buttonRef} onClick={handleClick}>boton</button>
    )
}

export default Button