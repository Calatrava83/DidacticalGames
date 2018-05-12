$(document).ready(function () {
    //Estos arrays se iniciarian cuando se cargue el juego puesto que tanto las preguntas como las respuestas se cargan desde bDD//
    var imagenes = [];
    imagenes['feliz1'] = 'images/preguntasImagenes/feliz1.jpg';
    imagenes['feliz2'] = 'images/preguntasImagenes/feliz2.png';
    imagenes['feliz3'] = 'images/preguntasImagenes/feliz3.png';

    imagenes['contento1'] = "images/preguntasImagenes/contento1.jpg";
    imagenes['contento2'] = "images/preguntasImagenes/contento2.jpg";
    imagenes['contento3'] = "images/preguntasImagenes/contento3.jpg";

    imagenes['asco1'] = "images/preguntasImagenes/asco1.png";
    imagenes['asco2'] = "images/preguntasImagenes/asco2.png";
    imagenes['asco3'] = "images/preguntasImagenes/asco3.jpg";

    imagenes['ira1'] = "images/preguntasImagenes/ira1.jpg";
    imagenes['ira2'] = "images/preguntasImagenes/ira2.jpg";
    imagenes['ira3'] = "images/preguntasImagenes/ira3.jpg";

    imagenes['triste1'] = "images/preguntasImagenes/triste1.jpg";
    imagenes['triste2'] = "images/preguntasImagenes/triste2.jpg";
    imagenes['triste3'] = "images/preguntasImagenes/triste3.jpg";

    imagenes['miedo1'] = "images/preguntasImagenes/miedo1.jpg";
    imagenes['miedo2'] = "images/preguntasImagenes/miedo2.jpg";
    imagenes['miedo3'] = "images/preguntasImagenes/miedo3.png";

    imagenes['enfado1'] = "images/preguntasImagenes/enfado1.png";
    imagenes['enfado2'] = "images/preguntasImagenes/enfado2.jpg";
    imagenes['enfado3'] = "images/preguntasImagenes/enfado3.jpg";
    
    imagenes['deprimido1']="imagenes/preguntasImagenes/deprimido1.jpg";
    imagenes['deprimido2']="imagenes/preguntasImagenes/deprimido2.jpg";
    imagenes['deprimido3']="imagenes/preguntasImagenes/deprimido3.png";
    var preguntas = [];
    preguntas['feliz1'] = '¿Como ves la mujer y el bebe?';
    preguntas['feliz2'] = 'Reconoce a la persona que este feliz:';
    preguntas['feliz3'] = '¿Con que color identificas la felicidad?';

    preguntas['contento1'] = "Me Pongo contento cuando:";
    preguntas['contento2'] = "¿Cómo te sientes cuando ganas un juego?";
    preguntas['contento3'] = "¿Cómo me siento cuando ayudo a mi compañero/a?";

    preguntas['asco1'] = "¿Qué refleja este hombre?";
    preguntas['asco2'] = "¿Qué sientes cuando ves un bicho en tu plato?";
    preguntas['asco3'] = "¿Qué te produce mas asco?";

    preguntas['ira1'] = "¿Qué representa esta cara?";
    preguntas['ira2'] = "¿Qué frase identificas con la ira?";
    preguntas['ira3'] = "Me provoca ira cuando:";

    preguntas['triste1'] = "¿Con que frase indentificas la tristeza?";
    preguntas['triste2'] = "Al ver esta imagen, ¿Que sientes?";
    preguntas['triste3'] = "Cuando castigan a mi mejor amigo/a, ¿Cómo me siento?";

    preguntas['miedo1'] = "¿Cómo esta la niña?";
    preguntas['miedo2'] = "¿Por qué crees que se siente miedo?";
    preguntas['miedo3'] = "Di la accion que te produzca mas miedo";

    preguntas['enfado1'] = "Di que niño esta cabreado";
    preguntas['enfado2'] = "¿Que te hace sentir enfadado/a?";
    preguntas['enfado3'] = "Cuando alguien se enfada:";
    
    preguntas['deprimido1']="Como se siente el chico de la imagen";
    preguntas['deprimido2']="Cuando fracasas, ¿Qué sientes?";
    preguntas['deprimido3']="Identifica a la persona que esta decaida";
    var respuestas = [];
    respuestas['feliz1'] = 'op1';
    respuestas['feliz2'] = 'op1';
    respuestas['feliz3'] = 'op3';

    respuestas['contento1'] = 'op1';
    respuestas['contento2'] = 'op1';
    respuestas['contento3'] = 'op2';

    respuestas['asco1'] = "op4";
    respuestas['asco2'] = "op3";
    respuestas['asco3'] = "op3";

    respuestas['ira1'] = "op2";
    respuestas['ira2'] = "op1";
    respuestas['ira3'] = "op1";

    respuestas['triste1'] = "op4";
    respuestas['triste2'] = "op3";
    respuestas['triste3'] = "op2";

    respuestas['miedo1'] = "op1";
    respuestas['miedo2'] = "op2";
    respuestas['miedo3'] = "op2";

    respuestas['enfado1'] = "op4";
    respuestas['enfado2'] = "op2";
    respuestas['enfado3'] = "op1";
    
    respuestas['deprimido1']="op4";
    respuestas['deprimido2']="op1";
    respuestas['deprimido3']="op4";
    var posibles = [];
    posibles['feliz1'] = {
        'op1': 'felices',
        'op2': 'asustados',
        'op3': 'preocupados',
        'op4': 'tristes'
    };
    posibles['feliz2'] = {
        'op1': 'primera',
        'op2': 'segunda',
        'op3': 'tercera',
        'op4': 'cuarta'
    };
    posibles['feliz3'] = {
        'op1': 'Marron',
        'op2': 'Negro',
        'op3': 'Amarillo',
        'op4': 'Naranja'
    };

    posibles['contento1'] = {
        'op1': 'Juego con mis amigos',
        'op2': 'Mis amigos no me dejan jugar',
        'op3': 'Mis amigos no me hacen caso',
        'op4': 'Siempre pierdo en los juegos'
    };

    posibles['contento2'] = {
        'op1': 'Me siento contento',
        'op2': 'Me siento euforico',
        'op3': 'Me siento triste',
        'op4': 'Siento ira'
    };

    posibles['contento3'] = {
        'op1': 'Enfadado',
        'op2': 'Contento',
        'op3': 'Asqueado',
        'op4': 'Celoso'
    };

    posibles['asco1'] = {
        'op1': 'Ira',
        'op2': 'Amor',
        'op3': 'Tristeza',
        'op4': 'Asco'
    };
    posibles['asco2'] = {
        'op1': 'Miedo',
        'op2': 'Ira',
        'op3': 'Asco',
        'op4': 'Sorpresa'
    };
    posibles['asco3'] = {
        'op1': 'Olor a fruta',
        'op2': 'Olor a flores',
        'op3': 'Olor a basura',
        'op4': 'Olor a chuches'
    };

    posibles['ira1'] = {
        'op1': 'Furia',
        'op2': 'Ira',
        'op3': 'Miedo',
        'op4': 'Rencor'
    };
    posibles['ira2'] = {
        'op1': '¡Esto es intorelable!',
        'op2': 'Mi trabajo esta bien hecho',
        'op3': 'Mi equipo favorito ha ganado',
        'op4': 'He perdido mi juguete favorito'
    };

    posibles['ira3'] = {
        'op1': 'Hacen trampa',
        'op2': 'Me pegan',
        'op3': 'Me Felicitan',
        'op4': 'Me ayudan'
    };

    posibles['triste1'] = {
        'op1': '¿Compartimos el bocadillo?',
        'op2': 'Mi hermana esta mala',
        'op3': 'Me han regaldo un movil por mi cumple',
        'op4': '¿Por qué me tratan mal?'
    };

    posibles['triste2'] = {
        'op1': 'Soledad',
        'op2': 'Pena',
        'op3': 'Tristeza',
        'op4': 'Emocion'
    };
    posibles['triste3'] = {
        'op1': 'Cabreado/a',
        'op2': 'Triste',
        'op3': 'Feliz',
        'op4': 'Culpable'
    };

    posibles['miedo1'] = {
        'op1': 'Tiene miedo',
        'op2': 'Esta Feliz',
        'op3': 'Esta asqueada',
        'op4': 'Esta enfadada'
    };

    posibles['miedo2'] = {
        'op1': 'Por que te sientes en peligro',
        'op2': 'Por que alguien te amenaza',
        'op3': 'Por que llega el verano',
        'op4': 'Por que voy al campo a pasear'
    };

    posibles['miedo3'] = {
        'op1': 'Tirarte por un tobogan',
        'op2': 'Que te pique una avispa',
        'op3': 'Pintarte la cara',
        'op4': 'Halloween'
    };

    posibles['enfado1'] = {
        'op1': 'El Ultimo',
        'op2': 'El Tercero',
        'op3': 'El Primero',
        'op4': 'El Segundo'
    };

    posibles['enfado2'] = {
        'op1': 'Que te rompan un juego',
        'op2': 'Cuando me hacen algo aposta',
        'op3': 'Que no me pongan deberes',
        'op4': 'El ultimo dia de clase'
    };

    posibles['enfado3'] = {
        'op1': 'Frunce el ceño y se cruza de brazos',
        'op2': 'Da saltos de algeria',
        'op3': 'Se cruza de brazos',
        'op4': 'Escuchas tu cancion favorita'
    };
    
    posibles['deprimido1']={
        'op1': 'Alegre',
        'op2': 'Enfadado',
        'op3': 'Pensativo',
        'op4': 'Desanimado'
    };
    posibles['deprimido2']={
        'op1': 'Me siento desanimado',
        'op2': 'Pierdo el interes',
        'op3': 'Me siento afortunado',
        'op4': 'Siento tranquilidad'
    };
    posibles['deprimido3']={
        'op1': 'Primera',
        'op2': 'Segunda',
        'op3': 'Tercera',
        'op4': 'Ultima'
    };
    /*-------------VARIABLES RELACIONADAS CON EL JUGADOR--------------------*/
    var nombreJugador;
    var numPasados = 0;
    var tiempoNivel = 0;
    var preguntasAcertadas = 0;
    var preguntasFallidas = 0;

    function jugador(nombreJugador) {
        this.nombreJugador = nombreJugador;
        this.completado = 0;
        this.tiempoNiveles = [];
        this.aciertos = 0;
        this.falladas = 0;
        guardarTiempo = function (nivel, tiempo) {
            this.tiempoNiveles[nivel] = tiempo;
        };
    }

   // $('#user').click(mostrarJugador);



    /*-------INICALIZACION DE LAS VARIABLES GLOBALES------------------------ */
    var errores = [];

    var nivel = 1;
    var numPregunta = 1;
    var nivelPasado = false;

    var enunciado = $('#question');
    var indicadorNivel = $('#nivel');
    var tiempo = 100;
    var reducTiempo = 20;
    var idTiempo;
    //SONIDOS PARA EL JUEGO//
    var audioCorrecto = $('#acierto');
    var audioIncorrecto = $('#fail');


    /*****FUNCIONES PARA LOS DIALOGOS**************/ //
    function windowOK() {
        $('#dialog').dialog({
            dialogClass: "no-close",
            resizable: false,
            height: 'auto',
            width: 500,
            modal: true,
            buttons: {
                "Pasar al siguiente nivel": function () {
                    nivelPasado = true;
                    juego();
                    $(this).dialog("close");
                },
                "Salir": function () {
                    botonesRespuesta.off('onclick');
                    $(this).dialog("close");
                }
            }
        });
    }

    function windowFAIL() {
        $("#dialog_error").dialog({
            dialogClass: "no-close",
            resizable: false,
            height: 'auto',
            width: 400,
            modal: true,
            buttons: {
                "Reintentar": function () {
                    nivelPasado = false;
                    juego();
                    $(this).dialog("close");
                },
                "Salir": function () {
                    botonesRespuesta.off('onclick');
                    $(this).dialog("close");
                }
            }
        });
    }
    //******FUNCIONES RELACIONADAS CON EL TIEMPO EN LA PARTIDA***********//
    function correrTiempo() {
        if (tiempo == 0) {
            tiempo = 0;
        } else {
            tiempo--;
        }
        $('#tiempo').text(tiempo);
    }

    /******************FUNCIONES PARA LA ASIGNACION ******/ //
    var botonesRespuesta = $('.respuesta');
    var LIMITEboton = 5;
    var pregunta;
    var imagenPregunta = $('img');

    function asginacionPreguntaRespuesta(nivel) {
        switch (nivel) {
            case 1:
                pregunta = "feliz" + Math.floor((Math.random() * 3) + 1);
                break;
            case 2:
                pregunta = "contento" + Math.floor((Math.random() * 3) + 1);
                break;
            case 3:
                pregunta = "asco" + Math.floor((Math.random() * 3) + 1);
                break;
            case 4:
                pregunta = "ira" + Math.floor((Math.random() * 3) + 1);
                break;
            case 5:
                pregunta = "triste" + Math.floor((Math.random() * 3) + 1);
                break;
            case 6:
                pregunta = "miedo" + Math.floor((Math.random() * 3) + 1);
                break;
            case 7:
                pregunta = "deprimido" + Math.floor((Math.random() * 3) + 1);
                break;
            case 8:
                pregunta = "enfado" + Math.floor((Math.random() * 3) + 1);
                break;
                /*case 9:
                    pregunta = "varios" + Math.floor((Math.random() * 5) + 0);
                    break;*/
        }
        // pregunta = "feliz"+Math.floor((Math.random()*3)+1);
        var opciones = posibles[pregunta];

        enunciado.text(preguntas[pregunta]);
        //-----ASIGNACION DE RESPUESTAS A LOS BOTONES---------//
        var pos = Math.floor((Math.random() * 4) + 1);
        var opcionesBotones = false;

        for (var posBoton = 0; posBoton < 4; posBoton++) {
            //console.log(pos);
            if (pos == LIMITEboton) {
                pos = 1;

            }
            botonesRespuesta[posBoton].setAttribute('value', posibles[pregunta]['op' + pos]);
            botonesRespuesta[posBoton].setAttribute('name', 'op' + pos);
            pos++;
        }
    }

    function asginarImagen() {
        imagenPregunta.attr('src', imagenes[pregunta]);
    }

    //*-------------------FIN DE FUNCIONES DE ASIGNACION------------------------------*//



    //*----------------------FUNCIONES DE COMPROBACION---------------------------*//
    function comprobarRespuesta(event) {
        var allDisabled = false;
        var respuesta = this.name;
        clearInterval(idTiempo);
        botonesRespuesta.addClass('disabled');
        botonesRespuesta.off('onclick');
        if (respuesta == respuestas[pregunta]) {
            audioCorrecto[0].play();
            audioCorrecto[0].currenTime = 0;
            jugador.acertadas++;
            windowOK();


        } else {
            audioIncorrecto[0].currentTime = 0;
            audioIncorrecto[0].play();
            jugador.falladas++
                windowFAIL();
        }

    }

    function comprobarTiempo(nivel) {
        if (nivel < 1) {
            errores.push('Error al establecer el tiempo');
        }
        if (nivel >= 1 && nivel <= 3) {
            tiempo = 100;
            reducTiempo = 20;

        }
        if (nivel >= 4 && nivel <= 6) {
            tiempo = 90;
            reducTiempo = 20;
        }
        if (nivel >= 7 && nivel <= 10) {
            tiempo = 60;
            reducTiempo = 20;
        }

    }

    //*------------------------FUNCIONES RELACIONADAS CON LA INFO DEL JUGADOR------------------*//
    function mostrarJugador() {
        /* $("#nameJugador").text(jugador.nombre);
         $("#niveles").text(jugador.completado+" de 10");
         /*for(i=0;i<jugador.tiempoNiveles.length;i++){
             $("#tablaTime").add("tr");
             $("#tablaTime :tr").add("<td>"+jugador.tiempoNiveles[i]+"</td>");
         };
         $("#aciertos").text(jugador.aciertos);
         $("#fallos").text(jugador.falladas);
         $("#infojugador").dialog({
           
          
         });*/
        /*windowJugador=window.open("","verjugador","width=350,height=250","resizable=no");
        windowJugador.document.write('');**/
        alert("nombre del jugador: " + jugador.nombreJugador);
        alert("Niveles pasados: " + jugador.completado);
        alert("Aciertos: " + jugador.aciertos);
        alert("Veces Fallados: " + jugador.falladas);
    }

    //*----FUNCION PRINCIPAL DEL JUEGO----------------*//
    function juego() {
        $('.respuesta').click(comprobarRespuesta);
        numPregunta++;
        $('#numPregunta').text(numPregunta);

        if (nivelPasado) {
            botonesRespuesta.removeClass('disabled');
            if (nivel < 10) {
                nivel++;
            }
            comprobarTiempo(nivel);
            tiempo -= reducTiempo;
            $('#tiempo').text(tiempo);

        } else {
            comprobarTiempo(nivel);
            $('#tiempo').text(tiempo);
        }
        indicadorNivel.text(nivel);
        botonesRespuesta.removeClass('disabled');

        asginacionPreguntaRespuesta(Math.floor((Math.random() * 9) + 1));
        asginarImagen();


        idTiempo = setInterval(correrTiempo, 1000);
    }

    //---FIN FUNCION PRINCIPAL DEL JUEGO--------------//

    while (nombreJugador == null || nombreJugador == ' ') {
        nombreJugador = prompt("Introduce tu nombre");
    }
    $("#user").text(nombreJugador)
    jugador = new jugador(nombreJugador);
    juego();
});
