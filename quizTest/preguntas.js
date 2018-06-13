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

    
    /*
     * Ajax para preguntas de bdd
     * @returns {lista|response}
     */
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
    
    /*
     * Carga de preguntas de BDD al juego
     * @type Array|Object
     */
   var nuebo=JSON.parse(cargadoAjaxPreguntas());
 
    for(var i =0; i<nuebo.length;i++){
       
        p = new pregunta(nuebo[i][0],nuebo[i][1],nuebo[i][2],nuebo[i][3],nuebo[i][9],nuebo[i][5],nuebo[i][6],nuebo[i][7],nuebo[i][8])
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
    
    /*
     * Objeto para la pregunta.
     * @param {type} nivel
     * @param {type} emocion 
     * @param {type} nombre
     * @param {type} solucion
     * @param {type} imagen
     * @param {type} opcion1
     * @param {type} opcion2
     * @param {type} opcion3
     * @param {type} opcion4
     * @returns {preguntasL#1.pregunta}
     */
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
    /*------------- RELACIONADO CON EL JUGADOR--------------------*/
    //*------------------------FUNCIONES RELACIONADAS CON LA INFO DEL JUGADOR------------------*//
    /*
     *  Activa el modal con las estadisticas hasta el momento del jugador. 
     *
     */
    function mostrarJugador() {
        
        
        $("#usuario").modal("show");
        
    }
      //*------------------------FUNCIONES RELACIONADAS CON LA INFO DEL JUGADOR------------------*//
     /*
      * Objeto que respresenta al jugador en la partida
      * @param {type} id_jugador Pasado a traves de sessiones
      * @param {type} nombreJugador Averigurado a traves de php
      * @returns {preguntasL#1.jugador}
      */
    function jugador(id_jugador,nombreJugador) {
        this.idJugador = id_jugador;
        this.nombreJugador= nombreJugador;
        this.completado = 0;
        this.tiempoNiveles=new Array();
        this.aciertos = 0;
        this.falladas = 0;
        this.intentos=0;
        this.guardarTiempo = function (nivel, tiempo) {
            $.post("../quizTest/ajax_user.php",{id_user:this.idJugador,tiempo:tiempo,nivel:nivel});
            console.log(this.tiempoNiveles);
                if(this.tiempoNiveles <11){
                this.tiempoNiveles.push(tiempo);    
                }else{
                    this.tiempoNiveles[10]=tiempo;
                }
        };
        this.calculoPorcentaje = function(nivel){
            this.porcentajeAciertos=(this.aciertos/preguntas['nivel'+nivel].length)*100;
            this.porcentajeFallos=(this.fallos/preguntas['nivel'+nivel].length)*100;
        };
        this.updateEstadisticas=function(){
            $("#acertadas").text(this.aciertos);
            $("#falladas").text(this.falladas);
            $("#intentos").text(this.intentos);
            $("#porAciertos").text(this.porcentajeAciertos);
            $("#porFallos").text(this.porcentajeFallos);
            for (var i =0;i<this.tiempoNiveles;i++){
                $("#tiempos").append("<tr>");
                $("#tiempos tr:last").append("<td>"+this.tiempoNiveles[i]+"</td>");
            }
        };
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
        clearInterval(idTiempo);
        $("#cabecera").html("Correcto");
        $("#prev").addClass("disabled");
        $("#next").removeClass("disabled");
        $("#reload").addClass("disabled");
        
         $("#next").click(function(){
            nivelPasado=true;
            juego();
             $("#dialog").modal("hidden");
               $(".respuesta").removeClass("correcta");
        });
         $(".respuesta").removeClass("correcta");
        $("#dialog").modal("show");

    }

    function windowFAIL() {
        clearInterval(idTiempo);
        $("#cabecera").html("Has Fallado");
        $("#next").addClass("disabled");
        $("#prev").addClass("disabled");
        $("#reload").click(function(){
            nivelPasado=false;
            juego();
             $("#dialog").modal("hidden");
               $(".respuesta").removeClass("incorrecta");
        });
        $("#dialog").modal("show");
          $(".respuesta").removeClass("incorrecta");
    }
    //******FUNCIONES RELACIONADAS CON EL TIEMPO EN LA PARTIDA***********//
    /*
     * Cuenta atras del tiempo. Cuando llegue a cero carga otra pregunta
     * 
     * 
     */
    function correrTiempo() {
        if (tiempo === 0) {
            tiempo = 0;
            clearInterval(idTiempo);
            nivelPasado=false;
                juego();
            
        } else {
            tiempo--;
        }
        $('#tiempo').text(tiempo);
    }
 //**********************************************************************************************************//
 
    /******************FUNCIONES PARA LA ASIGNACION ******/ //
    var botonesRespuesta = $('.respuesta');
    var LIMITEboton = 5;
    var pregunta;
    var imagenPregunta = $('#imagen img');

/*
 * Asigna una pregunta segun el nivel que este el usuario, la pregunta es aleatoria, tambien coloca el enunciado, las respuestas y la imagen en los campos correspondientes.
 * @param {type} nivel nivel acutal del jugador.
 * @returns {undefined}
 */
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
        
        enunciado.text(pregunta.nombre);
        //-----ASIGNACION DE RESPUESTAS A LOS BOTONES---------//
        var pos = Math.floor((Math.random() * 4) + 1);
        for (var posBoton = 0; posBoton < 4; posBoton++) {
            if (pos == LIMITEboton) {
                pos = 1;

            }
            botonesRespuesta[posBoton].setAttribute('value', pregunta.opciones['op' + pos]);
            botonesRespuesta[posBoton].setAttribute('name', 'op' + pos);
            pos++;
        }
          //-----------------------------------------------------------------------------//
    }
