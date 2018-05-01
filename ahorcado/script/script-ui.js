$(document).ready(function () {
    
$("#estadistica").modal("show"); /*asi se ejecuta el modal de forma automatica*/
//$("#nivel1").modal("show"); /*asi se ejecuta el modal de forma automatica*/
   
   $(".nivel1,.nivel2,.nivel3,.nivel4.nivel5,.nivel6,.nivel7,.nivel8,.nivel9,.nivel10").click(function (){
       var panel='#'+$(this).attr("class");
       console.log(panel);
       setTimeout(function (){$("#estadistica").modal("hide");},500); 
       setTimeout(function (){$(panel).modal("show");},500); 
       
   });

    /**************************************************************************/
    /**************************************************************************/
    /*********************COMPORTAMIENTO PARA MENU*****************************/
    function boton() {
        $("#comprobar-palabra,#letras,#letras-palabra").button({
            disabled: true
        });
        $(".start").button({
            disabled: false
        });
    }
    function inputsOFF() {
        $("#comprobar-palabra,#letras,#letras-palabra").button({
            disabled: true
        });
    }
    function inputsON() {
        $("#comprobar-palabra,#letras,#letras-palabra").button({
            disabled: false
        });
    }
    function rotar() {
        if ($("#boton").hasClass("rotacion")) {
            $("#boton").removeClass("rotacion");
        } else {
            $("#boton").addClass("rotacion");
        }
    }
    function botonMenu() {
        $(".menu").click(function () {
            rotar();
        });
    }
    $(boton);
    $(botonMenu);
    /**************************************************************************/

    /**************************************************************************/
    /*************************INICIO DEL JUEGO*********************************/
    /**************************************************************************/

    /**************************************************************************/
    /******************************VARIABLES***********************************/
    var arrayPalabra = ["amistad", "ayuda", "bullying", "felicidad", "ira", "pareja", "tragedia", "tristeza"];
    var PALABRA = "";
    var letra = "";
    var preguntas = {1: "1º palabra", 2: "2º Palabra", 3: "3º Palabra"};
    var arrayPALABRA = "";
    var CONSTIMAGEN = 4;
    var imagen = "";
    var nivel = 1;
    var puntos;
    var puntosTotales = 0;
    var puntosLetra = {1: 5, 2: 10, 3: 15, 4: 20, 5: 25, 6: 30, 7: 35, 8: 40};
    var puntosPalabra = {1: 20, 2: 40, 3: 60, 4: 80, 5: 100, 6: 120, 7: 140, 8: 160};
    var puntosLetraInc = {1: 2, 2: 4, 3: 8, 4: 16, 5: 20, 6: 26, 7: 30, 8: 35};
    var puntosPalabraInc = {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60, 7: 70, 8: 80};
    var celdasTablero = 36;
    var descubiertas = [];
    var COUNT = 0;
    var ACIERTO;
    var ERROR;
    var longitud_3 = [[6, 3], [0, 1, 2], [4, 5, 7, 8]];
    var longitud_5 = [[6], [3], [0, 1, 2], [4, 5], [7, 8]];
    var longitud_6 = [[6], [3], [0], [1, 2], [4, 5], [7, 8]];
    var longitud_7 = [[6], [3], [0], [1], [2], [4, 5], [7, 8]];
    var longitud_8 = [[6], [3], [0], [1], [2], [4], [5], [7, 8]];
    var longitud_9 = [[6], [3], [0], [1], [2], [4], [5], [7], [8]];
    var inicio = 0;
    var segundo = 1000;
    var tiempoOcultacion = {1: 1000, 2: 15000, 3: 20000, 4: 25000, 5: 30000, 6: 35000, 7: 40000, 8: 45000};
    var tiempoNiveles = {1: 200, 2: 190, 3: 180, 4: 150, 5: 140, 6: 130, 7: 100, 8: 75};
    var TIEMPORESTANTE;
    var tempoSTART;
    var tempoSTOP;
    var destaparImagen;
    var flag;
    /**************************************************************************/

    /**************************************************************************/
    /*****************************COLOCAR IMAGENES*****************************/
    function colocarImagenTablero() {
        TIEMPORESTANTE = 0;
        puntos = 0;
        ERROR=0;
        var posicion = Math.round((Math.random() * (arrayPalabra.length - 1)));
        PALABRA = arrayPalabra[posicion];
        imagen = "url(../imagenes/" + PALABRA + "/" + Math.round((Math.random() * CONSTIMAGEN) + 1) + ".jpg)";
        $("#tablero").css("background-image", imagen);
        tempoSTART = setInterval(tempo, segundo);
        destaparImagen = setInterval(ocultacion, tiempoOcultacion[nivel]);
    }
    function colocarImagenAhorcado() {
        imagen = "url(./imagenes/ahorcado.gif)";
        $("#tablero-ahorcado").css("background-image", imagen);
    }

    /**************************************************************************/

    /**************************************************************************/
    /***************************PINTAR TABLEROS********************************/
    function pintarTablero() {
        $("#nivel").text("Nivel " + nivel);
        var tablero = "";
        var tableroAhorcado = "";
        for (var i = 0; i < celdasTablero; i++) {
            tablero += "<div class='tablero transparentTablero col-2'><div class='green'></div></div>";
        }
        for (var e = 0; e < 9; e++) {
            tableroAhorcado += "";
        }
        $("#tablero").html(tablero);
        pintarPalabra();
    }
    function pintarAhorcado() {
        var ahorcado = "";
        for (var i = 0; i < 9; i++) {
            ahorcado += '<section class="tablero-ahorcado ahorcado col-4 "></section>';
        }
        $("#tablero-ahorcado").html(ahorcado);
    }
    /**************************************************************************/
    
    /**************************************************************************/
    /**********************************PARADA**********************************/
    function pararTiempo() {
        clearInterval(destaparImagen);
        tempoSTOP = clearInterval(tempoSTART);
    }
    function parada() {
        /***********/
        ACIERTO++;//por configurar
        /***********/
        descubiertas=[];
        puntosTotales += puntos;
        $(".puntos-totales").html(puntosTotales);
        COUNT++;
        inicio=0;
        if (COUNT === 3) {
            nivel++;
            COUNT = 0;
        }
        inputsON();
        animacion();
    }
    function paradaAhorcado() {
        COUNT++;
        pararTiempo();
        inicio=0;
        if (COUNT === 3) {
            COUNT = 0;
        }
        animacion();
    }
    /**************************************************************************/

    /**************************************************************************/
    /****************************PINTAR PALABRA********************************/
    function pintarPalabra() {
        arrayPALABRA = PALABRA.split("");
        var palabra = "";
        palabra = "<span class='col-1 ml-auto'>¿</span>";
        for (var i = 0; i < PALABRA.length; i++) {
            palabra += "<section class='col-auto oculta ml-1 mr-1'><span class=''>" + PALABRA[i].toUpperCase() + "</span></section>";
        }
        palabra += "<span class='col-1 mr-auto'>?</span>";
        $("#palabra").html(palabra);
        $("#palabra section.oculta span").hide();
    }

    function destaparLetra() {
        flag = false;
        for (var i = 0; i < PALABRA.length; i++) {
            if (PALABRA[i] === $(".letra").val()) {
                letra += $(".letra").val();
                $("#palabra section.oculta").eq(i).addClass("visible").children().show("fade");
                puntos += puntosLetra[nivel];
                flag = true;
            }
        }
        if ($("#palabra section.visible").length === PALABRA.length) {
            destapando();
        }
        if (!flag)
            destaparAhorcado();
        $(".letra").val("");
        $(".puntos").html(puntos);
    }

    function comprobarPalabra() {
        if (PALABRA === $("#letras-palabra").val()) {
            for (var i = 0; i < PALABRA.length; i++) {
                $("#palabra section.oculta").eq(i).addClass("visible").children().show("fade");
            }
            puntos += puntosPalabra[nivel];
            destapando();
        }
        $("#letras-palabra").val("");
        $(".puntos").html(puntos);
    }
    /**************************************************************************/
    /**************************************************************************/


    /**************************************************************************/
    /**************************DESTAPAR IMAGEN PISTA***************************/
    function ocultacion() {
        destapar();
        if (descubiertas.length > celdasTablero) {
            pararTiempo();
            setTimeout(parada, 5000);
        }
    }
    function destapar() {
        var posicion_tablero;
        for (var i = 0; i < 1; i++) {
            posicion_tablero = Math.round((Math.random() * $("#tablero").children().length));
            if (descubiertas.length < 0) {
                destape(posicion_tablero);
            } else if (descubiertas.includes(posicion_tablero)) {
                i--;
            } else {
                destape(posicion_tablero);
            }
        }
    }
    function destape(posicion) {
        $("#tablero").children().eq(posicion).children(".green").toggle("fade", "options", 500);
        descubiertas.push(posicion);
    }
    function destapando(){
        inputsOFF();
        puntos+=(celdasTablero-descubiertas.length)*10;
        pararTiempo();
        for (var i=0;i<$("#tablero").children().length;i++){
            if(!descubiertas.includes(i)){
                $("#tablero").children().eq(i).children(".green").toggle("fade", "options", 500);
                descubiertas.push(i);
            }
        }
        setTimeout(parada, 5000);
    }
                

    /**************************************************************************/
    /**************************************************************************/

    /**************************************************************************/
    /****************************DESTAPAR IMAGEN AHORCADO*****************************/
    function ahorcado(longitud) {
        if ($("#tablero-ahorcado .ahorcado").length > 0) {
            ERROR++;
            for (var i = 0; i < longitud[inicio].length; i++) {
                $("#tablero-ahorcado").children().eq(longitud[inicio][i]).removeClass("ahorcado", 1000);
            }
            inicio++;
        }
        if (ERROR === PALABRA.length) {
            setTimeout(paradaAhorcado,5000);
        }
    }

    function destaparAhorcado() {
        switch (arrayPALABRA.length) {
            case 3:
                ahorcado(longitud_3);
                break;
            case 5:
                ahorcado(longitud_5);
                break;
            case 6:
                ahorcado(longitud_6);
                break;
            case 7:
                ahorcado(longitud_7);
                break;
            case 8:
                ahorcado(longitud_8);
                break;
            case 9:
                ahorcado(longitud_9);
                break;
        }
    }
    /**************************************************************************/

    /**************************************************************************/
    /****************************CONTROL DE TIEMPO*****************************/
    function tempo() {
        TIEMPORESTANTE++;
        $(".tiempo").html(TIEMPORESTANTE);
    }
    /**************************************************************************/
    /**************************************************************************/
    function animacion() {
        $("#comprobar-palabra,#letras,#letras-palabra").button({
            disabled: false
        });
        $(".start").button({
            disabled: true
        });
        colocarImagenTablero();
        colocarImagenAhorcado();
        pintarTablero();
        pintarAhorcado();
    }
    /**************************************************************************/
    /****************************CREACION DE MODAL*****************************/
    function modalNivel(nivel){
        $(".estadistica").html('<a id="modalNivel" data-toggle="modal" data-target="#nivel'+(nivel-1)+'">Nivel '+(nivel-1)+'</a>');
    }
    /**************************************************************************/
    /**************************************************************************/

    /**************************************************************************/
    /**************************************************************************/
    $(function () {
        var height = "max-height:" + (screen.height - 100) + "px ; max-width:" + (screen.width) + "px ;overflow: hidden;";
        $("#body").attr("style", height);
    });
    /**************************************************************************/
    /**************************************************************************/


    $(".start").click(animacion);

    $("#letra").keyup(destaparLetra);
    $("#comprobar-palabra").click(comprobarPalabra);
});