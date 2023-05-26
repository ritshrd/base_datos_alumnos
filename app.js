// const crearalumno = () => {
    let alumnos = [];
function crearAlumno(){
        console.log("Dispara funcion");
        let nombre = document.querySelector("#nombre").value
        let apellido = document.querySelector("#apellido").value;
        let edad = document.querySelector("#edad").value;
    
        let alumnoNuevo;
    
        if (nombre && apellido && edad) {
            alumnoNuevo = new Alumno(nombre, apellido, edad);
            agregar(alumnoNuevo);
        } else {
            alert("Please enter valid values for name, last name, and age.");
        }
         return alumnoNuevo;
    }
     
    function agregar(alumnoNuevo){

        console.log(alumnoNuevo);
        document.querySelector("#alumno").innerHTML= ` 
        <div class="card">
            <div class="card-content">
            <div class="media">
                <div class="media-content">
                <p class="title is-4">${alumnoNuevo.nombre}</p>
                <p class="title is-4">${alumnoNuevo.apellido}</p>
                <p class="title is-4">${alumnoNuevo.edad}</p>
                <p class="subtitle is-6">Alumno registrado</p>
                </div>
            </div>
            </div>
        </div>`;

            


  
  alumnoNuevo.guardar(alumnos);
  console.log(alumnos);

    
    
    
    }
    
    document.querySelector("#boton").addEventListener("click", crearAlumno)