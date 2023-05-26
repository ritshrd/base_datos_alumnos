//prototipo alumno

class Animal{
    constructor(nombre, foto){
        this.nombre = nombre;
        this.foto = foto;
    }
    hablar(){
        return `El sonido del animal`;
    }
}

class Perro extends Animal{
    constructor(nombre, foto){
        super(nombre, foto)   
    }
    hablar(){
        return `Guau`;
    }
}

class Gato extends Animal{
    constructor(nombre){
        super(nombre, foto)   
    }
    hablar(){
        return `Miau`;
    }
}

class Perico extends Animal{
    constructor(nombre){
        super(nombre, foto)   
    }
    hablar(){
        return `Kakaww`;
    }
}