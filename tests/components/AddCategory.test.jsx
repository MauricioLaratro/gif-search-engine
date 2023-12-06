/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Pruebas en <AddCategory />', () => { 
    
    test('Debe de cambiar el valor de la caja de texto', () => { 
        
        render( <AddCategory onNewCategory={ () =>{} } /> )
        // renderizamos el componente y llamamos a la funcion requerida como una funcion vacia
        
        const input = screen.getByRole('textbox')
        // almacenamos el input del formulario para testear su funcionalidad (el Role del input es 'textbox')

        fireEvent.input( input, { target: { value: 'Saitama' } } )
        // Disparamos el evento input, que es el evento que se dispara cuando el usuario envia el input, y el input que esta dentro de los parentesis hacer referencia al elemento que almacenamos arriba. Luego como segundo argumento le pasamos la desestructuración del evento, solo lo que queremos obtener de el, que en este caso es el valor del target del evento ('Saitama')

        expect( input.value ).toBe('Saitama')
        // Por ultimo evaluamos que se espera que el valor de la constante input debe de ser Saitama.

        // Esto solo validara el test siempre y cuando, el input del form este actualizando su estado mediante el useState que tenemos en dicho componente, por eso si hay un problema que evita que se realice la funcion setInputValue que es la que cambia el valor del input. Entonces el test fallara y sabriamos que el problema es ese, ya que el value del input no se actualizara a 'Saitama' cuando intentemos disparar el evento con fireEvent.input

     });


     test('Debe de llamar a onNewCategorty() si el input tiene un valor', () => { 
        
        const inputValue = 'Saitama'
        const onNewCategory = jest.fn()
        // jest.fn() sirve para crear un Mock de una funcion, es decir una simulación de una funcion real, dentro del testing para poder evaluar sus resultados y funcionamiento.

        render( <AddCategory onNewCategory={ onNewCategory } /> )

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: inputValue } } )
        fireEvent.submit( form )

        expect( input.value ).toBe('')
        // luego de lanzar los eventos, indicamos que se espera que el valor del input, una vez añadida la nueva categoria, debe volver a ser un valor de string vacio.
      
        expect( onNewCategory ).toHaveBeenCalled();
        // toHaveBeenCalled Sirve para indicar que se espera que el Mock de nuestra funcion haya sido llamada al menos 1 vez
        
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        // toHaveBeenCalledTimes Sirve para indicar que se espera que el Mock de nuestra funcion haya sido llamada UNICAMENTE 1 vez
        
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
        // toHaveBeenCalledWith Sirve para indicar que se espera que el Mock de nuestra funcion haya sido llamada con el valor de nuestro inputValue, es decir con el valor que se introduzca en el input.
      });


      test('No debe de llamar el onNewCategory si el input esta vació', () => { 
        
        const onNewCategory = jest.fn()
        render( <AddCategory onNewCategory={ onNewCategory } /> )

        const form = screen.getByRole('form')
        fireEvent.submit( form )

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        // expect( onNewCategory ).not.toHaveBeenCalled() seria lo mismo que la validación de arriba pero utilizando la negación .not

        // No cambiamos el input porque por defecto si no asignamos 1, el string del input esta vacio.
       })

 })