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

    function pintarTablero() {
        var tablero = "";
        for (var i = 0; i < 36; i++) {
            tablero += "<div class='tablero col-2'><div class='green'></div></div>";
        }
        $("#tablero").html(tablero);
        ocultacion($("#tablero").children());
    }


    var descubiertas;
    var puntos; 
    
    

    function ocultacion(tablero) {
        var posicion_tablero;
        descubiertas = [];
        for (var i = 0; i < 1; i++) {
            posicion_tablero = Math.round((Math.random() * tablero.length));
            if (descubiertas.length < 1) {
                descubiertas.push(posicion_tablero);
                $("#tablero").children().eq(posicion_tablero).children(".green").toggle("clip", 1500);
            } else if (descubiertas.includes(posicion_tablero)) {
                i--;
            } else {
                descubiertas.push(posicion_tablero);
                $("#tablero").children().eq(posicion_tablero).children(".green").toggle("clip", "options", 5000);
            }
        }
    }




    $(pintarTablero);


});