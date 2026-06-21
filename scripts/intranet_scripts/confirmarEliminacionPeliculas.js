        function confirmarEliminacion(){
            const confirmar = confirm("Confirme para Eliminar definitivamente");
            
            if(confirmar){
                alert("Película eliminada correctamente");
                // window.location.href = "../intranet/peliculas_pendientes_de_revision.html";
                window.location.href = "../intranet/peliculas_en_revision.html";
            }
        }