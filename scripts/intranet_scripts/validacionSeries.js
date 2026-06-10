
        function asociarValidacion(){

            // Obtener formulario
            const formulario = document.getElementById("formAgregar");

            // Evento submit
            formulario.addEventListener("submit", function(event){

                // Frenar envío automático
                event.preventDefault();

                // Obtener valores
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
                    errores += "- Título inválido\n";
                }

                // Validar género
                if(!generoValido(genero)){
                    errores += "- Género inválido\n";
                }

                // Validar director
                if(!textoAlfabeticoValido(director)){
                    errores += "- Director inválido\n";
                }

                // Validar productor
                if(!textoAlfabeticoValido(productor)){
                    errores += "- Productor inválido\n";
                }

                // Validar sinopsis
                if(sinopsis.trim() === ""){
                    errores += "- Debe ingresar una sinopsis\n";
                }

                // Validar año de estreno
                if(!/^\d{4}$/.test(anioEstreno)){
                    errores += "- El año de estreno debe tener 4 dígitos\n";
                }

                // Validar duración
                if(!/^\d+\s*min$/i.test(duracion)){
                    errores += "- La duración debe tener formato 30 min\n";
                }

                // Validar calificación
                if(!/^\d+(\.\d+)?$/.test(calificacion)){

                    errores += "- La calificación general debe ser numérica\n";

                }else{

                    const nota = parseFloat(calificacion);

                    if(isNaN(nota) || nota < 0 || nota > 10){
                        errores += "- La calificación debe estar entre 0 y 10\n";
                    }

                }

                // Validar clasificación por edad
                if(!/^\+\d+$/.test(clasificacionEdad)){
                    errores += "- La clasificación por edad debe tener formato +13, +16 o +18\n";
                }

                // Validar actores
                if(nuevosActores !== "" &&
                !textoAlfabeticoValido(nuevosActores)){
                    errores += "- Nombre de actor inválido\n";
                }

                // Validar cantidad de temporadas
                if(!/^\d+$/.test(cantTemporadas)){
                    errores += "- La cantidad de temporadas debe ser numérica\n";
                }

                // Mostrar todos los errores juntos
                if(errores !== ""){
                    alert("Se encontraron los siguientes errores:\n\n" + errores);
                    return;
                }

                // Todo correcto
                alert("Serie agregada correctamente");

                // Enviar formulario
                formulario.submit();

            });

        }

        function limpiarFormulario(){

            if(confirm("¿Desea limpiar todos los campos?")){

                document.getElementById("formAgregar").reset();

            }

        }