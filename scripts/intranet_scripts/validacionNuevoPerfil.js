function asociarValidacion(){

            const formulario = document.getElementById("formAgregar");

            formulario.addEventListener("submit", function(event){

                event.preventDefault();

                const nombre = document.getElementById("nombre").value;
                const apellido = document.getElementById("apellido").value;
                const correo = document.getElementById("correo").value;
                const identificador = document.getElementById("identificador").value;
                const contrasenia = document.getElementById("contrasenia").value;
                const repetirContrasenia = document.getElementById("repetirContrasenia").value;
                const celular = document.getElementById("celular").value;

                let errores = "";

                if(!textoAlfabeticoValido(nombre)){
                    errores += "- Nombre inválido\n";
                }

                if(!textoAlfabeticoValido(apellido)){
                    errores += "- Apellido inválido\n";
                }

                if(!correoValido(correo)){
                    errores += "- Correo inválido\n";
                }

                if(!textoAlfanumericoValido(identificador)){
                    errores += "- ID inválido\n";
                }

                if(!contraseniaValida(contrasenia)){
                    errores += "- Contraseña inválida\n";
                }

                if(contrasenia !== repetirContrasenia){
                    errores += "- Las contraseñas no coinciden\n";
                }

                if(!numeroTelefonoValido(celular)){
                    errores += "- Número de celular inválido\n";
                }

                if(errores !== ""){
                    alert("Se encontraron los siguientes errores:\n\n" + errores);
                    return;
                }

                alert("Perfil creado correctamente");

                formulario.submit();

            });

        }
