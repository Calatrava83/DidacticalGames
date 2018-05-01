$(document).ready(function () {

//    $("#estadistica").modal("show"); /*asi se ejecuta el modal de forma automatica*/

    $(".nivel1,.nivel2,.nivel3,.nivel4.nivel5,.nivel6,.nivel7,.nivel8,.nivel9,.nivel10").click(function () {
        var panel = '#' + $(this).attr("class");
        setTimeout(function () {
            $("#niveles").modal("hide");
        }, 500);
        setTimeout(function () {
            $(panel).modal("show");
        }, 500);

    });

    /**************************************************************************/
    /**************************************************************************/
    /*********************COMPORTAMIENTO PARA MENU*****************************/
    function boton() {
        $("#comprobar-palabra,#letras,#letras-palabra,#prev,#reload,#next").button({
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
    var arrayDescripcion = {"amistad": "Afecto personal, puro y desinteresado, compartido con otra persona, que nace y se fortalece con el trato.",
        "ayuda": "Hacer un esfuerzo, poner los medios para el logro de algo.",
        "bullying": "Acoso escolar y toda forma de maltrato físico, verbal o psicológico de forma reiterada y a lo largo del tiempo.",
        "felicidad": "Estado de grata satisfacción espiritual y física.",
        "ira": "Sentimiento de indignación que causa enojo.",
        "pareja": "Conjunto de dos personas, animales o cosas que tienen entre sí alguna correlación o semejanza.",
        "tragedia": "Situación o suceso lamentable que afecta a personas o sociedades humanas.", "tristeza": "Afligido, apesadumbrado."};
    var PALABRA = "";
    var letra = "";
    var preguntas = {1: "1º palabra", 2: "2º Palabra", 3: "3º Palabra"};
    var arrayPALABRA = "";
    var CONSTIMAGEN = 4;
    var imagen = "";
    var nivel = 1;
    var puntos;
    var puntosTotales = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0};
    var paneles = {1: "#nivel1", 2: "#nivel2", 3: "#nivel3", 4: "#nivel4", 5: "#nivel5", 6: "#nivel6", 7: "#nivel7", 8: "#nivel8"};
    var puntosLetra = {1: 5, 2: 10, 3: 15, 4: 20, 5: 25, 6: 30, 7: 35, 8: 40};
    var puntosPalabra = {1: 20, 2: 30, 3: 40, 4: 50, 5: 60, 6: 70, 7: 80, 8: 90};
    var celdasTablero = 36;
    var descubiertas = [];
    var COUNT = 0;
    var ACIERTO = 0;
    var ERROR;
    var starOFF_ON = ["imagenes/star-off.png", "imagenes/star-on.png"];
    var imgAcierto = ["imagenes/mal.png", "imagenes/bien.png", "imagenes/regular.png"];
    var longitud_3 = [[6, 3], [0, 1, 2], [4, 5, 7, 8]];
    var longitud_5 = [[6], [3], [0, 1, 2], [4, 5], [7, 8]];
    var longitud_6 = [[6], [3], [0], [1, 2], [4, 5], [7, 8]];
    var longitud_7 = [[6], [3], [0], [1], [2], [4, 5], [7, 8]];
    var longitud_8 = [[6], [3], [0], [1], [2], [4], [5], [7, 8]];
    var longitud_9 = [[6], [3], [0], [1], [2], [4], [5], [7], [8]];
    var inicio = 0;
    var segundo = 1000;
    var tiempoOcultacion = {1: 2000, 2: 4000, 3: 6000, 4: 8000, 5: 10000, 6: 12000, 7: 14000, 8: 16000};
    var TIEMPORESTANTE;
    var tempoSTART;
    var tempoSTOP;
    var destaparImagen;
    var flag;
    /**************************************************************************/

    function rellenarPanel() {
        var reloader;
        for (var i = 0; i < ACIERTO; i++) {
            var star = "#nivel" + nivel + " #star" + (i + 1);
            $(star).attr("src", starOFF_ON[1]);
        }
        var panelPuntos = "#nivel" + nivel + " .modal-body .row";
        $(panelPuntos).append('<span class="col-12 modal-nivel puntosTotales mx-auto">' + puntosTotales[nivel] + '</span>');
        var face = "#nivel" + nivel + " .face";
        switch (ACIERTO) {
            case 0:
                reloader = "#nivel" + nivel + " #reload";
                if (nivel > 1) {
                    reloader += ",#nivel" + nivel + " #prev";
                }
                $(face).attr("src", imgAcierto[0]);
                $(reloader).button({
                    disabled: false
                });
                break;
            case 1:
            case 2:
                reloader = "#nivel" + nivel + " #reload,#nivel" + nivel + " #prev,#nivel" + nivel + " #next";
                $(face).attr("src", imgAcierto[2]);
                $(reloader).button({
                    disabled: false
                });
                break;
            case 3:
                reloader = "#nivel" + nivel + " #reload,#nivel" + nivel + " #prev,#nivel" + nivel + " #next";
                $(face).attr("src", imgAcierto[1]);
                $(reloader).button({
                    disabled: false
                });
                break;
        }
        ACIERTO = 0;
        setTimeout(function () {
            $(paneles[nivel]).modal("show");
        }, 500);
    }
    /**************************************************************************/
    /*****************************COLOCAR IMAGENES*****************************/
    function colocarImagenTablero() {
        TIEMPORESTANTE = 0;
        ERROR = 0;
        var posicion = Math.round((Math.random() * (arrayPalabra.length - 1)));
        PALABRA = arrayPalabra[posicion];
        imagen = "url(../imagenes/" + PALABRA + "/" + Math.round((Math.random() * CONSTIMAGEN) + 1) + ".jpg)";
        $("#tablero").css("background-image", imagen);
        $(".descripcion").text('"'+arrayDescripcion[PALABRA]+'"');
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
    function sumaGlobalPuntos() {
        puntosTotales[0] = 0;
        for (var i = nivel; i < nivel + 1; i++) {
            puntosTotales[0] += puntosTotales[nivel];
            $(".puntos-totales").html(puntosTotales[0]);
        }
    }
    function pararTiempo() {
        clearInterval(destaparImagen);
        tempoSTOP = clearInterval(tempoSTART);
    }
    function parada() {
        ACIERTO++;
        descubiertas = [];
        puntosTotales[nivel] += puntos;
        puntos = 0;
        sumaGlobalPuntos();
        $(".puntos").html(puntos);
        COUNT++;
        inicio = 0;
        if (COUNT < 3) {
            level();
        } else {
            COUNT = 0;
            rellenarPanel();
        }
    }
    function paradaDestape() {
        descubiertas = [];
        puntosTotales[nivel] += puntos;
        puntos = 0;
        sumaGlobalPuntos();
        $(".puntos").html(puntos);
        COUNT++;
        inicio = 0;
        if (COUNT < 3) {
            level();
        } else {
            COUNT = 0;
            rellenarPanel();
        }
    }
    function paradaAhorcado() {
        descubiertas = [];
        pararTiempo();
        COUNT++;
        inicio = 0;
        if (COUNT < 3) {
            level();
        } else {
            COUNT = 0;
            rellenarPanel();
        }
    }
    function level() {
        inputsON();
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
        } else {
            destaparAhorcado();
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
            setTimeout(paradaDestape, 5000);
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
    function destapando() {
        inputsOFF();
        puntos += (celdasTablero - descubiertas.length) * 10;
        puntosTotales[nivel] += puntos;
        pararTiempo();
        for (var i = 0; i < $("#tablero").children().length; i++) {
            if (!descubiertas.includes(i)) {
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
            for (var i = 0; i < $("#tablero").children().length; i++) {
                if (descubiertas.includes(i)) {
                    $("#tablero").children().eq(i).children(".green").toggle("fade", "options", 500);
                    descubiertas.pop(i);
                }
            }
            setTimeout(paradaAhorcado, 3000);
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
        $("#letras").select();
        puntos = 0;
        colocarImagenTablero();
        colocarImagenAhorcado();
        pintarTablero();
        pintarAhorcado();
    }
    /**************************************************************************/
    /****************************CREACION DE MODAL*****************************/
    function modalNivel(nivel) {
        $(".niveles").html('<a id="modalNivel" data-toggle="modal" data-target="#nivel' + (nivel - 1) + '">Nivel ' + (nivel - 1) + '</a>');
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
    $("#letras-palabra").keypress(function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code === 13) {
            comprobarPalabra();
        }
    });

    var prev = "#nivel" + nivel + " #prev";
    var next = "#nivel" + nivel + " #next";
    ;
    var reload = "#nivel" + nivel + " #reload";
    ;
    $(prev).click(function () {
        $(paneles[nivel]).modal("hide");
        if (nivel > 1)
            nivel--;
        level();
    });
    $(reload).click(function () {
        $(paneles[nivel]).modal("hide");
        level();
    });
    $(next).click(function () {
        $(paneles[nivel]).modal("hide");
        nivel++;
        level();
    });
});