function asociarValidacion(){

        // Obtener formulario
        const formulario = document.getElementById("formAgregarActor");

        // Evento submit
        formulario.addEventListener("submit", function(event){

                // Frenar envío automático
                event.preventDefault();

                // Obtener valores
                const nombreActor = document.getElementById("nombre_actor").value;

                const apellidoActor = document.getElementById("apellido_actor").value;

                const nuevaParticipacionPelicula = document.getElementById("nueva_participacion_pelicula").value;

                const nuevaParticipacionSerie = document.getElementById("nueva_participacion_serie").value;

                let errores = "";

                // Validar nombre
                if(!textoAlfabeticoValido(nombreActor)){
                    errores += "- Nombre inválido\n";
                }

                // Validar apellido
                if(!textoAlfabeticoValido(apellidoActor)){
                    errores += "- Apellido inválido\n";
                }

                // Validar participación en película
                if(nuevaParticipacionPelicula !== "" &&
                !textoAlfanumericoValido(nuevaParticipacionPelicula)){
                    errores += "- Participación en película inválida\n";
                }

                // Validar participación en serie
                if(nuevaParticipacionSerie !== "" &&
                !textoAlfanumericoValido(nuevaParticipacionSerie)){
                    errores += "- Participación en serie inválida\n";
                }

                // Mostrar todos los errores juntos
                if(errores !== ""){
                    alert("Se encontraron los siguientes errores:\n\n" + errores);
                    return;
                }

                // Todo correcto
                alert("Actor agregado correctamente");

                // Enviar formulario
                formulario.submit();

            });

        }

        function limpiarFormulario(){

            if(confirm("¿Desea limpiar todos los campos?")){

                document.getElementById("formAgregarActor").reset();

            }

    }