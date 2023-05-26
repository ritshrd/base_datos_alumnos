// const crearAnimal = () => {
    function crearAnimal(){
        console.log("Dispara funcion");
        let nombre = document.querySelector("#nombre").value
        let foto = document.querySelector("#foto").value;
        let tipo = document.querySelector("#tipo").value;
    
        let animal;
    
        if(tipo == "Perro"){
            animal = new Perro(nombre, foto);
        }
        if(tipo == "Gato"){
            animal = new Gato(nombre, foto);
        }
    
        dibujar(animal);
    
        return animal;
    }
     
    function dibujar(animal){

        console.log(animal);
        document.querySelector("#animal").innerHTML= ` 
        <div class="card">
            <div class="card-image">
            <figure class="image is-4by3">
                <img src="${animal.foto}" alt="Placeholder image">
            </figure>
            </div>
            <div class="card-content">
            <div class="media">
                <div class="media-content">
                <p class="title is-4">${animal.nombre}</p>
                <p class="subtitle is-6">Perro o Gato</p>
                </div>
            </div>
            </div>
        </div>;`
    
    
    }
    
    document.querySelector("#boton").addEventListener("click", crearAnimal)