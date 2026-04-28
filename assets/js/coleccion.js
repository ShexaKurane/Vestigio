export class Coleccion {
    static async create(src) {
        try {
            const response = await fetch(src);
            const data = await response.json();
            const coleccion = new Coleccion(data.coleccion);
            return coleccion;
        } catch (err) {
            console.error(err);
            document.getElementById('content').textContent = 'Error loading data';
        }
    }

    constructor(data) {
        this.nombre = data.nombre;
        this.descripcion = data.descripcion;
        this.ubicacion = data.ubicacion;
        this.año = data.año;
        this.notas = data.notas;
        this.propiedadDe = data.propiedadDe;
        this.piezas = data.piezas;
    }
}
