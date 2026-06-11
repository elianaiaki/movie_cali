 function confirmarEliminacionPerfil(){
            const confirmar = confirm("¿Está seguro que desea eliminar este perfil?");
            
            if(confirmar){
                alert("Perfil eliminado correctamente");
                window.location.href = "../intranet/gestion_de_perfil_roles.html";
            }
        }