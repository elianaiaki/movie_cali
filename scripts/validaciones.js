function usuarioValido(usuario) {

    // Entre 4 y 16 caracteres, letras, números y _
    const patrones = /^[a-zA-Z0-9_]{4,16}$/;

    // / / : indica que es una expresión regular (patrones)
    // ^ : inicio del texto
    // [a-z] : permite letras minúsculas
    // [A-Z] : permite letras mayúsculas
    // [0-9] : permite números
    // _ : permite guion bajo
    // {4,16} : mínimo 4 y máximo 16 caracteres
    // $ : final del texto

    return patrones.test(usuario);
} 

function correoValido(correo){

    // Formato básico de email
    const patrones = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // / / : expresión regular
    // ^ : inicio del texto
    // [^\s@] : cualquier carácter excepto espacio y @
    // + : uno o más caracteres
    // @ : obliga a tener arroba
    // \. : punto obligatorio
    // $ : final del texto

    return patrones.test(correo);
}

function contraseniaValida(contrasenia) {

    // Mínimo 8 caracteres, una mayúscula, una minúscula y un número
    const patrones = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    // / / : expresión regular
    // ^ : inicio del texto
    // (?=.*[a-z]) : debe tener al menos una minúscula
    // (?=.*[A-Z]) : debe tener al menos una mayúscula
    // (?=.*\d) : debe tener al menos un número
    // . : cualquier carácter
    // {8,} : mínimo 8 caracteres
    // $ : final del texto

    return patrones.test(contrasenia);
}

function textoAlfabeticoValido(texto){

    // Solo letras y espacios
    const patrones = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    // / / : expresión regular
    // ^ : inicio del texto
    // [A-Za-z] : letras mayúsculas y minúsculas
    // ÁÉÍÓÚáéíóúÑñ : permite letras con tilde y ñ
    // \s : permite espacios
    // + : uno o más caracteres
    // $ : final del texto

    return patrones.test(texto);
}

function textoAlfanumericoValido(texto){

    // Letras, números y espacios
    const patrones = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]+$/;

    // / / : expresión regular
    // ^ : inicio del texto
    // [A-Za-z] : letras
    // ÁÉÍÓÚáéíóúÑñ : letras con tilde y ñ
    // 0-9 : números
    // \s : espacios
    // + : uno o más caracteres
    // $ : final del texto

    return patrones.test(texto);
}

function numeroTelefonoValido(numero){

    // Permite +, números, espacios y guiones
    const patrones = /^\+?\d[\d\s-]{7,14}$/;

    // / / : expresión regular
    // ^ : inicio del texto
    // \+? : el + es opcional
    // \d : un número obligatorio al inicio
    // [\d\s-] : permite números, espacios y -
    // {7,14} : entre 7 y 14 caracteres
    // $ : final del texto

    return patrones.test(numero);
}

/* Valida géneros de series o películas.

   Permite:
   - Letras mayúsculas y minúsculas.
   - Letras con tilde y la letra ñ.
   - Espacios.
   - Comas para separar géneros.
   - Guiones y barras para géneros compuestos.

   Ejemplos válidos:
   Comedia
   Comedia, Drama
   Acción / Aventura
   Ciencia-Ficción
*/
function generoValido(texto){

    const patron =
    /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s,\-\/]+$/;

    /* Valida géneros de series o películas.

   Expresión regular:
   ^ : inicio del texto
   [A-Za-z] : letras mayúsculas y minúsculas
   ÁÉÍÓÚáéíóúÑñ : letras acentuadas y ñ
   \s : espacios
   , : comas
   \- : guiones
   \/ : barras
   + : uno o más caracteres
   $ : final del texto
*/

    return patron.test(texto);
} 