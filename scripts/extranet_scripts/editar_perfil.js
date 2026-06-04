alert("JS conectado");

document.addEventListener("DOMContentLoaded",function(){

    const formulario=document.getElementById("formEditarPerfil");

    formulario.addEventListener("submit",function(evento){

        const usuario=document.getElementById("usuario").value.trim();
        const email=document.getElementById("email").value.trim();
        const contrasenia=document.getElementById("contrasenia").value.trim();
        const confirmarContrasenia=document.getElementById("confirmarContrasenia").value.trim();
        const biografia=document.getElementById("biografia").value.trim();

        if(usuario===""){
            alert("Debe ingresar un nombre de usuario.");
            evento.preventDefault();
            return;
        }

        if(!usuarioValido(usuario)){
            alert("El usuario debe tener entre 4 y 16 caracteres y solo puede contener letras, números y guion bajo.");
            evento.preventDefault();
            return;
        }

        if(email===""){
            alert("Debe ingresar un correo electrónico.");
            evento.preventDefault();
            return;
        }

        if(!correoValido(email)){
            alert("Debe ingresar un correo electrónico válido.");
            evento.preventDefault();
            return;
        }

        if(contrasenia===""){
            alert("Debe ingresar una contraseña.");
            evento.preventDefault();
            return;
        }

        if(!contraseniaValida(contrasenia)){
            alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.");
            evento.preventDefault();
            return;
        }

        if(confirmarContrasenia===""){
            alert("Debe confirmar la contraseña.");
            evento.preventDefault();
            return;
        }

        if(contrasenia!==confirmarContrasenia){
            alert("Las contraseñas no coinciden.");
            evento.preventDefault();
            return;
        }

        if(biografia.length>500){
            alert("La biografía no puede superar los 500 caracteres.");
            evento.preventDefault();
            return;
        }

        alert("Perfil actualizado correctamente.");
    });

});