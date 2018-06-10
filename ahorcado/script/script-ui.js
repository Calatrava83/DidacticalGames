$(document).ready(function () {

//    $("#estadistica").modal("show"); /*asi se ejecuta el modal de forma automatica*/

    $("a[name='nivel1'],a[name='nivel2'],a[name='nivel3'],a[name='nivel4'],a[name='nivel5'],a[name='nivel6'],a[name='nivel7'],a[name='nivel8']").click(function () {
        var panel = '#' + $(this).attr("name");
        setTimeout(function () {
            $("#niveles").modal("hide");
        }, 100);
        setTimeout(function () {
            $(panel).modal("show");
        }, 100);

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
    /**************************************************************************/
    /**************variables que se rellenan con la base de datos**************/
    var arrayPalabra = [];
    var arrayDescripcion = [];
    var paneles = [];
    /**************************************/
    function ajaxEstado() {
        $.ajax({
            url: "../ahorcado/script/ajax_estado.php",
            type: 'POST',
            async: false,
            success: function (response) {
                lista = response;
            },
            error: function () {
                alert("Ha ocurido un error");
            }
        });
        return lista;
    }
    var lista = JSON.parse(ajaxEstado());
    for (var i = 0; i < lista.length; i++) {
        arrayPalabra.push(lista[i][0]);
        arrayDescripcion[lista[i][0]] = lista[i][1];
    }
    /**************************************/
    /**************************************/
    function ajaxNiveles() {
        $.ajax({
            url: "../ahorcado/script/ajax_niveles.php",
            type: 'POST',
            async: false,
            success: function (response) {
                ajaxNivel = response;
            },
            error: function () {
                alert("Ha ocurido un error");
            }
        });
        return ajaxNivel;
    }
    var ajaxNivel = JSON.parse(ajaxNiveles());
    for (var i = 0; i < ajaxNivel.length; i++) {
        paneles[ajaxNivel[i][0]] = ajaxNivel[i][1];
    }
    /**************************************/
    function insertarDatosPartida(){
        $.post("ajax_user.php",{id_user:this.idJugador,tiempo:tiempo,nivel:nivel},function(){
               alert("guardado exitoso");
                tiempoNiveles[nivel]=tiempo;
                
            });
    }
    /**************************************************************************/
    /**************************************************************************/
    var PALABRA = "";
    var letra = "";
    var arrayPALABRA = "";
    var CONSTIMAGEN = 4;
    var imagen = "";
    var nivel = 1;
    var puntos;
    var puntosTotales = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0};
    var puntosLetra = {1: 5, 2: 10, 3: 15, 4: 20, 5: 25, 6: 30, 7: 35, 8: 40};
    var puntosPalabra = {1: 20, 2: 30, 3: 40, 4: 50, 5: 60, 6: 70, 7: 80, 8: 90};
    var celdasTablero = 36;
    var descubiertas = [];
    var COUNT = 0;
    var ACIERTO = 0;
    var ERROR;
    var longitud_3 = [[6, 3], [0, 1, 2], [4, 5, 7, 8]];
    var longitud_5 = [[6], [3], [0, 1, 2], [4, 5], [7, 8]];
    var longitud_6 = [[6], [3], [0], [1, 2], [4, 5], [7, 8]];
    var longitud_7 = [[6], [3], [0], [1], [2], [4, 5], [7, 8]];
    var longitud_8 = [[6], [3], [0], [1], [2], [4], [5], [7, 8]];
    var longitud_9 = [[6], [3], [0], [1], [2], [4], [5], [7], [8]];
    var inicio = 0;
    var segundo = 1000;
    var tiempoOcultacion = {1: 1000, 2: 1500, 3: 2000, 4: 2500, 5: 3000, 6: 3500, 7: 4000, 8: 4500};
    var TIEMPORESTANTE;
    var tempoSTART;
    var tempoSTOP;
    var destaparImagen;
    var flag;
    var prev = "#nivel" + nivel + " #prev";
    var next = "#nivel" + nivel + " #next";
    var reload = "#nivel" + nivel + " #reload";
    /**************************************************************************/

    function rellenarPanel() {
        var reloader;
        for (var i = 0; i < 3; i++) {
            var star = "#nivel" + nivel + " #star" + (i + 1);
            $(star).removeClass("gold");
        }
        for (var i = 0; i < ACIERTO; i++) {
            var star = "#nivel" + nivel + " #star" + (i + 1);
            $(star).addClass("gold");
        }
        var panelPuntos = "#nivel" + nivel + " .modal-body .puntaje";
        $(panelPuntos).html('<span class="col-12 pt-3 text-center modal-nivel puntosTotales mx-auto">' + puntosTotales[nivel] + ' P</span>');
        var face = "#nivel" + nivel + " .face";
        switch (ACIERTO) {
            case 0:
                reloader = "#nivel" + nivel + " #reload";
                if (nivel > 1) {
                    reloader += ",#nivel" + nivel + " #prev";
                }
                $(face).html('<span class="text-center fas fa-frown fa-9x"></span>');
                $(reloader).button({
                    disabled: false
                });
                break;
            case 1:
            case 2:
                reloader = "#nivel" + nivel + " #reload,#nivel" + nivel + " #prev,#nivel" + nivel + " #next";
                $(face).html('<span class="text-center fas fa-meh fa-9x"></span>');
                $(reloader).button({
                    disabled: false
                });
                break;
            case 3:
                reloader = "#nivel" + nivel + " #reload,#nivel" + nivel + " #prev,#nivel" + nivel + " #next";
                $(face).html('<span class="text-center fas fa-smile fa-9x"></span>');
                $(reloader).button({
                    disabled: false
                });
                break;
        }
        ACIERTO = 0;
        setTimeout(function () {
            $(paneles[nivel]).modal("show");
            prev = "#nivel" + nivel + " #prev";
            next = "#nivel" + nivel + " #next";
            reload = "#nivel" + nivel + " #reload";
            nivel++;
            $(".letra").val("");
            $("#letras-palabra").val("");
            $(prev).click(function () {
                $(paneles[nivel]).modal("hide");
                if (nivel > 1)
                    nivel -= 2;
                level();
            });
            $(reload).click(function () {
                $(paneles[nivel]).modal("hide");
                nivel--;
                level();
            });
            $(next).click(function () {
                $(paneles[nivel]).modal("hide");
                level();
            });
        }, 100);
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
        $("#tablero").css("box-shadow", "0px 0px 30px #0060a1");
        $(".descripcion span").text('"' + arrayDescripcion[PALABRA] + '"');
        $(".descripcion").attr("style", "background-color: rgba(0, 96, 161, 0.55);height:140px;");
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
        for (var i = 0; i < PALABRA.length; i++) {
            if (i === 0) {
                palabra += "<section class='col-auto oculta p-0 ml-md-auto mr-1'><span class=''>" + PALABRA[i].toUpperCase() + "</span></section>";
            } else if ((i + 1) === PALABRA.length) {
                palabra += "<section class='col-auto oculta p-0 ml-1 mr-md-auto'><span class=''>" + PALABRA[i].toUpperCase() + "</span></section>";
            } else {
                palabra += "<section class='col-auto oculta p-0 ml-1 mr-1'><span class=''>" + PALABRA[i].toUpperCase() + "</span></section>";
            }
        }
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
        if (screen.width > 720) {
            puntos += (celdasTablero - descubiertas.length) * 10;
        }
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
    }
    /**************************************************************************/
    /**************************************************************************/
    function animacion() {
        $("#seccion").attr("style", "display:flex");
        $("#comprobar-palabra,#letras,#letras-palabra").button({
            disabled: false
        });
        $(".start").button({
            disabled: true
        });
        $(".start").hide();
        $("#letras").select();
        $("#nivel").text("Nivel " + nivel);

        puntos = 0;

        colocarImagenTablero();
        colocarImagenAhorcado();
        pintarTablero();
        pintarAhorcado();
    }
    /**************************************************************************/
    /****************************CREACION DE MODAL*****************************/
    /**************************************************************************/
    /**************************************************************************/

    /**************************************************************************/
    /**************************************************************************/
    $(function () {
        if (screen.height > 719.98) {
            var height = "max-height:" + (screen.height - 100) + "px ; max-width:" + (screen.width) + "px ;overflow: hidden;";
        } else {
            var height = "max-height:" + (screen.height + 80) + "px ; overflow: hidden;";
        }
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

    /*******************/
    $('[data-toggle="tooltip"]').tooltip();
    /*******************/

});