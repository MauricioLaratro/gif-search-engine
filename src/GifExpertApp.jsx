import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dev' ]);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;
        // Esta condicional indica que si en las categorias actuales ya existe la misma categoria que estamos intentando añadir, que se termine la funcion aqui mismo y no agregue la categoria repetida.

        setCategories( [ newCategory, ...categories ] )
        // otra opcion para hacer lo mismo
        // setCategories( cat => [ ...cat, 'Valorant' ])
    }
    // Lo que estamos haciendo es añadir una nueva categoria 'Valorant' dentro de categories, por eso utilizamos el setCategories y dentro utilizamos el operador SPRED para generar una copia de categories y añadirle la nueva categoria de 'Valorant', sin mutar el estado inicial, ya que es un principio de React no mutar los estados, si no crear uno nuevo.

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory
            // setCategories={ setCategories }
            onNewCategory={ onAddCategory }
        />

        {
        categories.map( (category) => (
            <GifGrid
            key={ category }
            category={ category }
            />
            ))
            
        }
        
        {/* lo que hacemos en el fragmento de codigo anterior es utilizar el metodo map en el array categories y asignarle a cada elemento iterado dentro de ese array, un <li> mediante el arrow function, que a su vez pasa el "caregory" para renderizar los elementos iterados dentro de esos <li>, en este caso renderizariamos 1. One punch 2. Dragon Ball */}
            {/* Gif Item */}
    </>
  )
}


// LOS HOOKS NO PUEDEN ESTAR DENTRO DE CONDICIONALES!