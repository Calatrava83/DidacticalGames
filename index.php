<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ahorcado</title>
        <!-- ===== ===== ===== ===== ===== ===== ===== -->
        <!-- ===== ===== CSS ===== ===== -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="../jquery-ui/jquery-ui.theme.css"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="card-effect.css"/>
        <link rel="stylesheet" type="text/css" href="style.css"/>
        
        <link rel="icon" href=""/>
        <!-- ===== ===== CSS ===== ===== -->
        <!-- ===== ===== ===== ===== ===== ===== ===== -->
        <!-- ===== ===== SCRIPT ===== ===== -->
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
        <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30=" crossorigin="anonymous"></script>
        <script type="text/javascript" defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous"></script>
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
                                            <img class="mr-2 mt-2 mb-2" src="./svg/person.svg" alt="user"/><span>usuario</span>
                                        </a>
                                    </div>
                                </li>
                                <li class="nav-item hover">
                                    <div>
                                        <a class="nav-link cerrar-sesion mr-2 mb-2" href="#ofrece">
                                            <img class="mr-2 mt-2 mb-2" src="./svg/sign-out.svg" alt="sign-out"/><span>cerrar sesion</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </article>
                <!-- ===== ===== MENU ===== ===== -->
                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                <article class="row">
                    <article id="card" class="col-lg-3 col-md-6 col-sm-6 col-11 mx-auto mt-3 p-2">
                        <div class="tarjeta">
                            <div class="front">
                                <div class="card-img-top">
                                </div>
                                <div class="card-body d-none d-md-flex">
                                    <h6 class="card-title text-center">Maestr&iacute;a en Eficiencia Energ&eacute;tica y energ&iacute;as Renovables</h6>
                                </div>
                                <div class="card-body d-md-none">
                                    <h5 class="card-title col-12 mt-4 mb-3 p-0 pl-1 pr-1 text-center">Maestr&iacute;a en Eficiencia Energ&eacute;tica y energ&iacute;as Renovables</h5>
                                    <div class="col-12 mb-2 mt-4 ml-1">
                                        <div class="row">
                                            <span class="material-icons col-1 pl-2 pr-0 ml-auto">watch_later</span>
                                            <span class="col-10 text-left pr-0 mr-auto">87 Créditos</span>
                                            <span class="col-12"></span>
                                            <span class="material-icons col-1 pl-2 pr-0 ml-auto">school</span>
                                            <span class="col-10 text-left pr-0 mr-auto">Modalidad Online</span>
                                            <span class="col-12"></span>
                                            <span class="material-icons col-1 pl-2 pr-0 ml-auto">star</span>
                                            <span class="col-10 text-left pr-0 mr-auto">Beca del 50%</span>
                                        </div>
                                    </div>
                                    <span class="col-12 mt-4">
                                        <div class="row">
                                            <a data-toggle="modal" data-target="#form" class="col-10 mx-auto btn btn-primary font-weight-bold curso">M&aacute;s informaci&oacute;n</a>
                                            <input class="d-none" value="MAESTRÍA EN EFICIENCIA ENERGÉTICA Y ENERGÍAS RENOVABLES">
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div class="back ">
                                <div class="card-back row p-2">
                                    <h5 class="card-title col-12 mt-4 mb-3 p-0 pl-1 pr-1 text-center">Maestr&iacute;a en Eficiencia Energ&eacute;tica y energ&iacute;as Renovables</h5>
                                    <div class="col-12 mb-2 mt-4 ml-1">
                                        <div class="row">
                                            <span class="material-icons col-1 pl-2 pr-0 ml-auto">watch_later</span>
                                            <span class="col-10 text-left pr-0 mr-auto">87 Créditos</span>
                                            <span class="col-12"></span>
                                            <span class="material-icons col-1 pl-2 pr-0 ml-auto">school</span>
                                            <span class="col-10 text-left pr-0 mr-auto">Modalidad Online</span>
                                            <span class="col-12"></span>
                                            <span class="material-icons col-1 pl-2 pr-0 ml-auto">star</span>
                                            <span class="col-10 text-left pr-0 mr-auto">Beca del 50%</span>
                                        </div>
                                    </div>
                                    <span class="col-12 mt-4">
                                        <div class="row">
                                            <a data-toggle="modal" data-target="#form" class="col-10 mx-auto btn btn-primary font-weight-bold curso">M&aacute;s informaci&oacute;n</a>
                                            <input class="d-none" value="MAESTRÍA EN EFICIENCIA ENERGÉTICA Y ENERGÍAS RENOVABLES">
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article id="card" class="col-lg-3 col-md-6 col-sm-6 col-11 mx-auto mt-3 p-2">
                        <div class="tarjeta">
                            <div class="front">
                                <div class="card-img-top">
                                </div>
                                <div class="card-body d-none d-md-flex">
                                    <h6 class="card-title text-center">Maestr&iacute;a en Community Manager y Posicionamiento Web</h6>
                                </div>
                                <div class="card-body d-md-none">
                                    <h5 class="card-title col-12 mt-4 mb-3 p-0 pl-1 pr-1 text-center">Maestr&iacute;a en Community Manager y Posicionamiento Web</h5>
                                    <div class="col-12 mb-2 mt-4 ml-1">
                                        <div class="row">
                                            <span class="material-icons col-1 pl-2 pr-0 ml-auto">watch_later</span>
                                            <span class="col-10 text-left pr-0 mr-auto">87 Créditos</span>
                                            <span class="col-12"></span>
                                            <span class="material-icons col-1 pl-2 pr-0 ml-auto">school</span>
                                            <span class="col-10 text-left pr-0 mr-auto">Modalidad Online</span>
                                            <span class="col-12"></span>
                                            <span class="material-icons col-1 pl-2 pr-0 ml-auto">star</span>
                                            <span class="col-10 text-left pr-0 mr-auto">Beca del 50%</span>
                                        </div>
                                    </div>
                                    <span class="col-12 mt-4">
                                        <div class="row">
                                            <a data-toggle="modal" data-target="#form" class="col-10 mx-auto btn btn-primary font-weight-bold curso">M&aacute;s informaci&oacute;n</a>
                                            <input class="d-none" value="MAESTRÍA EN COMMUNITY MANAGER Y POSICIONAMIENTO WEB">
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div class="back ">
                                <div class="card-back row p-2">
                                    <h5 class="card-title col-12 mt-4 mb-3 p-0 pl-1 pr-1 text-center">Maestr&iacute;a en Community Manager y Posicionamiento Web</h5>
                                    <div class="col-12 mb-2 mt-4 ml-1">
                                        <div class="row">
                                            <span class="material-icons col-1 pl-2 pr-0 ml-auto">watch_later</span>
                                            <span class="col-10 text-left pr-0 mr-auto">87 Créditos</span>
                                            <span class="col-12"></span>
                                            <span class="material-icons col-1 pl-2 pr-0 ml-auto">school</span>
                                            <span class="col-10 text-left pr-0 mr-auto">Modalidad Online</span>
                                            <span class="col-12"></span>
                                            <span class="material-icons col-1 pl-2 pr-0 ml-auto">star</span>
                                            <span class="col-10 text-left pr-0 mr-auto">Beca del 50%</span>
                                        </div>
                                    </div>
                                    <span class="col-12 mt-4">
                                        <div class="row">
                                            <a data-toggle="modal" data-target="#form" class="col-10 mx-auto btn btn-primary font-weight-bold curso">M&aacute;s informaci&oacute;n</a>
                                            <input class="d-none" value="MAESTRÍA EN COMMUNITY MANAGER Y POSICIONAMIENTO WEB">
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>
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
