$(document).ready(function () {

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
});