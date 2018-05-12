<?php

function imprimirModalNiveles() {
    for ($i = 1; $i <= 8; $i++) {
        echo '<article class="nivel modal fade row" id="nivel' . $i . '" value="1" tabindex="-1" role="dialog" aria-labelledby="Title" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header"><h4 id="Nivel" class="modal-title mx-auto">Nivel ' . $i . '</h4></div>
                            <div class="modal-body">
                                <section class=" modal-body col-12 mx-auto pt-0 pr-3 pl-3 pb-0 text-center">
                                <div class="row">
                                    <div class="col-lg-12 col-6">
                                    <div class="row  mx-auto face"><span class="text-center fas fa-meh fa-9x"></span></div>
                                    </div>
                                    <div class="col-lg-12 col-6">
                                    <div class="row pt-3">
                                        <span id="star1" class="star col-2 m-lg-0 ml-lg-auto m-1 ml-4 material-icons icon">stars</span>
                                        <span id="star2" class="star col-2 m-lg-0 m-1 material-icons icon">stars</span>
                                        <span id="star3" class="star col-2 m-lg-0 mr-lg-auto m-1 material-icons icon">stars</span>
                                    </div>
                                    <div class="row puntaje"></div>
                                    </div>
                                    </div>
                                </section>
                            </div>
                            <div class="modal-footer">
                                <button type="button" id="prev" class="btn ml-auto" data-dismiss="modal"><span class="material-icons icon">reply</span></button>
                                <button type="button" id="reload" class="btn" data-dismiss="modal"><span class="material-icons icon">reply_all</span></button>
                                <button type="button" id="next" class="btn mr-auto" data-dismiss="modal"><span class="material-icons icon rotate">reply</span></button>
                            </div>
                        </div>
                    </div>
                </article>';
    }
}

function imprimirNiveles() {
    echo '<article class="modal fade row" id="niveles" tabindex="-1" role="dialog" aria-labelledby="Title" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content col-7 mx-auto">
                            <div class="modal-body">
                                <section class="niveles modal-body row  mx-auto pt-3 pr-3 pl-3 text-center">';
    for ($i = 1; $i <= 8; $i++) {
        echo '<a id="modalNivel" name="nivel' . $i . '" class="col-12 text-center" data-toggle="modal" data-target="">Nivel ' . $i . '</a>';
    }
    echo '</section></div></div></div></article>';
}

function imprimirReglasAhorcado() {
    echo '<article class="modal fade row" id="reglas" tabindex="-1" role="dialog" aria-labelledby="Title" aria-hidden="true">
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
                                            <li>El jugador tambien podra intentar adivinar la palabra</li>
                                            <li>Si el jugador acierta una letra, &eacute;sta se dibuja sobre su espacio correspondiente.</li>
                                            <li>Si la letra aparece m&aacute;s de una vez se escribe tantas veces como aparezca.</li>
                                            <li>Se mostrara una pista de texto, siendo esta la descripcion de la palabra.</li>
                                            <li>Se ira desbloqueando una imagen como pista visaul de la palabra a descubrir.</li>
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
                                                <th scope="row" class="title-modal text-left">Letra correcta</th>
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
                                                <th scope="row" class="title-modal text-left">Palabra correcta</th>
                                                <td>20</td>
                                                <td>30</td>
                                                <td>40</td>
                                                <td>50</td>
                                                <td>60</td>
                                                <td>70</td>
                                                <td>80</td>
                                                <td>90</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </section>
                            </div>
                            <div class="modal-footer">
                                <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
                            </div>
                        </div>
                    </div>
                </article>';
}
