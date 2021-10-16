
describe('Pruebas en el archivo demo.test.js', () => {
    
    test('Deben de ser iguales los String', () => {
        
        // 1. Inicialización
        const mensaje = 'Hola mundo';
        
        // 2. estímulo
        const mensaje2 = `Hola mundo`;
        
        // 3. Observar el comportamiento 
        expect( mensaje ).toBe( mensaje2 ); // ===
        
    })
    
    
});