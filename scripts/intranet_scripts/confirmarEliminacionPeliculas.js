        function confirmarEliminacion(){
            const confirmar = confirm("¿Está seguro que desea eliminar esta pelicula?");
            
            if(confirmar){
                alert("Película eliminada correctamente");
                // window.location.href = "../intranet/peliculas_pendientes_de_revision.html";
                window.location.href = "../intranet/peliculas_pendientes_de_revision.html";
            }
        }