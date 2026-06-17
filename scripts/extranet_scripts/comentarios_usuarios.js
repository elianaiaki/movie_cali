

/* ==========================
   ASOCIAR EVENTOS
========================== */
function asociarEventos() {

    // Abrir modal de reseña
    document.getElementById("abrirModalResena")
            .addEventListener("click", abrirModal);

    // Abrir comentarios
    document.querySelector(".abrir-comentarios")
            .addEventListener("click", abrirComentarios);

}

/* ==========================
   ABRIR MODAL RESEÑA
========================== */
function abrirModal(evento) {

    evento.preventDefault();

    document.getElementById("modalResena").style.display = "flex";

}

/* ==========================
   CERRAR MODAL RESEÑA
========================== */
function cerrarModal() {

    document.getElementById("modalResena").style.display = "none";

}

/* ==========================
   ABRIR COMENTARIOS
========================== */
function abrirComentarios(evento) {

    evento.preventDefault();

    document.querySelector(".comentarios").style.display = "block";

}

/* ==========================
   CERRAR COMENTARIOS
========================== */
function cerrarComentarios() {

    document.querySelector(".comentarios").style.display = "none";

}