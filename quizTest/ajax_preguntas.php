<?php
require_once "../admin/adminPreguntas/config.php";
require_once "../admin/adminPreguntas/Dbactions.php";

//if(isset($_POST['hasta']) && !empty($_POST['hasta'])){
    $db = new dbactions();
    /*if($_POST['tope']==5){
        $response = array('nivel1'=>array(),'nivel2'=>array(),'nivel3'=>array(),'nivel4'=>array(),'nivel5'=>array());
    }elseif($_POST['tope']==10){
        $response = array('nivel6','nivel7','nivel8','nivel9','nivel10');
    }*/
//print $_POST['tope'];

$preguntas = $db->queryAll("select nivel,emocion,pregunta,respuesta,id_imagen,op1,op2,op3,op4,source FROM ((preguntas INNER JOIN respuestas on preguntas.numero = respuestas.numero) INNER JOIN imagen ON preguntas.id_imagen = imagen.idImagen) ORDER BY nivel");


  /*  for($i=1;$i<$_POST['tope']+1;$i++){
        $preguntas = $db->queryAll("SELECT pregunta,respuesta FROM PREGUNTAS WHERE NIVEL = ".$i);
        $response = reordenado($response,$preguntas,$i);
        print_r($response);
    }*/

    print json_encode($preguntas);

//}
function reordenado($response,$pregunta,$nivel){
    foreach($pregunta as $clave=>$valor){
        array_push($response['nivel'.$nivel],$valor);

    }
    return $response;
}
