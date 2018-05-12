<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ahorcado</title>
        <!-- ===== ===== ===== ===== ===== ===== ===== -->
        <!-- ===== ===== CSS ===== ===== -->
        <link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.css"/>
        <link rel="stylesheet" type="text/css" href="../jquery-ui/jquery-ui.css"/>
        <link rel="stylesheet" type="text/css" href="../jquery-ui/jquery-ui.structure.css">
        <link rel="stylesheet" type="text/css" href="../jquery-ui/jquery-ui.theme.css"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="styles.css"/>
        <link rel="icon" href=""/>
        <!-- ===== ===== CSS ===== ===== -->
        <!-- ===== ===== ===== ===== ===== ===== ===== -->
        <!-- ===== ===== SCRIPT ===== ===== -->
        <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="../bootstrap/js/bootstrap.js"></script>
        <script type="text/javascript" src="../bootstrap/js/bootstrap.bundle.js"></script>
        <script type="text/javascript" src="../jquery-ui/jquery-ui.js"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous"></script>
        <script type="text/javascript" src="script/script-ui.js"></script>
        <!-- ===== ===== SCRIPT ===== ===== -->
        <!-- ===== ===== ===== ===== ===== ===== ===== -->
        <style>
            .borderA{
                border:1px double black;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <?php include './ficheros/modales.php'; ?>
        <section class="container-fluid">
            <div  id="body" class="p-0">
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
                                    <div>
                                        <a class="nav-link user" href="">
                                            <img class="mr-2 mt-2 mb-2" src="../svg/person.svg" alt="user"/><span>usuario</span>
                                        </a>
                                    </div>
                                </li>
                                <li class="nav-item hover">
                                    <div>
                                        <a class="nav-link ml-3" data-toggle="modal" data-target="#niveles">
                                            <img class="mr-2 mt-2 mb-2" src="../svg/list-ordered.svg" alt="niveles"/><span>Niveles</span>
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
                <!-- ===== ===== MENU ===== ===== -->
                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                <!-- ===== ===== MODAL-NIVELES ===== ===== -->
                                    <?php imprimirNiveles(); ?>
                                
                <!-- ===== ===== MODAL-NIVELES ===== ===== -->
                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                <!-- ===== ===== MODAL-NIVELES ===== ===== -->
                <?php imprimirModalNiveles(); ?>
                <!-- ===== ===== MODAL-NIVELES ===== ===== -->
                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                <!-- ===== ===== MODAL-REGLAS ===== ===== -->
                <?php imprimirReglasAhorcado(); ?>
                <!-- ===== ===== MODAL-REGLAS ===== ===== -->
                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                <article class="row">
                    <section class="col-12">
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <!-- ===== ===== HEADER ===== ===== -->
                        <header class="row">
                            <!-- ===== ===== NIVEL ===== ===== -->
                            <section id="nivel" class="col-12 mx-auto text-right pr-4 pb-xl-2 font-weight-bold"></section>
                            <!-- ===== ===== NIVEL ===== ===== -->
                        </header>
                        <!-- ===== ===== HEADER ===== ===== -->
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <article class="row ">
                            <!-- ===== ===== ===== ===== ===== ===== ===== -->
                            <!-- ===== ===== PISTA ===== ===== -->
                            <section id="" class="descripcion col-xl-8 col-lg-7 mx-auto mb-3 text-center"><span class=""></span></section>
                            <!-- ===== ===== PISTA ===== ===== -->
                            <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        </article>
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <!-- ===== ===== BODY ===== ===== -->
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <!-- ===== ===== START ===== ===== -->
                        <article class="row ">
                            <button id="start"  class="col-2 mx-auto pb-3 pl-3 pr-3 start" name="start">Start</button>
                        </article>
                        <!-- ===== ===== START ===== ===== -->
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <article class="row">
                            <section class="col-5 ml-auto">
                                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                                <!-- ===== ===== TABLERO ===== ===== -->
                                <article id="tablero" class="row"></article>
                                <!-- ===== ===== TABLERO ===== ===== -->
                                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                            </section>
                            <!-- ===== ===== TABLERO ===== ===== -->
                            <!-- ===== ===== ===== ===== ===== ===== ===== -->
                            <section id="" class="col-5 mr-auto mt-5 mb-auto">
                                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                                <!-- ===== ===== TABLERO AHORCADO ===== ===== -->
                                <article class="row">
                                    <section class="col-6 ml-auto mr-auto mt-auto mb-5 ">
                                        <article id="tablero-ahorcado" class="row">
                                        </article>
                                    </section>
                                </article>
                                <article class="row">
                                    <section class="col-12 mx-auto mt-5 text-center">
                                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                                        <!-- ===== ===== PALABRA ===== ===== -->
                                        <article id="palabra" class="row"></article>
                                        <!-- ===== ===== PALABRA ===== ===== -->
                                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                                    </section>
                                </article>
                                <!-- ===== ===== TABLERO AHORCADO ===== ===== -->
                                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                            </section>
                        </article>
                    </section>
                    <!-- ===== ===== TIEMPO ===== ===== -->
                    <!-- ===== ===== ===== ===== ===== ===== ===== -->
                </article>
                <article id="seccion" class="row">
                    <section class="col-6 ml-auto mr-auto mt-3 mb-auto ">
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <!-- ===== ===== COMPROBAR LETRA ===== ===== -->
                        <article id="letra" class="row">
                            <label class="col-12 mx-auto text-center ">Introduce la letra a comprobar</label>
                            <input class="col-2 mx-auto text-center letra" type="text" name="letra" id="letras" min="1" maxlength="1"/>
                        </article>
                        <!-- ===== ===== COMPROBAR LETRA ===== ===== -->
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                    </section>
                    <section class="col-10 ml-auto mr-auto mt-2 mb-1 ">
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <!-- ===== ===== COMPROBAR PALABRA ===== ===== -->
                        <article id="nombre-palabra" class="row">
                            <label class="col-12 col-lg-6 mx-auto text-center ">Introduce la palabra para comprobarla</label>
                            <div class="col-12"></div>
                            <div class="comprueba col-lg-12 col-12 text-center input-group">
                                <input class="ml-auto text-center" type="text" name="letra" id="letras-palabra" />
                                <div class="input-group-append mr-auto">
                                    <button id="comprobar-palabra" class="p-0"><img class="pt-0 pl-1 pb-0 pr-1" src="../svg/arrow-right.svg" alt="comprobar"></button>
                                </div>
                            </div>
                        </article>
                        <!-- ===== ===== COMPROBAR PALABRA ===== ===== -->
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                    </section>
                </article>
                <!-- ===== ===== BODY ===== ===== -->
                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                <article class="row ">
                    <!--===== ===== ===== ===== ===== ===== =====--> 
                    <!--===== ===== COPYGATE ===== =====--> 
                    <section class="footer col-6 ml-auto mr-auto mt-4 text-center small ">
                        <span>Copygate &Psi; 2018 www.didactical-games.com</span>
                    </section>
                    <!--===== ===== COPYGATE ===== =====--> 
                    <!--===== ===== ===== ===== ===== ===== =====--> 
                </article>
            </div>
        </section>     
    </body>
</html>
