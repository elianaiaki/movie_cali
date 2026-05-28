        // Obtener formulario
        const formulario = document.getElementById("iniciar_sesion");

        // Evento submit
        formulario.addEventListener("submit", function(event){

            // Frenar envío automático
            event.preventDefault();

            // Obtener valores
            const usuario = document.getElementById("usuario").value;

            const contrasenia = document.getElementById("contrasenia").value;

            // Validar usuario o correo
            if(
                !usuarioValido(usuario) &&
                !correoValido(usuario)
            ){

                alert("Usuario o correo inválido");

                return;
            }

            // Validar contraseña
            if(
                !contraseniaValida(contrasenia)
            ){

                alert("Contraseña inválida");

                return;
            }

            // Si todo está bien
            alert("Inicio de sesión correcto");

            // Enviar formulario manualmente
            formulario.submit();

        });