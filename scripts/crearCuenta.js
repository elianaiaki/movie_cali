function asociarValidacion(){
    const formulario = document.getElementById("crear_cuenta");

    formulario.addEventListener("submit", function(event){
        event.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const correo = document.getElementById("correo").value;
        const contrasenia = document.getElementById("contrasenia").value;
        const confirmarContrasenia = document.getElementById("confirmarContrasenia").value;

        let errores = "";

        if(!usuarioValido(usuario)){
            errores += "- Usuario inválido\n";
        }

        if(!correoValido(correo)){
            errores += "- Correo inválido\n";
        }

        if(!contraseniaValida(contrasenia)){
            errores += "- Contraseña inválida\n";
        }

        if(contrasenia !== confirmarContrasenia){
            errores += "- Las contraseñas no coinciden\n";
        }

        if(errores !== ""){
            alert("Se encontraron los siguientes errores:\n\n" + errores);
            return;
        }

        alert("Cuenta creada correctamente");
        formulario.submit();
    });
}