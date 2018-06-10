<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Juegos didacticos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- ===== ===== ===== ===== ===== ===== ===== -->
        <!-- ===== ===== CSS ===== ===== -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="http://localhost/DidacticalGame/jquery-ui/jquery-ui.theme.css"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="http://localhost/DidacticalGame/user/card-effect.css"/>
        <link rel="stylesheet" type="text/css" href="http://localhost/DidacticalGame/user/style.css"/>
        <!--        <link rel="stylesheet" type="text/css" href="card-effect.css"/>
                <link rel="stylesheet" type="text/css" href="style.css"/>-->

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

        <script>
            $(document).ready(function () {
                $("html head").append('');
                /**************************************************************/
                /*VELOCIDAD SCROLL*/

                //gestión de la velocidad del scroll al pulsar el boton de inicio
                linkInterno = $('a[href^="#indice"],a[href^="#juegos"],a[href^="#autismo]');
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
                $("a[href='']").click(function (event) {
                    event.preventDefault();
                });
            });

        </script>
        <!-- ===== ===== SCRIPT ===== ===== -->
        <!-- ===== ===== ===== ===== ===== ===== ===== -->
        <script>
            $(document).ready(function () {
                $("#user").append("<span><?php print $_SESSION['user'][1] . ", " . $_SESSION['user'][2]; ?></span>");
            });

        </script>

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
                                        <a id="user" class="nav-link user" href="">
                                            <span class=" mr-2  fas fa-user-circle"></span>
                                        </a>
                                    </div>
                                </li>
                                <li class="nav-item hover">
                                    <div>
                                        <a class="nav-link mr-2 mb-2" href="#indice">
                                            <span class=" mr-2  fas fa-home"></span><span class="col-10 pl-0">Inicio</span>
                                        </a>
                                    </div>
                                </li>
                                <li class="nav-item hover">
                                    <div>
                                        <a class="nav-link mr-2 mb-2" href="#autismo">
                                            <span class=" mr-2  fab fa-odnoklassniki"></span><span class="col-10 pl-0">Asperger y autismo</span>
                                        </a>
                                    </div>
                                </li>
                                <li class="nav-item hover">
                                    <div>
                                        <a class="nav-link mr-2 mb-2" href="#juegos">
                                            <span class=" mr-2  fas fa-gamepad"></span><span class="col-10 pl-0">Juegos</span>
                                        </a>
                                    </div>
                                </li>
                                </li>
                                <li class="nav-item hover">
                                    <div>
                                        <form class="" action="" method="post">
                                            <button type="submit" name="logout" class="nav-link cerrar-sesion ml-2 mr-2 mb-2" >
                                                <span class=" mr-2  fas fa-sign-out-alt"></span><span>cerrar sesion</span>
                                            </button>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </article>
                <!-- ===== ===== MENU ===== ===== -->
                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                <article id="indice" class="row ">
                    <div id="pizarra" class="col-12 ml-auto">
                        <div class="row">
                            <span class="col-6 text-center mx-auto">Bienvenidos<br>Welcome<br>Bienvenue<br>Willkommen<br>Bienvenico<br></span>
                        </div>
                    </div>
                </article>
                <section class="row espacio"></section>
                <article id="autismo" class="row ">
                    <section class="col-lg-6 col-12 ml-auto">
                        <section id="tabs" class="row">
                            <div class="col-12 mt-5">
                                <ul class="nav nav-tabs">
                                    <li class="nav-item"><a class="nav-link text-center active" data-toggle="tab" href="#Asperger">Asperger</a></li>
                                    <li class="nav-item"><a class="nav-link text-center" data-toggle="tab" href="#Autismo">Autismo</a></li>
                                </ul>
                                <div class="tab-content">
                                    <article id="Asperger" class="tab-pane active p-4">
                                        <p>El síndrome de Asperger es un trastorno severo del desarrollo que conlleva una alteración 
                                            neurobiológicamente determinada en el procesamiento de la información. Las personas afectadas 
                                            tienen un aspecto e inteligencia normal o incluso superior a la media. Presentan un estilo
                                            cognitivo particular y frecuentemente, habilidades especiales en áreas restringidas.</p>
                                        <p><strong>El síndrome de Asperger se manifiesta de diferente forma en cada individuo pero son rasgos habituales:</strong></p>
                                        <ul>
                                            <li>Dificultades para la interacción social, especialmente con personas de su misma edad.</li>
                                            <li>Alteraciones de los patrones de comunicación no-verbal.</li>
                                            <li>Intereses restringidos. Especialización en ciertos temas.</li>
                                            <li>Inflexibilidad cognitiva y de comportamiento.</li>
                                            <li>Dificultades para la abstracción de conceptos.</li>
                                            <li>Coherencia central débil en beneficio del procesamiento de los detalles.</li>
                                            <li>Interpretación literal del lenguaje.</li>
                                            <li>Dificultades en las funciones ejecutivas y de planificación.</li>
                                            <li>Dificultades en la interpretación de los sentimientos y emociones ajenos y propios.</li>
                                        </ul>
                                        <p>Supone una discapacidad para entender el mundo de lo social, que da origen a comportamientos 
                                            sociales inadecuados proporcionándoles a ellos y sus familiares problemas en todos los ámbitos.
                                            Los déficits sociales están presentes en aspectos del lenguaje tales como:</p>
                                        <ul>
                                            <li>Dificultades en el ritmo y turno en una conversación.</li>
                                            <li>Alteración de la prosodia (tono monótono, volumen alto, timbre de voz, etc).</li>
                                            <li>Asimismo suelen ser disfuncionales los patrones de contacto ocular, gestual, etc.</li>
                                            <li>En muchos casos casos existen dificultades en la coordinación motora.</li>
                                        </ul>
                                        <p>Es un trastorno muy frecuente (de 3 a 7 por cada 1.000 nacidos vivos), poco conocido entre 
                                            la población general e incluso por muchos profesionales. Se encuentra encuadrado en los TEA 
                                            o Trastornos del Espectro Autista, aunque por sus competencias intelectuales y lingüísticas 
                                            se mantiene como una entidad diferenciada del autismo clásico.</p>
                                        <p><strong>Más información en el siguiente enlace de la Confederación Asperger España (Confae): <a href="http://www.asperger.es/" target="_blank">www.asperger.es</a></strong></p>
                                    </article>
                                    <article id="Autismo" class="tab-pane fade p-4">
                                        <p>
                                            El autismo es un trastorno neurológico complejo que generalmente dura toda la vida. Es parte de un grupo 
                                            de trastornos conocidos como trastornos del espectro autista (ASD por sus siglas en inglés). Actualmente 
                                            se diagnostica con autismo a 1 de cada 59 individuos y a 1 de cada 37 niños varones.
                                        </p>
                                        <p>
                                            Se presenta en cualquier grupo racial, étnico y social, y es cuatro veces más frecuente en los niños que 
                                            en las niñas. El autismo daña la capacidad de una persona para comunicarse y relacionarse con otros. También, 
                                            está asociado con rutinas y comportamientos repetitivos, tales como arreglar objetos obsesivamente o seguir 
                                            rutinas muy específicas. Los síntomas pueden oscilar desde leves hasta muy severos.
                                        </p>
                                        <p>
                                            Los trastornos del espectro autista se pueden diagnosticar formalmente a la edad 
                                            de 3 años, aunque nuevas investigaciones están retrocediendo la edad de diagnóstico a 6 meses. Normalmente 
                                            son los padres quienes primero notan comportamientos poco comunes en su hijo o la incapacidad para alcanzar 
                                            adecuadamente los hitos del desarrollo infantil. Algunos padres explican que su hijo parecía diferente desde 
                                            su nacimiento y otros, que iba desarrollándose normalmente y luego perdía aptitudes. Puede que inicialmente 
                                            los pediatras descarten las señales del autismo pensando que el niño podrá alcanzar el nivel deseado y le a
                                            consejan a los padres que esperen y vean como se desarrolla. Nuevas investigaciones muestran que cuando los 
                                            padres sospechan que hay algo mal con su hijo, generalmente están en lo correcto. Si tienes inquietudes acerca
                                            del desarrollo de tu hijo, no esperes y habla con su pedíatra para que sea evaluado.
                                        </p>
                                        <p>	<span class="bodycopy">Si a tu niño lo han diagnosticado con autismo, una intervención temprana es crítica para que pueda beneficiarse al máximo de todas las terapias existentes. Aunque para los padres puede ser difícil etiquetar a un pequeño como “autista”, entre más pronto se haga el diagnóstico cuanto antes se podrá actuar. Actualmente no existen medios efectivos para prevenir el autismo, ni tratamientos totalmente eficaces o cura. Sin embargo, las investigaciones indican que una intervención temprana en un entorno educativo apropiado, por lo menos por dos años durante la etapa preescolar, puede tener mejoras significativas para muchos niños pequeños con trastornos del espectro autista. Tan pronto como se diagnostique el autismo, la intervención temprana debe comenzar con programas eficaces, enfocados en el desarrollo de habilidades de comunicación, socialización y cognoscitivas.</span></p>
                                    </article>
                                </div>
                        </section>
                    </section>
                </article>
                <section class="row espacio"></section>
                <article >
                    <form id="juegos" class="row" action="user/juegos.php" method="post">
                        <article id="card" class="col-lg-3 col-md-6 col-sm-6 col-11 ml-auto mr-auto mt-auto mb-auto">
                            <div class="tarjeta row">
                                <div class="front col-12">
                                    <div class="card-img-top quiz">
                                    </div>
                                </div>
                                <div class="back col-12 ">
                                    <div class="card-back row p-2">
                                        <button type="submit" name="quiz" id="quiz" class="col-auto mx-auto btn btn-primary font-weight-bold curso" >Jugar</button>
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
                                        <button type="submit" name="ahorcado" id="ahorcado" class="col-auto mx-auto btn btn-primary font-weight-bold curso" >Jugar</button>
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
                                        <button type="submit" name="proximamente" id="proximamente" class="col-auto mx-auto btn btn-primary font-weight-bold curso" disabled>proximamente</button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </form>
                </article>
                <!-- ===== ===== BODY ===== ===== -->
                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                <article class="row ">
                    <!--===== ===== ===== ===== ===== ===== =====--> 
                    <!--===== ===== COPYGATE ===== =====--> 
                    <div class="inicio text-center pl-0 pr-0 fixed-bottom ml-auto col-1"><a class="material-icons" href="#indice">keyboard_arrow_up</a></div>
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
