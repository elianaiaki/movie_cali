function asociarValidacion(){

            // Obtener formulario
            const formulario = document.getElementById("editar_perfil");

            // Evento submit
            formulario.addEventListener("submit", function(event){

                // Frenar envío automático
                event.preventDefault();

                // Obtener valores
                const nombre = document.getElementById("nombre").value;

                const apellido = document.getElementById("apellido").value;

                const correo = document.getElementById("correo").value;

                const identificador = document.getElementById("identificador").value;

                const contrasenia = document.getElementById("contrasenia").value;

                const repetirContrasenia = document.getElementById("repetirContrasenia").value;

                let errores = "";

                // Validar nombre
                if(!textoAlfabeticoValido(nombre)){
                    errores += "- Nombre inválido\n";
                }

                // Validar apellido
                if(!textoAlfabeticoValido(apellido)){
                    errores += "- Apellido inválido\n";
                }

                // Validar correo
                if(!correoValido(correo)){
                    errores += "- Correo inválido\n";
                }

                // Validar identificador
                if(!textoAlfanumericoValido(identificador)){
                    errores += "- ID inválido\n";
                }

                // Validar contraseña
                if(!contraseniaValida(contrasenia)){
                    errores += "- Contraseña inválida\n";
                }

                if(contrasenia !== repetirContrasenia){
                    errores += "- Las contraseñas no coinciden\n";
                }
                // Mostrar errores
                if(errores !== ""){
                    alert("Se encontraron los siguientes errores:\n\n" + errores);
                    return;
                }

                // Confirmación
                if(confirm("¿Desea guardar los cambios realizados?")){

                    alert("Perfil actualizado correctamente");

                    formulario.submit();

                }

            });

        }