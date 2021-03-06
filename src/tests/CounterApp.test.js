import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'


import CounterApp from '../CounterApp';

describe('pruebas en el componente CounterApp', () => {

    test('Debe de mostrar <CounterApp /> correctamente ', () => {

        const wrapper = shallow( <CounterApp /> );
        expect( wrapper ).toMatchSnapshot();
        
    });    

    test('Debe mostrar el valor por defecto de 100', () => {

        const wrapper = shallow(<CounterApp value={100} />);

        const counterText = wrapper.find('h2').text().trim();

        console.log(counterText);

        expect(counterText).toBe('100');
        
    })
    
    
});
