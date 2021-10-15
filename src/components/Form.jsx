import React from "react";
import useForm from "../hooks/useForm";
import './../style/Form.css';


const Form = ( {handleAdd} ) => {

    const [ values, handleInputChange, reset ] = useForm( {
        producto: '',
        precio: 0,
        descripcion: ''
    });

    const { producto, precio, descripcion } = values;

    const handleSubmit = ( e ) => {
        e.preventDefault();
        handleAdd( values );
        reset();
    }
    

    return(
        <form className="formulario"
            onSubmit={ handleSubmit }
        >
            <input 
                type="text"
                name="producto"
                value={ producto }
                onChange={ handleInputChange }
            />

            <input 
                type="number"
                name="precio"
                value={ precio }
                onChange={ handleInputChange }
            />

            <input 
                type="text"
                name= "descripcion"
                value= { descripcion }
                onChange={ handleInputChange }
            />

            <input 
                type="submit" 
                value="Añadir" 
                
            />
        </form>
    );

}

export default Form;

