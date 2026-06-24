        function confirmarEliminacionSerie(){
            const confirmar = confirm("Confirme para Eliminar definitivamente");
            
            if(confirmar){
                alert("Serie eliminada correctamente");
                window.location.href = "../intranet/series_en_revision.html";
            }
        }