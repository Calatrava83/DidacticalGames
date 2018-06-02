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
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
        <script type="text/javascript" defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous"></script>
        <script type="text/javascript" src="script/script-ui.js"></script>
        <script>
            $(document).ready(function () {
                /**************************************************************/
                /*VELOCIDAD SCROLL*/

                //gestión de la velocidad del scroll al pulsar el boton de inicio
                linkInterno = $('a[href^="#"]');
                linkInterno.on('click', function (e) {
                    e.preventDefault();
                    var href = $(this).attr('href');
                    $('html, body').animate({
                        scrollTop: $(href).offset().top
                    }, 1250, 'easeInOutSine');
                });
                /**************************************************************/
                /**************************************************************/
                /*BOTON INICIO*/
                $(".footer").hide();
                $(".inicio").hide();

                //funcion para mostrar u ocultar el boton para subir al header
                function scrollMenu() {
                    $(window).scroll(function (event) {
                        var scroll = $(window).scrollTop();
                        if (scroll > 70) {
                            $(".inicio").fadeIn("fast");
                        } else {
                            $(".inicio").fadeOut("fast");
                        }
                        console.log($(".footer").offset());
                        if (scroll > 1900) {
                            $(".footer").show();
                        } else {
                            $(".footer").hide();
                        }
                    });
                }
                scrollMenu();
                /**************************************************************/
            });
        </script>
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
                                        <a class="nav-link mr-2 mb-2" href="#juegos">
                                            <span class=" mr-2 mt-2 mb-2 fas fa-gamepad"></span><span class="col-10">Juegos</span>
                                        </a>
                                    </div>
                                </li>
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
                <article id="asperger" class="row border">

                </article>
                <article id="autismo" class="row border">

                </article>
                <article id="juegos" class="row">
                    <article id="card" class="col-lg-3 col-md-6 col-sm-6 col-11 ml-auto mr-auto mt-auto mb-auto">
                        <div class="tarjeta row">
                            <div class="front col-12">
                                <div class="card-img-top quiz">
                                </div>
                            </div>
                            <div class="back col-12 ">
                                <div class="card-back row p-2">
                                    <a href="quizTest/index.php" class="col-auto mx-auto btn btn-primary font-weight-bold curso">Jugar</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article id="card" class="col-lg-3 col-md-6 col-sm-6 col-11 ml-auto mr-auto mt-auto mb-auto">
                        <div class="tarjeta row">
                            <div class="front col-12">
                                <div class="card-img-top ahorcado">
                                </div>
                            </div>
                            <div class="back col-12 ">
                                <div class="card-back row p-2">
                                    <a href="ahorcado/index.php" class="col-auto mx-auto btn btn-primary font-weight-bold curso">Jugar</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article id="card" class="col-lg-3 col-md-6 col-sm-6 col-11 ml-auto mr-auto mt-auto mb-auto">
                        <div class="tarjeta row">
                            <div class="front col-12">
                                <div class="card-img-top memory-game">
                                </div>
                            </div>
                            <div class="back col-12 ">
                                <div class="card-back row p-2">
                                    <a href="#" class="proximamente col-auto mx-auto btn btn-primary font-weight-bold curso">Proximamente</a>
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
                    <div class="inicio text-center pl-0 pr-0 fixed-bottom ml-auto col-1"><a class="material-icons" href="#asperger">keyboard_arrow_up</a></div>
                    <section class="footer col-6 ml-auto mr-auto mt-4 text-center small fixed-bottom">
                        <span>Copygate &Psi; 2018 www.didactical-games.com</span>
                    </section>
                    <!--===== ===== COPYGATE ===== =====--> 
                    <!--===== ===== ===== ===== ===== ===== =====--> 
                </article>
            </div>
        </section>     
    </body>
</html>
