/* eslint-disable no-undef */
import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs()', () => { 
    
    test('Debe de retornar un array de gifs', async() => { 
        
        const gifs = await getGifs('Web Design')
        
        expect( gifs.length ).toBeGreaterThan( 0 );
        // toBeGreaterThan indica que el elemento testeado debe ser mayor al numero entre parentesis.
       
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
            // en este caso al evaluar la peticion de gifs, estamos testeando que lo que se recibe en la primer posicion (el primer gif). Debe tener las mismas propiedades de id, title y url. Y como no sabemos que valores tendran esos elementos del objeto, podemos utilizar expect.any( String ) que indica que se espera recibir cualquier String sin importar cual sea, pero debe de ser un string y debe existir, de lo contrario el test fallara.
        })

     })

 })