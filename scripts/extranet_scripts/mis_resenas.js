alert("JS conectado");

/* ==========================
   ASOCIAR EVENTOS
========================== */
function asociarEventos() {

    document.getElementById("botonVerDetalles").addEventListener("click", abrirDetalle);
    document.getElementById("botonCerrarDetalle").addEventListener("click", cerrarDetalle);
    document.getElementById("botonAbrirEditar").addEventListener("click", abrirEditar);
    document.getElementById("botonCerrarEditar").addEventListener("click", cerrarEditar);
    document.getElementById("botonCancelarEditar").addEventListener("click", cerrarEditar);

}

/* ==========================
   ABRIR MODAL DETALLE
========================== */
function abrirDetalle(evento) {
    evento.preventDefault();
    document.getElementById("modalDetalle").style.display = "flex";

}

/* ==========================
   CERRAR MODAL DETALLE
========================== */
function cerrarDetalle(evento) {
    evento.preventDefault();
    document.getElementById("modalDetalle").style.display = "none";

}

/* ==========================
   ABRIR MODAL EDITAR
========================== */
function abrirEditar(evento) {

    alert("Editar funciona");

    evento.preventDefault();
    document.getElementById("modalDetalle").style.display = "none";
    document.getElementById("modalEditar").style.display = "flex";

}

/* ==========================
   CERRAR MODAL EDITAR
========================== */
function cerrarEditar() {
    document.getElementById("modalEditar").style.display = "none";

}