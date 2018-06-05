<?php
error_reporting(0);
require_once "dbactions.php";
   $database = new dbactions();
    $res = $database->queryAll("SELECT numero,nivel,emocion,pregunta,respuesta from preguntas");
    foreach($res as $pregunta => $valor){
        //print_r ($valor);
        for($i=0;$i<count($valor);$i++){
            if($i == 4){
               // $valor[$i]=;

               $res[$pregunta][$i]=colocarRespuesta($database,$valor[0],$valor[$i]);
            }
        }
    }
    $resul=json_encode($res);
   print $resul;
 //SUSTITUYE LA OPCION BUENA GUARDADA POR BDD POR LA FRASE DE LA RESPUESTA//
function colocarRespuesta($database,$numero,$respuesta){
  $correcta = $database->queryRow("SELECT op1,op2,op3,op4 FROM respuestas where numero = ".$numero);

    return $correcta->$respuesta;
}
