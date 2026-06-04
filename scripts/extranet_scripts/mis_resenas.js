// Abrir modal al click en "VER DETALLES"
document.querySelectorAll(".boton-ver-detalles").forEach(function(btn) {
    btn.addEventListener("click", function() {
        document.getElementById("modalDetalle").style.display = "flex";
    });
});

// Cerrar modal al click en "X Cerrar"
document.getElementById("botonCerrarDetalle").addEventListener("click", function() {
    document.getElementById("modalDetalle").style.display = "none";
});

// Abrir modal editar desde el botón dentro del modal detalle
document.getElementById("botonAbrirEditar").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("modalDetalle").style.display = "none";
    document.getElementById("modalEditar").style.display = "flex";
});

// Cerrar modal editar con X
document.getElementById("botonCerrarEditar").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("modalEditar").style.display = "none";
});

// Cancelar también cierra
document.getElementById("botonCancelarEditar").addEventListener("click", function() {
    document.getElementById("modalEditar").style.display = "none";
});