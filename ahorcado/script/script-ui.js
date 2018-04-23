$(document).ready(function () {
    /**************************************************************************/
    /*********************COMPORTAMIENTO PARA MENU*****************************/
    function botonComprobar() {
        $("#comprobar-palabra").button();
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
    $(botonComprobar);
    $(botonMenu);
    /**************************************************************************/
    
    /**************************************************************************/
    /*************************INICIO DEL JUEGO*********************************/
    /**************************************************************************/
    
    /**************************************************************************/
    /******************************VARIABLES***********************************/
    var arrayPalabra = ["amistad", "ayuda", "bullying", "felicidad", "ira", "pareja", "tragedia", "tristeza"];
    var PALABRA = "";
    var preguntas={1:"1º palabra",2:"2º Palabra",3:"3º Palabra"};
    var arrayPALABRA = "";
    var CONSTIMAGEN = 4;
    var imagen = "";
    var nivel = 1;
    var puntos;
    var puntosTotales;
    var puntosLetra={1 : 5,2: 10,3: 15,4: 20,5: 25,6: 30,7:35,8:40};
    var puntosPalabra={1 : 20,2: 40,3: 60,4: 80,5: 100,6: 120,7:140,8:160};
    var puntosLetraInc={1 : 2,2: 4,3: 8,4: 16,5: 20,6: 26,7:30,8:35};
    var puntosPalabraInc={1 : 10,2: 20,3: 30,4: 40,5: 50,6: 60,7:70,8:80};
    var celdasTablero = 36;
    var descubiertas = [];
    var longitud_3 = [[6, 3], [0, 1, 2], [4, 5, 7, 8]];
    var longitud_5 = [[6], [3], [0, 1, 2], [4, 5], [7, 8]];
    var longitud_6 = [[6], [3], [0], [1, 2], [4, 5], [7, 8]];
    var longitud_7 = [[6], [3], [0], [1], [2], [4, 5], [7, 8]];
    var longitud_8 = [[6], [3], [0], [1], [2], [4], [5], [7, 8]];
    var longitud_9 = [[6], [3], [0], [1], [2], [4], [5], [7], [8]];
    var inicio = 1;
    var segundo = 1000;
    var tiempoOcultacion = {1 : 5000,2: 5000,3: 5000,4: 3.500,5: 3.500,6: 3.500,7:2,8:2};
    var tiempoNiveles={1 : 200,2: 190,3: 180,4: 150,5: 140,6: 130,7:100,8:75};
    var TIEMPORESTANTE;                         
    var tempoSTART;                             
    var tempoSTOP;
    var inicioPalabra;
    /**************************************************************************/
    
    /**************************************************************************/
    /*****************************COLOCAR IMAGENES*****************************/
    function colocarImagenTablero() {
        TIEMPORESTANTE = tiempoNiveles[nivel];
        TIEMPO = 0;
        var posicion = Math.round((Math.random() * (arrayPalabra.length - 1)));
        PALABRA = arrayPalabra[posicion];
        imagen = "url(../imagenes/" + PALABRA + "/" + Math.round((Math.random() * CONSTIMAGEN) + 1) + ".jpg)";
        $("#tablero").css("background-image", imagen);
        tempoSTART = setInterval(tempo, segundo);
        inicioPalabra = setInterval(ocultacion, tiempoOcultacion[nivel]);
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
    /**************************************************************************/

    /**************************************************************************/
    /***************************PINTAR PALABRA********************************/
    function pintarPalabra() {
        arrayPALABRA = PALABRA.split("");
        var palabra = "";
        palabra = "<span class='col-1 ml-auto'>¿</span>";
        for (var i = 0; i < arrayPALABRA.length; i++) {
            palabra += "<section class='col-auto oculta'><span class=''>" + arrayPALABRA[i] + "</span></section>";
        }
        palabra += "<span class='col-1 mr-auto'>?</span>";
        $("#palabra").html(palabra);
        $("#palabra section.oculta span").hide();
        $("#palabra section.oculta span").eq(3).toggle("clip","options",500);
//        $("#palabra").children("section span").eq(3).toggle("show","options",500);
        
    }
    /**************************************************************************/
    /**************************************************************************/


    /**************************************************************************/
    /**************************DESTAPAR IMAGEN PISTA***************************/
    function ocultacion() {
        var posicion_tablero;
        for (var i = 0; i < 1; i++) {
            posicion_tablero = Math.round((Math.random() * $("#tablero").children().length));
            if (descubiertas.length < 0) {
                $("#tablero").children().eq(posicion_tablero).children(".green").toggle("clip", "options", 500);
                descubiertas.push(posicion_tablero);
            } else if (descubiertas.includes(posicion_tablero)) {
                i--;
            } else {
                $("#tablero").children().eq(posicion_tablero).children(".green").toggle("clip", "options", 500);
                descubiertas.push(posicion_tablero);
            }
        }
        if (descubiertas.length > celdasTablero) {
            clearInterval(inicioPalabra);
        }
    }
    /**************************************************************************/
    /**************************************************************************/
    
    /**************************************************************************/
    /****************************DESTAPAR IMAGEN AHORCADO*****************************/
    function ahorcado(longitud, posicion) {
        for (var i = 0; i < longitud[posicion].length; i++) {
            $("#tablero-ahorcado").children().eq(longitud[posicion][i]).removeClass("ahorcado", 1000);
        }
    }

    function destaparAhorcado() {
        switch (arrayPALABRA.length) {
            case 3:
                ahorcado(longitud_3, inicio);
                inicio++;
                break;
            case 5:
                ahorcado(longitud_5, inicio);
                inicio++;
                break;
            case 6:
                ahorcado(longitud_6, inicio);
                inicio++;
                break;
            case 7:
                ahorcado(longitud_7, inicio);
                inicio++;
                break;
            case 8:
                ahorcado(longitud_8, inicio);
                inicio++;
                break;
            case 9:
                ahorcado(longitud_9, inicio);
                inicio++;
                break;
        }
    }
    /**************************************************************************/
    
    /**************************************************************************/
    /****************************CONTROL DE TIEMPO*****************************/
    function tempo() {
        TIEMPORESTANTE--;
        $(".tiempo").html(TIEMPORESTANTE);
        if (TIEMPORESTANTE === 0) {
//            $("#error")[0].currentTime = 0;
//            $("#error")[0].play();
            tempoSTOP = clearInterval(tempoSTART);
        }
    }
    /**************************************************************************/
    /**************************************************************************/




    colocarImagenTablero();
    pintarTablero();
    colocarImagenAhorcado();


});