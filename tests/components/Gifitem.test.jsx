/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"



describe('Pruebas en GifItem', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'
    
    test('Debe de hacer match con el snapshot', () => { 
        
        const { container } = render( <GifItem  title={title} url={url} /> )
        expect( container ).toMatchSnapshot();
     });


     test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        
        render( <GifItem  title={title} url={url} /> )
        // screen.debug()
        // screen.debug() sirve para mostrar en consola lo que esta renderizando el render. (como una especie de console.log)

        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url )
        expect( alt ).toBe( title )

      })


      test('Debe de mostrar el titulo en el component', () => { 
        
        render( <GifItem  title={title} url={url} /> )
        expect( screen.getByText( title ) ).toBeTruthy()

       })

 })