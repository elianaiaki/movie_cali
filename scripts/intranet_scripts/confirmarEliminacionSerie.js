        function confirmarEliminacionSerie(){
            const confirmar = confirm("¿Está seguro que desea eliminar esta serie?");
            
            if(confirmar){
                alert("Serie eliminada correctamente");
                window.location.href = "../intranet/series_pendientes_de_revision_intra.html";
            }
        }