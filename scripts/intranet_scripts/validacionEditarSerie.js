function asociarValidacion(){

        const formulario = document.getElementById("formAgregar");

        formulario.addEventListener("submit", function(event){

            event.preventDefault();

            const titulo = document.getElementById("titulo_serie").value;
            const genero = document.getElementById("genero_serie").value;
            const director = document.getElementById("director").value;
            const productor = document.getElementById("productor_serie").value;
            const sinopsis = document.getElementById("sinopsis").value;
            const anioEstreno = document.getElementById("anio_estreno").value;
            const duracion = document.getElementById("duracion_serie").value;
            const calificacion = document.getElementById("calificacion_serie").value;
            const clasificacionEdad = document.getElementById("clasificacion_edad").value;
            const nuevosActores = document.getElementById("nuevos_actores").value;
            const cantTemporadas = document.getElementById("cantidad_temporadas").value;

            let errores = "";

            // Validar título
            if(!textoAlfanumericoValido(titulo)){
                errores += "- El título es inválido.\n";
            }

            // Validar género
            if(!generoValido(genero)){
                errores += "- El género es inválido.\n";
            }

            // Validar director
            if(!textoAlfabeticoValido(director)){
                errores += "- El director es inválido.\n";
            }

            // Validar productor
            if(!textoAlfabeticoValido(productor)){
                errores += "- El productor es inválido.\n";
            }

            // Validar sinopsis
            if(sinopsis.trim() === ""){
                errores += "- Debe ingresar una sinopsis.\n";
            }

            // Validar año de estreno
            if(!/^\d{4}$/.test(anioEstreno)){
                errores += "- El año de estreno debe tener 4 dígitos.\n";
            }

            // Validar duración
            if(!/^\d+\s*min$/i.test(duracion)){
                errores += "- La duración debe tener formato 30 min.\n";
            }

            // Validar calificación numérica
            if(!/^\d+(\.\d+)?$/.test(calificacion)){
                errores += "- La calificación general debe ser numérica.\n";
            }else{

                const nota = parseFloat(calificacion);

                if(isNaN(nota) || nota < 0 || nota > 10){
                    errores += "- La calificación debe estar entre 0 y 10.\n";
                }

            }

            // Validar clasificación por edad
            if(!/^\+\d+$/.test(clasificacionEdad)){
                errores += "- La clasificación por edad debe tener formato +13, +16 o +18.\n";
            }

            // Validar nuevos actores
            if(nuevosActores !== "" && !textoAlfabeticoValido(nuevosActores)){
                errores += "- El nombre del nuevo actor es inválido.\n";
            }

            // Validar cantidad de temporadas
            if(!/^\d+$/.test(cantTemporadas)){
                errores += "- La cantidad de temporadas debe ser numérica.\n";
            }

            // Mostrar errores
            if(errores !== ""){
                alert("Se encontraron los siguientes errores:\n\n" + errores);
                return;
            }

            alert("Serie editada correctamente");

            formulario.submit();

        });

    }

    function limpiarFormulario(){

        if(confirm("¿Desea limpiar todos los campos?")){
            document.getElementById("formAgregar").reset();
        }

    }