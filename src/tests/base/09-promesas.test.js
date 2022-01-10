
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';


describe('Prueba con promesas', () => {

    test('getHeroeByIdAsync debe de retornar un Héroe Async', ( done ) => {

        const id = 1;

        getHeroeByIdAsync( id )
        .then( heroe => {

            // expect( true ).toBe( true );
            expect( heroe ).toEqual( heroes[0] );
            done();

        })
    });
    
    test('debe de obtener un error si el héroe por id no existente', ( done ) => {
       
        const id = 10;
        getHeroeByIdAsync( id )
        .catch( error => {
            expect( error ).toBe( 'No se pudo encontrar el héroe');
            done();
        });
    });
})
