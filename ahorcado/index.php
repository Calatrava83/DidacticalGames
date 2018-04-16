<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ahorcado</title>
        <link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.css"/>
        <link rel="stylesheet" type="text/css" href="../jquery-ui/jquery-ui.css"/>
        <link rel="stylesheet" type="text/css" href="../jquery-ui/jquery-ui.structure.css">
        <link rel="stylesheet" type="text/css" href="../jquery-ui/jquery-ui.theme.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        <link rel="icon" href=""/>
        <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="../bootstrap/js/bootstrap.js"></script>
        <script type="text/javascript" src="../bootstrap/js/bootstrap.bundle.js"></script>
        <script type="text/javascript" src="../jquery-ui/jquery-ui.js"></script>
        <script type="text/javascript" src="script/script-ui.js"></script>
        <style>
            .borderA{
                border:1px solid black;
                text-align: center;
            }
            .green{
                text-align: center;
                background-color: green;
                height: 80px;
            }
            .altura-min{
                height: 25px;
            }
        </style>
    </head>
    <body>
        <section class="container-fluid borderA">
            <article class="row">
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
            </article>
            <!-- ===== ===== ===== ===== ===== ===== ===== -->
            <!-- ===== ===== MENU ===== ===== -->
            <article class="row">
                <nav class="nav navbar">menu</nav>
            </article>
            <!-- ===== ===== MENU ===== ===== -->
            <!-- ===== ===== ===== ===== ===== ===== ===== -->
            <article class="row">
                <section class="col-12 borderA">
                    <!-- ===== ===== ===== ===== ===== ===== ===== -->
                    <!-- ===== ===== HEADER ===== ===== -->
                    <header class="row">
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <!-- ===== ===== USUARIO ===== ===== -->
                        <section class="col-3 mr-auto borderA"><span class="glyphicons glyphicons-user"></span>usuario</section>
                        <!-- ===== ===== USUARIO ===== ===== -->
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <!-- ===== ===== JUEGO ===== ===== -->
                        <section class="col-3 ml-auto borderA">ahorcado</section>
                        <!-- ===== ===== JUEGO ===== ===== -->
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                    </header>
                    <!-- ===== ===== HEADER ===== ===== -->
                    <!-- ===== ===== ===== ===== ===== ===== ===== -->
                    <!-- ===== ===== ===== ===== ===== ===== ===== -->
                    <!-- ===== ===== BODY ===== ===== -->
                    <article class="row">
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <!-- ===== ===== NIVEL ===== ===== -->
                        <section id="nivel" class="col-12 text-center font-weight-bold">Nivel</section>
                        <!-- ===== ===== NIVEL ===== ===== -->
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                    </article>
                    <article class="row">
                        <section class="col-3 borderA">reglas de juego</section>
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <!-- ===== ===== TABLERO ===== ===== -->
                        <section class="col-6 borderA">
                            <article id="tablero" class="row">
                                <!--<section id="imagen-inicial" class="col-12 borderA"></section>-->
                                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                                <section class="col-4 borderA green">1</section>
                                <section class="col-4 borderA green">2</section>
                                <section class="col-4 borderA green">3</section>
                                <section class="col-4 borderA green">4</section>
                                <section class="col-4 borderA green">5</section>
                                <section class="col-4 borderA green">6</section>
                                <section class="col-4 borderA green">7</section>
                                <section class="col-4 borderA green">8</section>
                                <section class="col-4 borderA green">9</section>
                                <!-- ===== ===== ===== ===== ===== ===== ===== -->
                            </article>
                        </section>
                        <!-- ===== ===== TABLERO ===== ===== -->
                        <!-- ===== ===== ===== ===== ===== ===== ===== -->
                        <!-- ===== ===== TIEMPO ===== ===== -->
                        <section class="col-3 borderA">
                            <article class="row">
                                <section class="col-12 altura-min"></section>
                                <section class="col-6 mx-auto borderA">tiempo</section>
                                <section class="col-12"></section>
                                <section class="col-6 mx-auto borderA">00:00</section>
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
                            <article class="row">
                                <label class="col-7 mx-auto text-center borderA">Introduce la letra a comprobar</label>
                                <section class="col-12"></section>
                                <label class="col-auto ml-auto text-right">¿</label>
                                <input class="col-1 text-center" type="text" name="letra" id="letra" min="1" maxlength="1"/>
                                <label class="col-auto mr-auto text-left">?</label>
                            </article>
                        </section>
                        <section class="col-6 borderA">
                            <article class="row">
                                <label class="col-7 mx-auto text-center borderA">Introduce la palabra</label>
                                <section class="col-12"></section>
                                <label class="col-auto ml-auto text-right">¿</label>
                                <input class="col-5 text-center" type="text" name="letra" id="letra" min="1" />
                                <label class="col-auto mr-auto text-left">?</label>
                                <section class="col-12"></section>
                                <button id="comprobar-palabra" class="col-5 text-center mx-auto">Comprobar palabra</button>
                            </article>
                        </section>
                    </article>
                    <!-- ===== ===== BODY ===== ===== -->
                    <!-- ===== ===== ===== ===== ===== ===== ===== -->
                </section>
            </article>
        </section>        
    </body>
</html>
