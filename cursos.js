// Función para manejar la selección del curso y redirigir a la página correspondiente
function selectCourse(course) {
    let url = "";

    switch (course) {
        case '8vo':
            url = "seccion.html";
            break;
        case '9no':
            url = "seccion.html";
            break;
        case '10mo':
            url = "seccion.html";
            break;
        case '1FIP':
            url = "seccion.html";
            break;
        case '2FIP':
            url = "seccion.html";
            break;
        case '3FIP':
            url = "seccion.html";
            break;
        default:
            alert("Curso no disponible.");
            return;
    }

    // Redirigir a la página del curso seleccionado
    window.location.href = url;
}
