 /*confirm() muestra una ventana de confirmación con las opciones
         "Aceptar" y "Cancelar".
         
         alert() se utiliza para mostrar un mensaje emergente al usuario.
         En este caso informa que la acción solicitada fue realizada correctamente.
         También sirve para simular la respuesta del sistema en esta maqueta,
         ya que el proyecto no cuenta con una base de datos ni backend.*/

        function ignorarReporte(){
            if(confirm("¿Está seguro de ignorar este reporte?")){
                alert("Reporte ignorado correctamente");
            }
        }

        function sancionarUsuario(){
            if(confirm("¿Desea sancionar al usuario reportado?")){
                alert("Usuario sancionado correctamente");
            }
        }

        function eliminarResenia(){
            if(confirm("¿Está seguro de eliminar esta reseña?")){
                alert("Reseña eliminada correctamente");
            }
        }
       