<!--<!DOCTYPE html>-->
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
        <section class="container-fluid">
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
                <nav id="menu" class=" navbar navbar-dark">
                    <span class="menu" data-toggle="collapse" 
                          data-target="#navbars" aria-controls="navbars" aria-expanded="false" 
                          aria-label="Toggle navigation"><span id="boton" class="navbar-toggler-icon m-2"></span>Menu</span>
                    <div class="collapse navbar-collapse" id="navbars">
                        <ul class="navbar-nav">
                            <li class="nav-item hover ">
                                <div>
                                    <a class="nav-link user" href="">
                                        <img class="glyphicon-user mr-2 mt-2 mb-2"src="" alt="user"/><span>usuario</span>
                                    </a>
                                </div>
                            </li>
                            <li class="nav-item hover">
                                <div>
                                    <a class="nav-link ml-3 mb-2" data-toggle="modal" data-target="#estadistica">Estadistica</a>
                                </div>
                            </li>
                            <li class="nav-item hover">
                                <div>
                                    <a class="nav-link ml-3 mb-2" data-toggle="modal" data-target="#reglas">Reglas de juego</a>
                                </div>
                            </li>
                            <li class="nav-item hover">
                                <div>
                                    <a class="nav-link cerrar-sesion mr-2 mb-2" href="#ofrece">cerrar sesion</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </article>
            <!-- ===== ===== MENU ===== ===== -->
            <!-- ===== ===== ===== ===== ===== ===== ===== -->
            <!-- ===== ===== MODAL-REGLAS ===== ===== -->
            <article class="modal fade row" id="reglas" tabindex="-1" role="dialog" aria-labelledby="Title" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="ModalTitle">Reglas de juego</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <section class="reglas modal-body col-10 mx-auto pt-3 pr-3 pl-3 text-justify ">
                                <h5 class="modal-title">Reglas:</h5>
                                <div class="scroll">
                                    <ol class="pl-4">
                                        <li>Se determina una palabra que se va a adivinar como meta del juego.</li>
                                        <li>El jugador va nombramdo posibles letras que puedan conformar la palabra.</li>
                                        <li>El jugador tambien podra intentar adivinar la palabra con un unico intento.</li>
                                        <li>Si el jugador acierta una letra, &eacute;sta se dibuja sobre su espacio correspondiente.</li>
                                        <li>Si la letra aparece m&aacute;s de una vez se escribe tantas veces como aparezca.</li>
                                    </ol>
                                </div>
                            </section>
                            <section class="regla-puntos mx-auto col-12  pt-3">
                                <table class="table tabla">
                                    <thead class="thead-light text-center">
                                        <tr><th colspan="9" scope="col">Puntos</th></tr>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">N-1</th>
                                            <th scope="col">N-2</th>
                                            <th scope="col">N-3</th>
                                            <th scope="col">N-4</th>
                                            <th scope="col">N-5</th>
                                            <th scope="col">N-6</th>
                                            <th scope="col">N-7</th>
                                            <th scope="col">N-8</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" class="title text-left">Letra correcta</th>
                                            <td>5</td>
                                            <td>10</td>
                                            <td>15</td>
                                            <td>20</td>
                                            <td>25</td>
                                            <td>30</td>
                                            <td>35</td>
                                            <td>40</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="title text-left">Palabra correcta</th>
                                            <td>20</td>
                                            <td>40</td>
                                            <td>60</td>
                                            <td>80</td>
                                            <td>100</td>
                                            <td>120</td>
                                            <td>140</td>
                                            <td>160</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="title text-left">Letra incorrecta</th>
                                            <td>2</td>
                                            <td>4</td>
                                            <td>8</td>
                                            <td>16</td>
                                            <td>20</td>
                                            <td>25</td>
                                            <td>30</td>
                                            <td>35</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="title text-left">Palabra incorrecta</th>
                                            <td>10</td>
                                            <td>20</td>
                                            <td>30</td>
                                            <td>40</td>
                                            <td>50</td>
                                            <td>60</td>
                                            <td>70</td>
                                            <td>80</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </article>
            <!-- ===== ===== MODAL-REGLAS ===== ===== -->
            <!-- ===== ===== ===== ===== ===== ===== ===== -->
            <!-- ===== ===== MODAL-ESTADISTICA ===== ===== -->
            <article class="modal fade row" id="estadistica" tabindex="-1" role="dialog" aria-labelledby="Title" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="ModalTitle">Estadisticas</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <section class="estadistica modal-body col-10 mx-auto pt-3 pr-3 pl-3 text-justify ">

                            </section>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </article>
            <!-- ===== ===== MODAL-ESTADISTICA ===== ===== -->
            <!-- ===== ===== ===== ===== ===== ===== ===== -->
            <article class="row">
                <section class="col-12">
                    <!-- ===== ===== ===== ===== ===== ===== ===== -->
                    <!-- ===== ===== HEADER ===== ===== -->
                    <header class="row">
                        <!-- ===== ===== NIVEL ===== ===== -->
                        <section id="nivel" class="col-12 mx-auto text-center font-weight-bold">Nivel</section>
                        <!-- ===== ===== NIVEL ===== ===== -->
                    </header>
                    <!-- ===== ===== HEADER ===== ===== -->
                    <!-- ===== ===== ===== ===== ===== ===== ===== -->
                    <!-- ===== ===== BODY ===== ===== -->
                    <article class="row">
                        <section class="col-12  altura-min"></section>
                    </article>
                    <article class="row">
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <!-- ===== ===== START ===== ===== -->
                        <section id="left" class="col-3 ">
                            <article id="start" class="row ">
                                <button class="col-10 mx-auto btn start " name="start">Start</button>
                                <article id="tiempo" class="row mt-5 ml-2">
                                    
                                    <div id="puntos" class="col-md-6 mx-auto col-12 text-center pl-0">
                                        <article class="row mx-auto">
                                            <!-- ===== ===== ===== ===== ===== ===== ===== -->
                                            <!-- ===== ===== PUNTOS ===== ===== -->
                                            <section class="col-12 mx-auto">puntos</section>
                                            <section class="col-12 mx-auto text-right">
                                                <span><span class="puntos">0</span>p</span>
                                            </section>
                                            <section class="col-12 mx-auto text-right">
                                                <span><span class="puntos-totales">0</span>pT</span>
                                            </section>
                                            <!-- ===== ===== PUNTOS ===== ===== -->
                                            <!-- ===== ===== ===== ===== ===== ===== ===== -->
                                        </article>
                                    </div>
                                </article>
                            </article>
                        </section>
                        <!-- ===== ===== START ===== ===== -->
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <section class="col-6 ">
                            <!-- ===== ===== ===== ===== ===== ===== ===== -->
                            <!-- ===== ===== TABLERO ===== ===== -->
                            <article id="tablero" class="row"></article>
                            <!-- ===== ===== TABLERO ===== ===== -->
                            <!-- ===== ===== ===== ===== ===== ===== ===== -->
                            <article class="row">
                                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                                <!-- ===== ===== PISTA ===== ===== -->
                                <section id="pista" class="col-md-1 col-sm-2 col-3 mr-auto p-0 text-left "><span>pista:</span></section>
                                <section id="" class="col-md-11 col-sm-10 col-9 text-left "><span class="descripcion">"descripci&oacute;n"palabra mas larga 23 letras</span></section>
                                <!-- ===== ===== PISTA ===== ===== -->
                                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                            </article>
                        </section>
                        <!-- ===== ===== TABLERO ===== ===== -->
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <section id="" class="col-3 mt-auto mb-auto">
                            <!-- ===== ===== ===== ===== ===== ===== ===== -->
                            <!-- ===== ===== TABLERO AHORCADO ===== ===== -->
                            <article class="row">
                                <section class="col-10 ml-auto mr-auto mt-auto mb-auto ">
                                    <article id="tablero-ahorcado" class="row">
                                        <section class="tablero-ahorcado ahorcado col-4 "></section>
                                        <section class="tablero-ahorcado ahorcado col-4 "></section>
                                        <section class="tablero-ahorcado ahorcado col-4 "></section>
                                        <section class="tablero-ahorcado ahorcado col-4 "></section>
                                        <section class="tablero-ahorcado ahorcado col-4 "></section>
                                        <section class="tablero-ahorcado ahorcado col-4 "></section>
                                        <section class="tablero-ahorcado ahorcado col-4 "></section>
                                        <section class="tablero-ahorcado ahorcado col-4 "></section>
                                        <section class="tablero-ahorcado ahorcado col-4 "></section>
                                    </article>
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
            <article class="row">
                <section class="col-12 mx-auto text-center ">
                    <!-- ===== ===== ===== ===== ===== ===== ===== -->
                    <!-- ===== ===== PALABRA ===== ===== -->
                    <article id="palabra" class="row ">
                        <span class="col-1 ml-auto">¿</span>
                        <span class="col-1 mr-auto">?</span>
                    </article>
                    <!-- ===== ===== PALABRA ===== ===== -->
                    <!-- ===== ===== ===== ===== ===== ===== ===== -->
                </section>
            </article>
            <article class="row">
                <section class="col-5 ml-auto mr-auto mt-auto mb-auto ">
                    <!-- ===== ===== ===== ===== ===== ===== ===== -->
                    <!-- ===== ===== COMPROBAR LETRA ===== ===== -->
                    <article id="letra" class="row">
                        <label class="col-12 mx-auto text-center ">Introduce la letra a comprobar</label>
                        <section class="col-12"></section>
                        <label class="col-auto ml-auto text-right">¿</label>
                        <input class="col-2 text-center letra" type="text" name="letra" id="letra" min="1" maxlength="1"/>
                        <label class="col-auto mr-auto text-left">?</label>
                    </article>
                    <!-- ===== ===== COMPROBAR LETRA ===== ===== -->
                    <!-- ===== ===== ===== ===== ===== ===== ===== -->
                </section>
                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                <!-- ===== ===== BOTON ===== ===== -->
                <button id="comprobar-palabra" class="col-2 text-center mx-auto ">Comprobar palabra</button>
                <!-- ===== ===== BOTON ===== ===== -->
                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                <section class="col-5 ml-auto mr-auto mt-auto mb-auto ">
                    <!-- ===== ===== ===== ===== ===== ===== ===== -->
                    <!-- ===== ===== COMPROBAR PALABRA ===== ===== -->
                    <article id="nombre-palabra" class="row">
                        <label class="col-12 mx-auto text-center ">Introduce la palabra para comprobarla</label>
                        <section class="col-12"></section>
                        <label class="col-auto ml-auto text-right">¿</label>
                        <input class="col-5 text-center" type="text" name="letra" id="letras-palabra" />
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
    <footer class="container-fluid">
        <article class="row ">
            <!-- ===== ===== ===== ===== ===== ===== ===== -->
            <!-- ===== ===== COPYGATE ===== ===== -->
            <section class="footer col-6 pt-2 mx-auto text-center small ">
                <span>Copygate &Psi; 2018 www.didactical-games.com</span>
            </section>
            <!-- ===== ===== COPYGATE ===== ===== -->
            <!-- ===== ===== ===== ===== ===== ===== ===== -->
        </article>
    </footer>
</section>        
</body>
</html>
