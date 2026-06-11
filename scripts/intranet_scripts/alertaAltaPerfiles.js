// alert() muestra un mensaje informando que la acción
        // fue realizada correctamente.
        function darAlta(){
            if(confirm("¿Desea aprobar esta solicitud de alta?")){
                alert("Solicitud aprobada correctamente");
            }
        }

        function denegarSolicitud(){
            if(confirm("¿Desea denegar esta solicitud?")){
                alert("Solicitud denegada correctamente");
            }
        }

        function darBaja(){
            if(confirm("¿Está seguro de dar de baja este perfil?")){
                alert("Perfil dado de baja correctamente");
            }
        }
        