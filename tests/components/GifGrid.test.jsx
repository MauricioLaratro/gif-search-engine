/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')
// mock completo del path que le pasemos


describe('Pruebas en el componente <GifGrid/>', () => { 
    
    const category = 'Dev'

    test('Debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        // simulacion del retorno de la funcion de useFetchGifs al utilizar el mock general (Cuando aun no se cargan las imagenes)
        
        render( <GifGrid category={ category } /> )
        expect( screen.getByTestId('loader') )
        expect( screen.getByText( category ) )

     });


     test('Debe de mostrar items cuando se cargan las imágenes mediante el useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Dev',
                URL: 'https://localhost/dev.jpj'
            },
            {
                id: '123',
                title: 'Web Design',
                URL: 'https://localhost/web-design.jpj'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={ category } /> )

        expect( screen.getAllByRole('img').length ).toBe(2)

     })

 })