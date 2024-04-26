
//creo un array para los estudiantes
const estudiantes = [];

//función para crear estudiantes con la selección de cursos
function crearEstudiante() {

    //creo objeto estudiante
    const estudiante = {
        nombre: document.getElementById("nombre").value,
        cursosEst: [],

        //función para rellenar un array de cursos de un estudiante
        asignarCursos: function () {
            //creo array de cursos
            const listaCursos = ["lenguajeMarcas", "programacion", "sistemasInformaticos", "entorno", "baseDatos", "fol"];

            //recorro cada checkbox de cursos
            for (let i = 0; i < listaCursos.length; i++) {

                //cojo el elemento de la lista curso por el que estoy pasando
                const checkbox = document.getElementById(listaCursos[i]);


                if (checkbox.checked) {
                    this.cursosEst.push(checkbox.value);
                }

            }
        }


    };

    //asigno los cursos al nuevo estudiante
    estudiante.asignarCursos();

    //añado el nuevo estudiante al array
    estudiantes.push(estudiante);

    //borro el campo nombre
    document.getElementById("nombre").value = "";

    //desmarco las casillas
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);

    alert("Estudiante agregado correctamente");

}

//mostrar los estudiantes en una nueva ventana  -->  esto lo busque por internet porque me resultaba interesante
function mostrarEstudiantes() {
    //abro una nueva ventana
    let ventanaEstudiantes = window.open('', 'ventanaEstudiantes', 'fullscreen=yes');

    //voy escribiendo todo el contenido HTML en la nueva ventana
    ventanaEstudiantes.document.write('<html><head><title>Estudiantes Guardados</title>');
    ventanaEstudiantes.document.write('<link rel="stylesheet" type="text/css" href="registroEstudiantes.css">');
    ventanaEstudiantes.document.write('</head><body>');
    ventanaEstudiantes.document.write('<div class="whiteBox" id="box2"><h1 class="greenFont">Estudiantes Guardados</h1>');
    ventanaEstudiantes.document.write('<ul>');

    //voy mostrando cada estudiante (similar al metodo original que he dejado comentado más abajo, pero usando como un hashMap)
    estudiantes.forEach((estudiante, index) => {
        ventanaEstudiantes.document.write(`<li><h3>ESTUDIANTE ${index + 1}:</h3>`);
        ventanaEstudiantes.document.write(`<font> · Nombre:</font> ${estudiante.nombre}<br>`);
        ventanaEstudiantes.document.write(`<font> · Cursos:</font> ${estudiante.cursosEst.join(", ")}<br><br></li>`);
    });

    //cierro las etiquetas HTML
    ventanaEstudiantes.document.write('</ul></div></body></html>');

    //cierra el documento
    ventanaEstudiantes.document.close();

        //así consigo que la ventana se cierre a los 10 segundos
        setTimeout(function() {
            ventanaEstudiantes.close();
        }, 10000);

}



// Función para mostrar los estudiantes en el HTML ---> ORIGINAL, PERO ME GUSTÓ MÁS LA IDEA DE ARRIBA
// function mostrarEstudiantes() {
//     const listaEstudiantes = document.getElementById("listaEstudiantes");

//     // Limpiar lista antes de agregar estudiantes
//     listaEstudiantes.innerHTML = "";

//     //recorro el array de estudiantes y agregar cada uno a la lista
//     for (let i = 0; i < estudiantes.length; i++) {
//         //creo un elemento li para cada estudiante guardado
//         const listItem = document.createElement("li");

//         //cada una de esas li va a contener esta información:
//         listItem.innerHTML  = `<h3>ESTUDIANTE ${(i+1)}:</h3><font> · Nombre:</font> ${estudiantes[i].nombre}<br><font> · Cursos:</font> ${estudiantes[i].cursosEst.join(", ")}<br><br>`;
        
//         //con esto agregamos este elemento li a nuestro ul "listaEstudiantes"
//         listaEstudiantes.appendChild(listItem);
        
//     }
// }

