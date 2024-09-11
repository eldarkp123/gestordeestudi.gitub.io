let estudiantes = [];
let materiaActual = "";
let deberActual = "";
let seccionActual = "";

// Función para asignar un deber a una materia
function asignarDeber(materia) {
    materiaActual = materia;
    document.getElementById("materia-seleccionada").innerText = "Asignar deber a " + materia;
    document.getElementById("modal-deber").style.display = "flex";
}

// Función para cerrar el modal de deber
function cerrarModal() {
    document.getElementById("modal-deber").style.display = "none";
}

// Función para guardar el deber y cerrar el modal
function guardarDeber() {
    deberActual = document.getElementById("deber-input").value;
    cerrarModal();
}

// Función para seleccionar la sección
function seleccionarSeccion(seccion) {
    seccionActual = seccion;
}

// Función para agregar estudiantes a la lista
function agregarEstudiante() {
    const nombre = document.getElementById("nombre").value;

    if (!nombre || !materiaActual || !deberActual || !seccionActual) {
        alert("Por favor, completa todos los campos");
        return;
    }

    const estudiante = {
        nombre: nombre,
        materia: materiaActual,
        deber: deberActual,
        seccion: seccionActual
    };

    estudiantes.push(estudiante);
    mostrarEstudiantes();
    
    // Limpiar los campos
    document.getElementById("nombre").value = '';
    materiaActual = '';
    deberActual = '';
    seccionActual = '';
}

// Función para mostrar la lista de estudiantes agregados
function mostrarEstudiantes() {
    const lista = document.getElementById("lista-estudiantes");
    lista.innerHTML = "";

    estudiantes.forEach(estudiante => {
        const li = document.createElement("li");
        li.textContent = `${estudiante.nombre} | Materia: ${estudiante.materia} | Deber: ${estudiante.deber} | Sección: ${estudiante.seccion}`;
        lista.appendChild(li);
    });
}