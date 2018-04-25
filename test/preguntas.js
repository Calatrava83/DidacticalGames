$(document).ready(function(){
    //Estos arrays se iniciarian cuando se cargue el juego puesto que tanto las preguntas como las respuestas se cargan desde bDD//
    var imagenes=[];
    imagenes['feliz1']='images/preguntasImagenes/caretas.jpg';
    imagenes['feliz2']='images/preguntasImagenes/caras1.jpg';
    imagenes['feliz3']='images/preguntasImagenes/caras1.jpg';
    imagenes['afortunado1']="images/preguntasImagenes/afortunado.jpg";
    imagenes['afortunado2']="images/preguntasImagenes/afortunado2.jpg";
    imagenes['afortunado3']="images/preguntasImagenes/afortundado3.jpg";
    var preguntas = [];
    preguntas['feliz1']='Cual de estas caras es feliz?';
    preguntas['feliz2']='Cual de estas personas no es feliz?';
    preguntas['feliz3']='Indica en el orden de las emociones que se ven';
    preguntas['afortunado1']="¿Como se encuentra Donald ahora?";
    preguntas['afortunado2']="¿Si tuvieras un hijo, como estarias cuando lo ves por primera vez?";
    preguntas['afortunado3']="¿Que reaccion tiene donald?";
    var respuestas = [];
    respuestas['feliz1']='op1';
    respuestas['feliz2']='op4';
    respuestas['feliz3']='op3';
    //terminar preguntas y respuestas//
    respuestas['afortunado1']=;
    respuestas['afortunado2']=;
    respuestas['afortunado3']=;
    var posibles=[];
    posibles['feliz1']={'op1':'primera','op2':'segunda','op3':'tercera','op4':'Ninguna de las anteriores'};
    posibles['feliz2']={'op1':'primera','op2':'segunda','op3':'tercera','op4':'Ninguna de las anteriores'};
    posibles['feliz3']={'op1':'feliz, normal, sorprendida, pensativa, asustada y enfadada',
                        'op2':'enfadada, asustada, sorprendida, normal, feliz y pensativa',
                        'op3':'normal,feliz,pensativa,sorprendida,enfadada,asustada',
                        'op4':'normal, pensativa, asustada, enfadada, sorprendida y normal'
                             };
    posibles['afortunado1']
    /*-------------VARIABLES RELACIONADAS CON EL JUGADOR--------------------*/
    var nombreJugador;
    var numPasados=0;
    var tiempoNivel=0;
    var preguntasAcertadas=0;
    var preguntasFallidas=0;
    
   function jugador (nombreJugador){
        this.nombreJugador= nombreJugador;
        this.completado=0;
        this.tiempoNiveles=[];
        this.aciertos=0;
        this.falladas=0;
        guardarTiempo = function(nivel,tiempo){
            this.tiempoNiveles[nivel]=tiempo;
        };
    }
    
    $('#user').click(mostrarJugador);
    
    
    
    /*-------INICALIZACION DE LAS VARIABLES GLOBALES------------------------ */
    var errores=[];
    
    var nivel=1;
    var numPregunta=1;
    var nivelPasado=false;
    
    var enunciado = $('#question');
    var indicadorNivel = $('#nivel');
    var tiempo = 100;
    var reducTiempo=20;
    var idTiempo;
    //SONIDOS PARA EL JUEGO//
    var audioCorrecto=$('#acierto');
    var audioIncorrecto=$('#fail');
    
     
    /*****FUNCIONES PARA LOS DIALOGOS**************///
    function windowOK(){
        $('#dialog').dialog({
            dialogClass:"no-close",
            resizable: false,
            height:'auto',
            width:500,
            modal :true,
            buttons:{
                "Pasar al siguiente nivel":function(){
                    nivelPasado=true;
                    juego();
                    $(this).dialog("close");
                },
                "Salir":function(){
                    botonesRespuesta.off('onclick');
                    $(this).dialog("close");
                }
            }
        });
    }
    function windowFAIL(){
        $("#dialog_error").dialog({
            dialogClass:"no-close",
            resizable: false,
            height:'auto',
            width:400,
            modal:true,
            buttons:{
                "Reintentar":function(){
                    nivelPasado=false;
                    juego();
                    $(this).dialog("close");
                },
                "Salir":function(){
                    botonesRespuesta.off('onclick');
                    $(this).dialog("close");
                }
            }
        });
    }
    //******FUNCIONES RELACIONADAS CON EL TIEMPO EN LA PARTIDA***********//
    function correrTiempo(){
        if(tiempo==0){
        tiempo=0;
        }else{
        tiempo--;
        }
        $('#tiempo').text(tiempo);
    }
    
    /******************FUNCIONES PARA LA ASIGNACION ******///
    var botonesRespuesta=$('.respuesta');
    var LIMITEboton=5;
    var pregunta;
    var imagenPregunta=$('img');
    
    function asginacionPreguntaRespuesta(nivel){
        switch (nivel){
              case 1: pregunta = "feliz"+Math.floor((Math.random()*3)+1);
                break;
            case 2: pregunta = "afortunado"+Math.floor((Math.random()*3)+1);
               /*case 2:  pregunta = "contento"+Math.floor((Math.random()*3)+1);
                break;
               case 3:  pregunta = "afortunado"+Math.floor((Math.random()*3)+1);
                break;
            case 4:  pregunta = "enfadado"+Math.floor((Math.random()*3)+1);
                break;
            case 5:  pregunta = "cabreado"+Math.floor((Math.random()*3)+1);
                break;
            case 6:  pregunta = "furioso"+Math.floor((Math.random()*3)+1);
                break;
            case 7:  pregunta = "enamorado"+Math.floor((Math.random()*3)+1);
                break;
            case 8:  pregunta = "rendido"+Math.floor((Math.random()*3)+1);
                break;
            case 9:  pregunta = "tierno"+Math.floor((Math.random()*3)+1);
                break;
            case 10:  pregunta = "ultimo"+Math.floor((Math.random()*3)+1); // El ultimo nivel sera una combinacion de varias emociones//
                break;*/
        }
       // pregunta = "feliz"+Math.floor((Math.random()*3)+1);
        var opciones = posibles[pregunta];
       
        enunciado.text(preguntas[pregunta]);
       //-----ASIGNACION DE RESPUESTAS A LOS BOTONES---------//
        var pos = Math.floor((Math.random()*4)+1);
        var opcionesBotones =false;
        
        for(var posBoton=0;posBoton<4;posBoton++){
            //console.log(pos);
            if(pos==LIMITEboton){
                pos=1;
                
            }  
             botonesRespuesta[posBoton].setAttribute('value',posibles[pregunta]['op'+pos]);
             botonesRespuesta[posBoton].setAttribute('name','op'+pos);
             pos++;
        } 
    }
    function asginarImagen(){
        imagenPregunta.attr('src',imagenes[pregunta]);
    }
    
//*-------------------FIN DE FUNCIONES DE ASIGNACION------------------------------*//
    
    
    
//*----------------------FUNCIONES DE COMPROBACION---------------------------*//
    function comprobarRespuesta(event){
        var allDisabled = false;
        var respuesta= this.name;
        clearInterval(idTiempo);
        botonesRespuesta.addClass('disabled');
        botonesRespuesta.off('onclick');
        if(respuesta == respuestas[pregunta]){
            audioCorrecto[0].currenTime=0;
            audioCorrecto[0].play();
            jugador.acertadas++;
            windowOK();
            
            
        }else{
            audioIncorrecto[0].currentTime=0;
            audioIncorrecto[0].play();
            jugador.falladas++
            windowFAIL();
        }
        
    }
    function comprobarTiempo(nivel){
        if(nivel<1){
           errores.push('Error al establecer el tiempo'); 
        }
        if(nivel>=1 && nivel<=3){
            tiempo=100;
            reducTiempo=20;
            
        }
        if (nivel>=4 && nivel<=6){
            tiempo=90;
            reducTiempo=20;
        }
        if(nivel>=7 && nivel<=10){
            tiempo=60;
            reducTiempo=20;
        }
        
    }
    
    //*------------------------FUNCIONES RELACIONADAS CON LA INFO DEL JUGADOR------------------*//
        function mostrarJugador(){
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
             alert("nombre del jugador: "+jugador.nombreJugador);
            alert ("Niveles pasados: "+jugador.completado);
            alert ("Aciertos: "+jugador.aciertos);
            alert ("Veces Fallados: "+jugador.falladas);
        }
    
    //*----FUNCION PRINCIPAL DEL JUEGO----------------*//
    function juego(){
        $('.respuesta').click(comprobarRespuesta);
        numPregunta++;
        $('#numPregunta').text(numPregunta);
        
        if(nivelPasado){
            botonesRespuesta.removeClass('disabled');
             if(nivel<10){
                nivel++;
            }
            comprobarTiempo(nivel);
            tiempo-=reducTiempo;
             $('#tiempo').text(tiempo);
            
        }else{
            comprobarTiempo(nivel);
            $('#tiempo').text(tiempo);
        }
        indicadorNivel.text(nivel);
        botonesRespuesta.removeClass('disabled');
        asginacionPreguntaRespuesta(nivel);
        asginarImagen();
        
        
        idTiempo = setInterval(correrTiempo,1000);
    }
    
    //---FIN FUNCION PRINCIPAL DEL JUEGO--------------//
    
    while(nombreJugador==null || nombreJugador==' '){
        nombreJugador=prompt("Introduce tu nombre");
    }
    $("#user").text(nombreJugador)
    jugador = new jugador(nombreJugador);
    juego();
});