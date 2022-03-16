import { getImagen } from '../../base/11-async-await';



describe('Pruebas con Async-await y Fetch', () => {
    
    test('debe de retornar el url de la imagen', async() => {

        const url = await getImagen();
        // console.log("test /- url", url);

        // expect( typeof url ).toBe('string');|
        expect( url.includes('https://') ).toBe(true); // para forzar el error en la prueba (cambiando el apiKey)
        

        

    
    })
    
})



