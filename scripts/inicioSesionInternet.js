function asociarValidacion(){
    const formulario = document.getElementById("inicio_de_sesion");

    formulario.addEventListener("submit", function(event){
        event.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const contrasenia = document.getElementById("contrasenia").value;

        let errores = "";

        if(!usuarioValido(usuario) && !correoValido(usuario)){
            errores += "- Usuario o correo inválido\n";
        }

        if(!contraseniaValida(contrasenia)){
            errores += "- Contraseña inválida\n";
        }

        if(errores !== ""){
            alert("Se encontraron los siguientes errores:\n\n" + errores);
            return;
        }

        alert("Inicio de sesión correcto");
        formulario.submit();
    });
}