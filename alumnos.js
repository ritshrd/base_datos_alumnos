//prototipo alumno
 function Alumno(nombre, apellido, edad, materias, calificaciones) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.materias = materias;
    this.calificaciones = calificaciones;
};


//PRUEBA 
/*
class Alumno {
    constructor(nombre = '', apellido = '', edad = 0, materias = [], calificaciones = []) {
        if (typeof nombre !== 'string' || typeof apellido !== 'string' || typeof edad !== 'number') {
            throw new Error('Invalid input data');
        }
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.materias = materias;
        this.calificaciones = calificaciones;
    }
}*/


// Creación de instancias del prototipo
    let alumno1 = new Alumno("Juan", "Pérez", 20, ["Matemáticas", "Historia"], [5, 8]);
    let alumno2 = new Alumno("Dario", "Garzon", 25, ["Fisica"], [7]);
    let alumno3 = new Alumno("Ricardo", "Zubel", 30, ["Ingles", "Computacion"], [7, 6]);
    let alumno4 = new Alumno("Fernanda", "Memu", 35, ["Ingles", "Quimica"], [9, 6]);

    console.log(alumno1);

    Alumno.prototype.guardar = function(array) {
        array.push(this);
      }