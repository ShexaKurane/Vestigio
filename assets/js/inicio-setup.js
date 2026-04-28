import { Coleccion } from './coleccion.js';
async function setup(src){
    let coleccion = await Coleccion.create(src);
    console.log(coleccion.nombre);
    document.getElementById('titulo').textContent = coleccion.nombre;
}

setup('/colecciones/CCP-fifa-2026.json');
