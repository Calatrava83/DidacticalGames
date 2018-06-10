<?php
require_once 'funcionesPage.php';
?>
<!DOCTYPE html>
<!--
ESTA PAGINA INCLUYE LOS FORMUALRIOS PARA AÑADIR TANTO EMOCIONES NUEVAS COMO PREGUNTAS NUEVAS PARA EL JUEGO emotionQuiz
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Administrador de preguntas</title>
            <!-- JQUERY -->
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
            <!--  BootStrap 4.1.1  -->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css">
        <script src="adminpreguntas.js"></script>
    </head>

    <body class="container">
        <section id="errores" class="row ">

        </section>
        <section id="formPreguntas" class="row">
           <!--FORMULARIOS PARA INSERTAR UNA NUEVA PREGUNTA E AÑADIR UNA NUEVA EMOCION EN NUESTRA BASE DE DATOS -->
        <article class="col-md-12 ml-md-5 form-group border border-dark rounded">

            <form id="pregunta" method="post" enctype="multipart/form-data">
                <fieldset>
                    <legend>Añadir pregunta</legend>
                    <div class="input-group mb-3">
                        <label class="input-group-prepend input-group-text">Nivel destinado:</label>
                        <input class="form-control" id="nivel" type="number" min="1" max="10" name="level"/>
                   <label class="input-group-prepend input-group-text">Pregunta:</label>
                   <input class="" id="pregunta1" type="text" name="question"/><br>
                   <label class="">Emocion asignada:</label>
                   <select class="custom-select" id="emocion" name="emociones">
                       <?php
                        getEmociones();
                       ?>
                   </select><br>
                    </div>

                   <div id="opciones" class="form-group">
                        <?php
                        for($i=1;$i<5;$i++){
                            print "<label>Opcion ".$i."</label><input id='opcion$i' type='text' name='op$i'/><input id='solucion' type='radio' name='sol' value='op$i'/><label>Es la correcta</label><br>";
                        }
                        ?>
                    </div>
                    <div class="dummyfile input-group">
                        <label class="input-group-prepend input-group-text">Imagen relacionada con la pregunta</label>
                        <input class="form-control" type="file" id="imagen" name="fichero"/>

                    </div>
                    
                    <input class="btn" id='savebutton' type="button" value="Añadir Pregunta" name= "save"/>
                    <input type="reset" class="btn btn-danger" id="reset" value="Limpiar"/>
                </fieldset>
            </form>
        </article>
            <article id="formEmocion" class="col-md-4 border border-dark rounded">
                <form id="estadoanimo" class="form-group" method="get">
                    <fieldset>
                    <legend>Añadir emocion</legend>
                    <input type="text" maxlength="256" name='emocion'/><br>
                    <input type="submit" value="Añadir emoción" name="add_emocion"/>
                    </fieldset>
                </form>
            </article>
        </section>
        <!--TABLA DONDE SE MUESTRAN  TODAS LAS PREGUNTAS INSERTADAS EN NUESTRA BASE DE DATOS-->
        <section class="row">
            <input type="button" value="Refrescar la tabla" class="btn btn-info" id="refrescar"/>
        </section>
        <section class="row">
            <article class="col-md-12 panel">
                <div class="panel panel-body">
                <table class="table">
                    <thead>
                        <th>Numero de pregunta</th>
                        <th>Nivel</th>
                        <th>Emocion asignado</th>
                        <th>Pregunta</th>
                        <th>Respuesta Correcta</th>
                    </thead>
                    <tbody id="visor_preguntas">

                    </tbody>
                </table>
                </div>
            </article>
        </section>
    </body>
</html>
