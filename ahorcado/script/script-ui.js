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
    /*************************INICIO DEL JUEGO*********************************/
    var arrayPalabra = ["amistad", "ayuda", "bullying", "felicidad", "ira", "pareja", "tragedia", "tristeza"];
    var PALABRA = "";
    var arrayPALABRA = "";
    var CONSTIMAGEN = 4;
    var imagen = "";
    var puntos;
    var celdasTablero = 36;
    var descubiertas = [];
    var longitud_3 = [[6, 3], [0, 1, 2], [4, 5, 7, 8]];
    var longitud_5 = [[6], [3], [0, 1, 2], [4, 5], [7, 8]];
    var longitud_6 = [[6], [3], [0], [1, 2], [4, 5], [7, 8]];
    var longitud_7 = [[6], [3], [0], [1], [2], [4, 5], [7, 8]];
    var longitud_8 = [[6], [3], [0], [1], [2], [4], [5], [7, 8]];
    var longitud_9 = [[6], [3], [0], [1], [2], [4], [5], [7], [8]];
    var inicio = 0;
    var segundo = 1000;
    var tiempoOcultacion = 1000;
    var TIEMPORESTANTE;                         //
    var TIEMPO;                                 //
    var tempoSTART;                             //variable que inicia el setInterval
    var tempoSTOP;                              //variable que para el setInterval

    var inicioPalabra;
    /**************************************************************************/
    /**************************************************************************/
    function colocarImagenTablero() {
        TIEMPORESTANTE = 100;
        TIEMPO = 0;
        var posicion = Math.round((Math.random() * (arrayPalabra.length - 1)));
        PALABRA = arrayPalabra[posicion];
        imagen = "url(../imagenes/" + PALABRA + "/" + Math.round((Math.random() * CONSTIMAGEN) + 1) + ".jpg)";
        $("#tablero").css("background-image", imagen);
        tempoSTART = setInterval(tempo, segundo);
        inicioPalabra = setInterval(ocultacion, tiempoOcultacion);
    }
    function colocarImagenAhorcado() {
        imagen = "url(./imagenes/ahorcado.gif)";
        $("#tablero-ahorcado").css("background-image", imagen);
    }

    /**************************************************************************/
    /**************************************************************************/

    function pintarTablero() {
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

    function pintarPalabra() {
        arrayPALABRA = PALABRA.split("");
        var palabra = "";
        palabra = "<span class='col-1 ml-auto'>¿</span>";
        for (var i = 0; i < arrayPALABRA.length; i++) {
            palabra += "<section class='col-auto'><span class='oculta'>" + arrayPALABRA[i] + "</span></section>"
        }
        palabra += "<span class='col-1 mr-auto'>?</span>";
        $("#palabra").html(palabra);
    }


    /**************************************************************************/
    /**************************************************************************/
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
    function tempo() {
        TIEMPORESTANTE--;
        TIEMPO++;
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