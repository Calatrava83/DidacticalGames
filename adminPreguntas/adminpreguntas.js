$(document).ready(function(){
    function validacion(){

        var errores = [];
        var emocion = $("#emocion option:selected").val();
        var nivel = $("#nivel").val();
        var pregunta = $("#pregunta1").val();
        var imagen = $("#imagen");
        console.log(imagen);


        var respuestas = [];
        for(var i =1;i<5;i++){
            var op="#opcion"+i;
            var opcion  = $(op).val();
            respuestas.push(opcion);

        }
        var sol= $("#solucion:checked").val();
        if(sol == ""){
            errores.push("Tienes que elegir una de las opciones como respuesta correcta");
        }
        if(nivel== ""){
            errores.push("Tienes que elegir un nivel entre 1 y 10 ambos inclusive");
        }
        if(nivel<1 && nivel>10){
            errores.push("Solo puede seleccionar los niveles del 1 al 10");
        }
        if(pregunta == "" || pregunta == null){
            errores.push("El campo pregunta no puede estar vacio");
        }else if(pregunta.length < 3){
            errores.push("La pregunta tiene que ser mas larga");
        }

        for(var a=0;a<respuestas.length;a++){
            if(respuestas[a]== ""){
                errores.push("El campo opcion "+a+" esta vacio");
            }
        }
        if(errores.length>0){
            vaciar();
            $("#errores").html("<ul>");
            for(var fallos =0;fallos<errores.length;fallos++){
                $("#errores ul").append("<li class='alert alert-danger'>"+errores[fallos]+"</li>");
            }

        }else{
            var datos = new FormData();
            //EJECUCION DE INSERTADO DE LA PREGUNTA Y SUS OPCIONES//
            datos.append('level',nivel);
            datos.append('question',pregunta);
            datos.append('op1',respuestas[0]);
            datos.append('op2',respuestas[1]);
            datos.append('op3',respuestas[2]);
            datos.append('op4',respuestas[3]);
            datos.append('sol',sol);
            datos.append('emocion',emocion);
            datos.append('imagen',imagen[0].files[0]);
            //console.log(datos.get('level'));
           $.ajax({
                url:"insertadoPregunta.php",
                type:'POST',
               processData:false,
               contentType: false,
              /*  data:{
                    level: nivel,
                    question: pregunta,
                    op1: respuestas[0],
                    op2:respuestas[1],
                    op3:respuestas[2],
                    op4:respuestas[3],
                    sol:sol,
                    emocion: emocion,
                    imagen : fichero
                },*/
                data:datos,
                success: function(){
                    alert('Operacion de insertado en marcha');
                },
                error: function(){
                    alert('No se ha cargado bien');
                }
            });

        }

        refreshTable();
    }

    function refreshTable(){
        $("#visor_preguntas").empty();
         //ESTE ESTA DESTINADO A VISUALIZAR LAS PREGUNTAS DE LA BASE DE DATOS//
            $.ajax({
                url:"pagePreguntas.php",
                type:'get',
                success:function(response){

                    var preguntas = JSON.parse(response);
                   for(var clase in preguntas){
                       $("#visor_preguntas").append("<tr>");
                       for(var i =0; i<preguntas[clase].length; i++){
                       $("#visor_preguntas tr:last-child").append("<td>"+preguntas[clase][i]+"</td>");

                       }
                       $("#visor_preguntas tr:last-child").append("<td><a class='btn btn-default' href='index.php?&delete="+preguntas[clase][0]+"'>Borrar</a></td>");
                   }

                },
                error:function(){
                    alert("ha ocurrido un error");
                }
            });
    }

    function vaciar(){
        $("#errores").empty();
    }

    $("#savebutton").click(validacion);
    $("#reset").click(vaciar);
    $("#refrescar").click(refreshTable);
});
