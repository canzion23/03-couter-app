import React from 'react'
import { shallow } from 'enzyme'

import PrimeraApp from "../PrimeraApp";


describe('Pruebas en <PrimeraApp />', () => {
    

    // test('debe de mostrar el mensaje "Hola, Soy Goku" ', () => {
        // const saludo = "Hola, soy Goku";
        // // const wrapper = render( <PrimeraApp saludo = { saludo } />);   
        // const { getByText } = render( <PrimeraApp saludo = { saludo } />);

        // // eslint-disable-next-line testing-library/prefer-screen-queries
        // expect( getByText( saludo )).toBeInTheDocument();
    // })

    test('Debe de mostar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, soy Goku';
        const wrapper = shallow( <PrimeraApp saludo = { saludo} /> );

        expect(wrapper).toMatchSnapshot();
        
    })

    test('Debe de mostrar el subtitulo enviado por pros', () => {

        const saludo = 'Hola, soy Goku';
        const subTitulo = 'Hola soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subTitulo}
                />);

        const textoParrafo = wrapper.find('p').text();
        console.log( textoParrafo );

        expect( textoParrafo).toBe( subTitulo );
        
    })
    
    
})
