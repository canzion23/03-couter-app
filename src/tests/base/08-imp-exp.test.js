import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('Pruebas en retorno de Héroes', () => {
  test('debe de retornar un héroe por id', () => {
    const id = 1;

    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test('debe de retornar un undefined si el Héroe no existe', () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  // Tarea
  // debe de retornar un arreglo con los héroes de DC
  

  test('Debe de regresar un arreglo con los héroes de DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    
    // toEqual al arreglo filtrado
    const heroesData = heroes.filter((h) => h.owner === owner);

    expect(heroes).toEqual(heroesData);
  });

  // debe de retornar un arreglo con 2 héroes de Marvel
  // length = 2 // toBe()

  test('debe de retornar un arreglo con 2 héroes de Marvel ', () => {
    const cantidad = 2;
    const heroes = getHeroesByOwner('Marvel');

    expect(heroes.length).toBe(cantidad);
  });
  


})
