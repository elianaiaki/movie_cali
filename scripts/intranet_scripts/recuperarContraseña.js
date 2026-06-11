 function asociarValidacion(){

        const formulario = document.getElementById("recuperar_contrasenia");

            formulario.addEventListener("submit", function(event){

                event.preventDefault();

                const usuario = document.getElementById("usuario").value;

                const contrasenia = document.getElementById("contrasenia").value;

                const repetirContrasenia = document.getElementById("repetirContrasenia").value;

                let errores = "";

                if(!usuarioValido(usuario) && !correoValido(usuario)){
                    errores += "- Usuario o correo inválido\n";
                }

                if(!contraseniaValida(contrasenia)){
                    errores += "- Contraseña inválida\n";
                }

                if(contrasenia !== repetirContrasenia){
                    errores += "- Las contraseñas no coinciden\n";
                }

                if(errores !== ""){
                    alert("Se encontraron los siguientes errores:\n\n" + errores);
                    return;
                }

                alert("Contraseña actualizada correctamente");

                formulario.submit();

            });

        }

        window.addEventListener("load", asociarValidacion);