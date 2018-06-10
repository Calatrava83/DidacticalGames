$(document).ready(function () {
    //Estos arrays se iniciarian cuando se cargue el juego puesto que tanto las preguntas como las respuestas se cargan desde bDD//
    
    var preguntas=new Array('nivel1','nivel2','nivel3','nivel4','nivel5','nivel6','nivel7','nivel8','nivel9','nivel10');
    preguntas['nivel1']= new Array();
    preguntas['nivel2']= new Array();
    preguntas['nivel3']= new Array();
    preguntas['nivel4']= new Array();
    preguntas['nivel5']= new Array();
    preguntas['nivel6']= new Array();
    preguntas['nivel7']= new Array();
    preguntas['nivel8']= new Array();
    preguntas['nivel9']= new Array();
    preguntas['nivel10']= new Array();

    
    
    function cargadoAjaxPreguntas(){
        $.ajax({
            url: "../quizTest/ajax_preguntas.php",
            type: 'POST',
            async:false,
            success:function(response){
                lista = response;
                },
            error:function(){
                alert("Ha ocurido un error");
                }
            });
        return lista;
    }
    
    
   var nuebo=JSON.parse(cargadoAjaxPreguntas());
 
    for(var i =0; i<nuebo.length;i++){
        //console.log(nuebo[i]);
        p = new pregunta(nuebo[i][0],nuebo[i][1],nuebo[i][2],nuebo[i][3],nuebo[i][9],nuebo[i][5],nuebo[i][6],nuebo[i][7],nuebo[i][8]);
        switch(nuebo[i][0]){
            case '1':
               preguntas['nivel1'].push(p);
            break;
            case '2':
                preguntas['nivel2'].push(p); 
            break;
            case '3':
                 preguntas['nivel3'].push(p); 
            break;
            case '4':
                 preguntas['nivel4'].push(p);
            break;
            case '5':
                 preguntas['nivel5'].push(p);
            break;
            case '6':
                 preguntas['nivel6'].push(p);
            break;
            case '7':
                 preguntas['nivel7'].push(p);
            break;
            case '8':
                 preguntas['nivel8'].push(p);
            break;
            case '9':
                 preguntas['nivel9'].push(p);
            break;
            case '10':
                 preguntas['nivel10'].push(p);
            break;
        }
    }
    
    
    function pregunta(nivel,emocion,nombre,solucion,imagen,opcion1,opcion2,opcion3,opcion4){
        this.nivel = nivel;
        this.emocion = emocion;
        this.nombre=nombre;
        this.imagen = imagen;
        this.solucion = solucion;
        this.opciones = new Array();
        this.opciones['op1']=opcion1;
        this.opciones['op2']=opcion2;
        this.opciones['op3']=opcion3;
        this.opciones['op4']=opcion4;
        
    }
    /*-------------VARIABLES RELACIONADAS CON EL JUGADOR--------------------*/
    var nombreJugador;
    var numPasados = 0;
    var tiempoNivel = 0;
    var preguntasAcertadas = 0;
    var preguntasFallidas = 0;

    function recoveryJugador(idUser){
        if(!idUser == "" || !idUser == null){
           //a medio//
        }
    }
    
    function jugador(id_jugador,nombreJugador) {
        this.idJugador = id_jugador;
        this.nombreJugador= nombreJugador;
        this.completado = 0;
        this.respondidas =0;
        this.tiempoNiveles=new Array(10);
        this.aciertos = 0;
        this.falladas = 0;
        this.intentos=0;
        this.porcentajeAciertos=0;
        this.porcentajeFallos=0;
        this.guardarTiempo = function (nivel, tiempo) {
            $.post("ajax_user.php",{id_user:this.idJugador,tiempo:tiempo,nivel:nivel},function(){
               alert("guardado exitoso");
                tiempoNiveles[nivel]=tiempo;
                
            });
            
        };
        this.calculoPorcentaje = function(aciertos,respondidas){
            
        }
    }

     $('#user').click(mostrarJugador);



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
                    /************/
                    $(".respuesta").removeClass("correcta");
                    /************/
                },
                "Salir": function () {
                    botonesRespuesta.off('onclick');
                    $(this).dialog("close");
                    /************/
                    $(".respuesta").removeClass("correcta");
                    /************/
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
                    /************/
                    $(".respuesta").removeClass("incorrecta");
                    /************/
                },
                "Salir": function () {
                    botonesRespuesta.off('onclick');
                    $(this).dialog("close");
                    /************/
                    $(".respuesta").removeClass("incorrecta");
                    /************/
                }
            }
        });
    }
    //******FUNCIONES RELACIONADAS CON EL TIEMPO EN LA PARTIDA***********//
    function correrTiempo() {
        if (tiempo === 0) {
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
    var imagenPregunta = $('#imagen img');

    function asginacionPreguntaRespuesta(nivel) {
       var cant;
        switch (nivel) {
            case 1:
                cant=preguntas['nivel1'].length;
                pregunta = preguntas['nivel1'][Math.floor((Math.random() * cant) + 0)];
                break;
            case 2:
               cant=preguntas['nivel2'].length;
                pregunta = preguntas['nivel2'][Math.floor((Math.random() * cant) + 0)];
                break;
            case 3:
               cant=preguntas['nivel3'].length;
                pregunta = preguntas['nivel3'][Math.floor((Math.random() * cant) + 0)];
                break;
            case 4:
                cant=preguntas['nivel4'].length;
                pregunta = preguntas['nivel4'][Math.floor((Math.random() * cant) + 0)];
                break;
            case 5:
                cant=preguntas['nivel5'].length;
                pregunta = preguntas['nivel5'][Math.floor((Math.random() * cant) + 0)];
                break;
            case 6:
               cant=preguntas['nivel6'].length;
                pregunta = preguntas['nivel6'][Math.floor((Math.random() * cant) + 0)];
                break;
            case 7:
                cant=preguntas['nivel7'].length;
                pregunta = preguntas['nivel7'][Math.floor((Math.random() * cant) + 0)];
                break;
            case 8:
                cant=preguntas['nivel8'].length;
                pregunta = preguntas['nivel8'][Math.floor((Math.random() * cant) + 0)];
                break;
            case 9:
                cant=preguntas['nivel9'].length;
                pregunta = preguntas['nivel9'][Math.floor((Math.random() * cant) + 0)];
            break;
            case 10:
                cant=preguntas['nivel10'].length;
                pregunta = preguntas['nivel10'][Math.floor((Math.random() * cant) + 0)];
                break;
        }
        console.log(pregunta);
        enunciado.text(pregunta.nombre);
        //-----ASIGNACION DE RESPUESTAS A LOS BOTONES---------//
        var pos = Math.floor((Math.random() * 4) + 1);
        var opcionesBotones = false;

        for (var posBoton = 0; posBoton < 4; posBoton++) {
            if (pos == LIMITEboton) {
                pos = 1;

            }
            botonesRespuesta[posBoton].setAttribute('value', pregunta.opciones['op' + pos]);
            botonesRespuesta[posBoton].setAttribute('name', 'op' + pos);
            pos++;
        }
    }

    function asginarImagen() {
        imagenPregunta.attr('src', pregunta.imagen);
    }

    //*-------------------FIN DE FUNCIONES DE ASIGNACION------------------------------*//



    //*----------------------FUNCIONES DE COMPROBACION---------------------------*//
    function comprobarRespuesta(event) {
        var allDisabled = false;
        var respuesta = this.name;
        clearInterval(idTiempo);
        botonesRespuesta.addClass('disabled');
        botonesRespuesta.off('onclick');
        if (respuesta === pregunta.solucion) {
            /*****************/
            $(this).addClass("correcta");
            /*****************/
            audioCorrecto[0].play();
            audioCorrecto[0].currenTime = 0;
            jugador.aciertos++;
            jugador.guardarTiempo(nivel,tiempo);
            jugador.completado++;
            windowOK();

        } else {
            /*****************/
            $(this).addClass("incorrecta");
            /*****************/
            audioIncorrecto[0].currentTime = 0;
            audioIncorrecto[0].play();
            jugador.falladas++;
            windowFAIL();
        }
        jugador.intentos++;

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
        if(nivel == 10){
            if(tiempo!=0){
                reducTiempo=20;
            }
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

        asginacionPreguntaRespuesta(nivel);
        asginarImagen();


        idTiempo = setInterval(correrTiempo, 1000);
    }
    $(".respuesta").button({
        disabled: false
    });

    //---FIN FUNCION PRINCIPAL DEL JUEGO--------------//
   
    jugador = new jugador($("#id_user").val(),$("#nombre").val());
    juego();
    /*******************/
    $('[data-toggle="tooltip"]').tooltip();
    /*******************/
});
