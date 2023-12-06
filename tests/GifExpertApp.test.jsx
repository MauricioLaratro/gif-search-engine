/* eslint-disable no-undef */

import { fireEvent, render, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'


describe('Pruebas en <GifExpertApp/>', () => { 
    
    test('Debe de añadir una nueva categoria solo en el caso de no exista ya en el componente', () => { 

        const newCategory = 'Saitama'
        
        render(<GifExpertApp />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: {newCategory} } } )
        fireEvent.submit( form )
        
        fireEvent.input( input, { target: { value: {newCategory} } } )
        fireEvent.submit( form )
        // Lanzamos el mismo evento 2 veces para simular que se intento añadir 2 veces la misma categoria
        
        expect( screen.getByText({newCategory}) ).toBeTruthy();
        // Testeamos si se añadio correctamente la nueva categoria
        expect( screen.getAllByText({newCategory}).length ).toBe(1);
        // Comprobamos que la categoria se añadio unicamente 1 vez, aunque intentamos añadir 2 veces la misma categoria, ya que no se deben poder añadir categorias repetidas.
     });





 })