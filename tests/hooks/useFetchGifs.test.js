/* eslint-disable no-undef */

import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


describe('Pruebas en el hook de useFetchGifs', () => { 
    
    test('Debe de regresar el estado inicial', () => { 
        
        const { result } = renderHook( () => useFetchGifs('One Punch') )
        // render hooks se utiliza para renderizar custom hooks y se puede desestructurar 3 elementos: result, rerender y unmount.
        // result sirve para obtener el valor retornado confirmado mas reciente de la devolución del renderizado.
        // rerender Representa la devolución de llamada de renderizado previamente con los nuevos accesorios.
        // console.log(result)
        const { images, isLoading } = result.current

        expect( images.length ).toBe(0)
        expect( isLoading ).toBeTruthy()
     });


    test('Debe de retornar un array de imagenes y isLoading = false', async() => { 
        
        const { result } = renderHook( () => useFetchGifs('One Punch') )

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        )
        // waitFor Es un metodo propio de react testing library, con el cual podemos indicar que debe de esperar por el resultado X evento para realizar las pruebas, por eso debemos añadir el async y await a la funcion del testing.
        // Lo que estamos indicando aqui es que debe esperar hasta que el length del resultado de la peticion de imagenes, sea mayor a 0.
        // Si no utilizaramos el waitFor, esta prueba fallaria, ya que con el indicamos el punto del customHook que queremos testear, de lo contrario, testeariamos el estado inicial simplemente, como en la prueba anterior. Y lo que buscamos en este test es evaluar el resultado una vez el customHook ya ha cambiado su estado inicial.

        const { images, isLoading } = result.current

        expect( images.length ).toBeGreaterThan(0)
        expect( isLoading ).toBeFalsy()

     });

 })