/*
 * Asigna la imagen relacionada con la pregunta en la pantalla
 * @returns {undefined}
 */
    function asginarImagen() {
        imagenPregunta.attr('src', pregunta.imagen);
    }

    //*-------------------FIN DE FUNCIONES DE ASIGNACION------------------------------*//



    //*----------------------FUNCIONES DE COMPROBACION---------------------------*//
    /*
     * Recoge la respuesta que ha elegido el usuario y comprueba si esa respuesta es correcta, en caso afirmativo introduce el tiempo que ha tardado en bdd, muestra la ventana de acierto al jugador y suma el contador de aciertos del jugador.
     * En caso contrario mostrara al usuario la ventana para repetir el nivel y se sumara el contador de fallos.
     * en ambos casos el contador de intentos sube.
     * @param {type} event Recoge el boton que se ha pulsado, comprueba el campo name del boton y lo comparaa con la solucion de la pregunta.
     * @returns {undefined}
     */
    function comprobarRespuesta(event) {
          

        var respuesta = this.name;
        clearInterval(idTiempo);
        //Deshabilito los botones//
        botonesRespuesta.off('click');
        botonesRespuesta.addClass('disabled');
        botonesRespuesta.off('onclick');
        //************//
        if (respuesta === pregunta.solucion) {
            /*****************/
            $(this).addClass("correcta");
            /*****************/
            audioCorrecto[0].play();
            audioCorrecto[0].currenTime = 0;
           setTimeout (windowOK,2500);
            jugador.aciertos++;
           

        } else {
            /*****************/
            $(this).addClass("incorrecta");
            /*****************/
            audioIncorrecto[0].currentTime = 0;
            audioIncorrecto[0].play();
            jugador.falladas++;
           setTimeout (windowFAIL,1500);
        }
          jugador.intentos++;
      
    }
 /*
  * Dependiendo del nivel, este metodo ajusta el tiempo que dispone el jugador y la reduccion del tiempo
  * @param {type} nivel
  * 
  * 
  */
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


    //*----FUNCION PRINCIPAL DEL JUEGO----------------*//
    /*
     * Funcion principal del juego
     * @returns {undefined}
     */
    function juego() {
       
         
       jugador.updateEstadisticas();
       
        numPregunta++;
        $('#numPregunta').text(numPregunta);

        if (nivelPasado) {
             
            jugador.completado++;
            jugador.guardarTiempo(nivel,tiempo);
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
        botonesRespuesta.click(comprobarRespuesta);
         
         //RESETEO DE VARIABLES PARA EL DIALOGO DE CORRECTO/FALLO//
          $("#prev").removeClass("disabled");
        $("#next").removeClass("disabled");
        $("#reload").removeClass("disabled");
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
