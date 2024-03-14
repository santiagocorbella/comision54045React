import { useState } from "react"

const withFormValidation =  (wrappedComponent) => {

    const WithFormValidation= (props) => {
        const [errors, setErrors] = useState({})

        const validateForm = () => {
            const newErrors = {};
            if(!props.formData.nombre) {
                newErrors.nombre = 'El nombre es requerido'
            }
            if(!props.formData.email) {
                newErrors.email = 'El email es requerido' 
            }
            
             setErrors(newErrors)
        }
        return (
            <wrappedComponent
            {...props}
            errors={errors}
            validateForm={validateForm}
            />
        )           
    }
    return withFormValidation
}
   
const Form = ({ formData, onChange, errors, validateForm}) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        validateForm && validateForm();
} 

return (
    <form onSubmit={handleSubmit}>
         <div>
             <label>nombre:</label>
    <input type= "text" name="nombre" value={formData.nombre} onChange={(e) => onChange} />
    {errors && errors.nombre && <div>{errors.nombre}</div>}
         </div>
         <div>
             <label>Email:</label>
    <input type="email" name="email" value={formData.email} onChange={(e) => onChange(e)}/>
    {errors && errors.email && <div>{errors.email}</div>}
         </div>
         <button type="submit">Enviar</button>
        </form>
        
  ) 
}     
const FormWithValidation = withFormValidation(Form)

const FormWithValidationHOC = () => {
  const[formData, setFormData] = useState({
        nombre: '',
        email: '',
    })
}
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
}

export default FormWithValidationHOC 
    

    

       
          


