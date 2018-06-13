<?php
require_once '../admin/adminPreguntas/config.php';
require_once '../admin/adminPreguntas/Dbactions.php';
$_SESSION['user'][0]=1;

function obtainUsuario($sesion){
$db = new dbactions();
    
    $user=$db->queryRow("SELECT nombre from usuario where idUser = ".$_SESSION['user'][0]);
    $sesion[1]=$user->nombre;
    print "<input id='id_user' type='text' disabled hidden value= '".$sesion[0]."'/>";
    print "<input id='nombre' type='text' disabled hidden value= '".$sesion[1]."'/>";
    return $sesion[1];
}
?>  
<!DOCTYPE html>
<html>
    <head>
        <title>Juego 1</title>
        <meta charset="utf-8">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30=" crossorigin="anonymous"></script>
        <script type="text/javascript" defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="index.css">
        <script src="preguntas.js"></script>
    </head>
    <body>
        <?php include '../ficheros/modales.php'; ?> 
        <?php 
            if(isset($_SESSION['user'])){
               $usuario=obtainUsuario($_SESSION['user']);
               
            }
        ?>
        <audio id='acierto' src="sounds/acierto.mp3" ></audio>
        <audio id ='fail' src="sounds/fail.mp3"></audio>
        <div class="container">

            <!-- ===== ===== ===== ===== ===== ===== ===== -->
            <!-- ===== ===== MENU ===== ===== -->
            <article class="row">
                <nav id="menu" class=" navbar navbar-dark">
                    <span class="menu" data-toggle="collapse" 
                          data-target="#navbars" aria-controls="navbars" aria-expanded="false" 
                          aria-label="Toggle navigation"><span id="boton" class="navbar-toggler-icon m-2"></span>Menu</span>
                    <div class="collapse navbar-collapse" id="navbars">
                        <ul class="navbar-nav">
                            <li class="nav-item hover ">
                                <div id="user">
                                    <a class="nav-link user" data-toogle="modal" data-target="#usuario">
                                        <img class="mr-2 mt-2 mb-2" src="../svg/person.svg" alt="user"/><span><?php print $usuario; ?></span>
                                    </a>
                                </div>
                            </li>
                            <li class="nav-item hover">
                                <div>
                                    <a class="nav-link ml-3" data-toggle="modal" data-target="#reglas">
                                        <img class="mr-2 mt-2 mb-2" src="../svg/checklist.svg" alt="reglas"/><span>Reglas de juego</span>
                                    </a>
                                </div>
                            </li>
                            <li class="nav-item hover">
                                <div>
                                    <a class="nav-link cerrar-sesion mr-2 mb-2" href="#ofrece">
                                        <img class="mr-2 mt-2 mb-2" src="../svg/sign-out.svg" alt="sign-out"/><span>cerrar sesion</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </article>
            <!-- ===== ===== ===== ===== ===== ===== ===== -->
            <!-- ===== ===== MODAL-REGLAS ===== ===== -->
            <?php imprimirReglasQuiz(); ?>
            <!-- ===== ===== ===== ===== -->
            <!-- ===== ===== MODAL PARA SIGUIENTE NIVEL/REPETIR===== ===== -->
            <?php imprimirModalQuiz();?>
            <!-- ===== =====  ===== ===== -->
            <!-- ===== ===== MODAL-JUGADOR ===== ===== -->
            <?php if(isset($_SESSION['user'])){estadisticasJugador($usuario);}?>
            <!-- ===== ===== ===== ===== ===== ===== ===== -->
            <!-- ===== ===== MENU ===== ===== -->
            <!-- ===== ===== ===== ===== ===== ===== ===== -->
            
            
            <header class="row" id="informacion">
                <article class="col-md-4 d-none">
                    <h3>Numero de pregunta</h3><br>
                    <span id="num_pregunta">0</span>
                </article>
                <article id="tempo" class="ml-md-auto mr-md-auto col-md-5">
                    <span>Tiempo: <span id="tiempo">99</span></span>

                </article>
            </header>
            <!--Seccion central donde se desarrolla el juego!-->
            <section class="row" class="">
                <article  id="Nivel" class="ml-md-auto col-md-2 nivel ">
                    <span>Nivel: <span id="nivel">1</span></span>
                </article>
            </section>
            <!--Esto es para mostrar la pregunta que saldra de la bdd !-->
            <section class="row ">
                <article class="col-md-12 question text-center">
                    <h4 id="question">PREGUNTA DE PRUEBA</h4>
                </article>
            </section>
            <section class="row ">
                <article id="imagen" class="col-md-12">
                    <img  src="" class="rounded" alt="Imagen relacionado con pregunta">
                </article>
            </section>
            <section class="row" id="respuestas">
                <article class='col-md-12 col-sm-12'>
                    <form class='row '>
                        <input class='respuesta btn col-md-5 ' type="button" value='Boton1' name='A'>
                        <input class='respuesta btn col-md-5 ' type="button" value='Boton2' name='B'>
                        <input class='respuesta btn col-md-5 ' type="button" value='Boton3' name='C'>
                        <input class='respuesta btn col-md-5 ' type="button" value='Boton4' name='D'>
                    </form>
                </article>
            </section>

<!--            <div id="dialog" title="¡Respuesta correcta!" class="d-none">
                <p>Has acertado,¿Que quieres hacer? </p>
            </div>  
            <div id="dialog_error" title="¡Respuesta Incorrecta!" class="d-none">
                <p>Te has equivocado, ¿Que quieres hacer?</p>
            </div>-->
            
            
            <article class="row ">
                <!--===== ===== ===== ===== ===== ===== =====--> 
                <!--===== ===== COPYGATE ===== =====--> 
                <section class="footer col-2 ml-auto mt-4 text-center small fixed-bottom">
                    <a href="../user/index.php"><i data-toggle="tooltip" title="Dejar de jugar" class="material-icons">backspace</i></a>
                </section>
                <section class="footer col-6 ml-auto mr-auto mt-4 text-center small fixed-bottom ">
                    <span>Copygate &Psi; 2018 www.didactical-games.com</span>
                </section>
                <!--===== ===== COPYGATE ===== =====--> 
                <!--===== ===== ===== ===== ===== ===== =====--> 
            </article>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
    </body>
</html>
