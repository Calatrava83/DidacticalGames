<?php
require_once "Dbactions.php";
define("RUTA", '../DidacticalGames/quizTest/images/preguntasImagenes/');
if(isset($_POST['level']) &&
   isset($_POST['question']) &&
   isset($_POST['emocion']) &&
   isset($_POST['sol']) &&
   isset($_POST['op1'])&&
   isset($_POST['op2'])&&
   isset($_POST['op3'])&&
   isset($_POST['op4'])&&
    isset($_FILES['imagen']))
{
//print $_FILES['imagen']['name'];
    $database = new dbactions();

    $level= (int)$_POST['level'];
    $question = $_POST['question'];
    $solucion = $_POST['sol'];
    $emocion = $_POST['emocion'];
    $opciones = array();
    $imagen = array();


      if(checkImagen($_FILES['imagen'])){
            //print "Subida exitosa";
          $src = RUTA.$_FILES['imagen']['name'];
          $nombre = explode(strrpos($_FILES['imagen']['name'],"."),$_FILES['imagen']['name']);
          $sql= "INSERT INTO imagen (nombre_img, source) VALUES ('".$nombre[0]."','".$src."')";
           $database->insertColumn($sql);
          $id_imagen = $database->queryRow("SELECT idImagen from imagen where nombre_img = '".$_FILES['imagen']['name']."'");

        insertarPregunta($database,$level,$question,$solucion,$emocion,$id_imagen->idImagen);
        insertarRespuestas($database,$opciones,$question);

        }

       /* var_dump($level);
        var_dump($question);
        var_dump($solucion);
        var_dump($emocion);
       */

}else{
    print "No se ha insertado";

}

function insertarPregunta($obj,$level,$question,$solucion,$emocion,$id_imagen){
     $num = $obj->queryRow("select max(numero) as maximo from preguntas");
    $datos=array((int)$num->maximo+1,$level,$emocion,$question,$solucion,$id_imagen);
    $obj->insert("preguntas",$datos);
}

function insertarRespuestas($database,$opciones){
     $num = $database->queryRow("select max(numero) as maximo from respuestas");
   // $numero= $database->queryRow("SELECT numero from preguntas where  = '".."'");
   // var_dump($numero->numero);

    array_push($opciones,$num->maximo+1);

    for($i=1;$i<5;$i++){
     array_push($opciones,$_POST['op'.$i]);
    }

   // var_dump($opciones);
     $database->insert("respuestas",$opciones);

}
function checkImagen($fichero){
    $ext = substr($_FILES['imagen']['name'], strrpos($_FILES['imagen']['name'], ".")+1);
        if($ext == 'jpg'||$ext == "png"|| $ext=='gif'){
             if(move_uploaded_file($_FILES['imagen']['tmp_name'],RUTA.$_FILES['imagen']['name'])){
                    return true;
                }else{
                    return false;
                }
        }else{
            return false;
        }
}
