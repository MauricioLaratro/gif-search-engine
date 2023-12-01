import PropTypes from 'prop-types';
import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    // const onInputChange = (event) => {
    const onInputChange = ({ target }) => {
        setInputValue( target.value )
        // setInputValue( event.target.value )
    }

    const onSubmit = (event) => {
        event.preventDefault()

        if( inputValue.trim().length < 1 ) return;
        // En este if limpiamo de espacios en blanco al inicio y el final del inputValue con .trim() y le indicamos de que si el length de inputValue limpio, es menor a 1 que se termine la funcion en ese momento con el return y no ejecute lo siguiente. Con esto conseguimos que si se intenta enviar el input vacio, no se añada un nuevo list item vacio en la lista.

        onNewCategory( inputValue.trim() )

        // setCategories( (categories) => [ inputValue, ...categories ] )
        // debemos utilizar ese arrow function de callback para poder iterar categories y poder llamar a su desestructuración de ...categories, para poder mentener los elementos que ya estaban en la lista y no mutar el estado inicial.
        
        setInputValue('')
        // Definimos nuestro setInputValue, como un string vacio, solo una vez que se termine de ejecutar toda la funcion. Para conseguir que se vacie el input al agregar de manera exitosa un elemento a la lista.
    }

  return (
    <form action="" onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}

// El componente padre que es el GifExpertApp nos pasa por medio de las propertis lo siguiente: onNewCategory={ onAddCategory }
// Este componente solamente se encarga de establecer el value con lo que escribimos en el input y pasarselo al padre por medio del "onNewCategory", Con las validaciones correspondientes, pero no lo renderiza, ni añade el nuevo item a la lista
// Luego el componente padre se encarga de añadir, ese nuevo valor que le envio este componente, al listado. Utilizando setCategories( [ newCategory, ...categories ] ) dentro de la funcion "onAddCategory"

AddCategory.propTypes = {
    onNewCategory: PropTypes.any.isRequired,
  }