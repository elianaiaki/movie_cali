function navegarMenu(selectElement) {
    // Obtenemos la URL guardada en el value de la opción seleccionada
    const url = selectElement.value;
    
    // Si la URL no está vacía, redirigimos al usuario
    if (url) {
        window.location.href = url;
    }
}