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
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="styles.css"/>
        <link rel="icon" href=""/>
        <!-- ===== ===== CSS ===== ===== -->
        <!-- ===== ===== ===== ===== ===== ===== ===== -->
        <!-- ===== ===== SCRIPT ===== ===== -->
        <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="../bootstrap/js/bootstrap.js"></script>
        <script type="text/javascript" src="../bootstrap/js/bootstrap.bundle.js"></script>
        <script type="text/javascript" src="../jquery-ui/jquery-ui.js"></script>
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
        <section class="container-fluid borderA">
            <!--            <article class="row">
                            <section class="col-1 borderA">1</section>
                            <section class="col-1 borderA">2</section>
                            <section class="col-1 borderA">3</section>
                            <section class="col-1 borderA">4</section>
                            <section class="col-1 borderA">5</section>
                            <section class="col-1 borderA">6</section>
                            <section class="col-1 borderA">7</section>
                            <section class="col-1 borderA">8</section>
                            <section class="col-1 borderA">9</section>
                            <section class="col-1 borderA">10</section>
                            <section class="col-1 borderA">11</section>
                            <section class="col-1 borderA">12</section>
                        </article>-->
            <!-- ===== ===== ===== ===== ===== ===== ===== -->
            <!-- ===== ===== MENU ===== ===== -->
            <article class="row">
                <nav id="menu" class="nav navbar">menu</nav>
            </article>
            <!-- ===== ===== MENU ===== ===== -->
            <!-- ===== ===== ===== ===== ===== ===== ===== -->
            <!-- ===== ===== ===== ===== ===== ===== ===== -->
            <article class="row">
                <section class="col-12 borderA">
                    <!-- ===== ===== ===== ===== ===== ===== ===== -->
                    <!-- ===== ===== HEADER ===== ===== -->
                    <header class="row">
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <!-- ===== ===== USUARIO ===== ===== -->
                        <!--<section class="col-1 borderA"></section>-->
                        <section class="glyphicon-user ml-3 borderA"><span></span></section>
                        <section id="user" class="col-2 pt-2 mr-auto text-left borderA"><span>usuario</span></section>
                        <!-- ===== ===== USUARIO ===== ===== -->
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <!-- ===== ===== NIVEL ===== ===== -->
                        <section id="nivel" class="col-auto text-center font-weight-bold">Nivel</section>
                        <!-- ===== ===== NIVEL ===== ===== -->
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <!-- ===== ===== JUEGO ===== ===== -->
                        <section id="nombre-juego" class="col-3 ml-auto pt-2 pr-5 text-right borderA">ahorcado</section>
                        <!-- ===== ===== JUEGO ===== ===== -->
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                    </header>
                    <!-- ===== ===== HEADER ===== ===== -->
                    <!-- ===== ===== ===== ===== ===== ===== ===== -->
                    <!-- ===== ===== ===== ===== ===== ===== ===== -->
                    <!-- ===== ===== BODY ===== ===== -->
                    <article class="row">
                        <section class="col-12 borderA altura-min"></section>
                    </article>
                    <article class="row">
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <!-- ===== ===== REGLAS ===== ===== -->
                        <section class="col-3 borderA">
                            <span id="nombre-regla">reglas de juego</span>
                            <article id="reglas" class="row">
                                <section class="reglas col-10 mx-auto pt-3 pr-3 pl-3 text-justify borderA">
                                    <ol class="pl-2">
                                        <li>Se determina una palabra que se va a adivinar como meta del juego.</li>
                                        <li>El jugador va nombramdo posibles letras que puedan conformar la palabra.</li>
                                        <li>El jugador tambien podra intentar adivinar la palabra con un unico intento.</li>
                                        <li>Si el jugador acierta una letra, &eacute;sta se dibuja sobre su espacio correspondiente.</li>
                                        <li>Si la letra aparece m&aacute;s de una vez se escribe tantas veces como aparezca.</li>
                                    </ol>
                                </section>
                            </article>
                            <span id="puntos">puntos</span>
                            <article id="regla-puntos" class="row">
                                <section class="regla-puntos col-10 mx-auto pt-3 pr-3 pl-3 text-justify borderA">
                                    <ul class="pl-2">
                                        <li>letra correcta &rarr; +50p</li>
                                        <li>letra incorrecta &rarr; -25p</li>
                                        <li>palabra correcta &rarr; +125p</li>
                                        <li>palabra incorrecta &rarr; -75p</li>
                                    </ul>
                                </section>
                            </article>
                            <article class="row">
                                <button id="start" class="col-10 mx-auto start btn btn-success" name="start">Start</button>
                            </article>
                        </section>
                        <!-- ===== ===== REGLAS ===== ===== -->
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <!-- ===== ===== TABLERO ===== ===== -->
                        <section class="col-6 borderA">
                            <article id="tablero" class="row">
                                <section class="col-4 borderA green"></section>
                                <section class="col-4 borderA green"></section>
                                <section class="col-4 borderA green"></section>
                                <section class="col-4 borderA green"></section>
                                <section class="col-4 borderA green"></section>
                                <section class="col-4 borderA green"></section>
                                <section class="col-4 borderA green"></section>
                                <section class="col-4 borderA green"></section>
                                <section class="col-4 borderA green"></section>
                            </article>
                            <article class="row">
                                <section id="pista" class="col-11 mx-auto text-left"><span>pista: <span class="descripcion">"descripci&oacute;n"palabra mas larga 23 letras</span></span></section>
                                <section class="col-8 mx-auto text-center borderA">
                                    <article id="palabra" class="row">
                                        <span class="col-1 ml-auto">¿</span>
                                        <section class="col-auto borderA">a</section>
                                        <section class="col-auto borderA">y</section>
                                        <section class="col-auto borderA">u</section>
                                        <section class="col-auto borderA">d</section>
                                        <section class="col-auto borderA">a</section>
                                        <span class="col-1 mr-auto">?</span>
                                    </article>
                                </section>
                            </article>
                        </section>
                        <!-- ===== ===== TABLERO ===== ===== -->
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <!-- ===== ===== TIEMPO ===== ===== -->
                        <section id="tiempo" class="col-3 borderA">
                            <article class="row">
                                <section class="col-12 altura-min"></section>
                                <section class="col-6 mx-auto borderA">tiempo</section>
                                <section class="col-12"></section>
                                <section class="col-6 mx-auto borderA">00:00</section>
                                <section id="altura" class="col-12"></section>
                                <section class="col-md-auto col-12 mx-auto borderA">
                                    <!-- ===== ===== ===== ===== ===== ===== ===== -->
                                    <!-- ===== ===== TABLERO AHORCADO ===== ===== -->
                                    <article id="tablero-ahorcado" class="row">
                                        <section class="col-4 borderA ahorcado"></section>
                                        <section class="col-4 borderA ahorcado"></section>
                                        <section class="col-4 borderA ahorcado"></section>
                                        <section class="col-4 borderA ahorcado"></section>
                                        <section class="col-4 borderA ahorcado"></section>
                                        <section class="col-4 borderA ahorcado"></section>
                                        <section class="col-4 borderA ahorcado"></section>
                                        <section class="col-4 borderA ahorcado"></section>
                                        <section class="col-4 borderA ahorcado"></section>
                                    </article>
                                    <!-- ===== ===== TABLERO AHORCADO ===== ===== -->
                                    <!-- ===== ===== ===== ===== ===== ===== ===== -->
                                </section>
                            </article>
                        </section>
                        <!-- ===== ===== TIEMPO ===== ===== -->
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                    </article>
                    <article class="row">
                        <section class="col-12 borderA altura-min"></section>
                    </article>
                    <article class="row">
                        <section class="col-6 borderA">
                            <!-- ===== ===== ===== ===== ===== ===== ===== -->
                            <!-- ===== ===== COMPROBAR LETRA ===== ===== -->
                            <article id="letra" class="row">
                                <label class="col-7 mx-auto text-center borderA">Introduce la letra a comprobar</label>
                                <section class="col-12"></section>
                                <label class="col-auto ml-auto text-right">¿</label>
                                <input class="col-1 text-center" type="text" name="letra" id="letra" min="1" maxlength="1"/>
                                <label class="col-auto mr-auto text-left">?</label>
                            </article>
                            <!-- ===== ===== COMPROBAR LETRA ===== ===== -->
                            <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        </section>
                        <section class="col-6 borderA">
                            <!-- ===== ===== ===== ===== ===== ===== ===== -->
                            <!-- ===== ===== COMPROBAR PALABRA ===== ===== -->
                            <article id="nombre-palabra" class="row">
                                <label class="col-7 mx-auto text-center borderA">Introduce la palabra para comprobarla</label>
                                <section class="col-12"></section>
                                <label class="col-auto ml-auto text-right">¿</label>
                                <input class="col-5 text-center" type="text" name="letra" id="letra" min="1" />
                                <label class="col-auto mr-auto text-left">?</label>
                            </article>
                            <!-- ===== ===== COMPROBAR PALABRA ===== ===== -->
                            <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        </section>
                    </article>
                    <!-- ===== ===== BODY ===== ===== -->
                    <!-- ===== ===== ===== ===== ===== ===== ===== -->
                </section>
            </article>
            <!-- ===== ===== ===== ===== ===== ===== ===== -->
            <!-- ===== ===== BOTONES ===== ===== -->
            <article class="row">
                <button id="comprobar-palabra" class="col-2 text-center mx-auto">Comprobar palabra</button>
                <section class="col-12"></section>
                <a id="estadistica" href="#" class="col-2 text-center mx-auto">estadistica</a>
            </article>
            <!-- ===== ===== BOTONES ===== ===== -->
            <!-- ===== ===== ===== ===== ===== ===== ===== -->
            <footer class="row">
                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                <!-- ===== ===== COPYGATE ===== ===== -->
                <section class="col-6 pt-2 mx-auto text-center small borderA">
                    <span>Copygate &Psi; 2018 www.didactical-games.com</span>
                </section>
                <!-- ===== ===== COPYGATE ===== ===== -->
                <!-- ===== ===== ===== ===== ===== ===== ===== -->
            </footer>
        </section>        
    </body>
</html>
