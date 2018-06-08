<?php
require_once "Dbactions.php";
if(isset($_GET['delete'])){
  print  borradoPregunta($_GET['delete']);
}
if(isset($_GET['add_emocion'])){
    if(isset($_GET['emocion']) && !empty($_GET['emocion'])){
        $database = new dbactions();
        $num = $database->queryRow("SELECT MAX(num) as maximo from emociones");
        if($num==false||$num->maximo<=0 ){
            $num=1;
             $datos=array($num,$_GET['emocion']);
        }else{
        $num->maximo++;
        $datos=array($num->maximo,$_GET['emocion']);     
        }
        $database->insert("emociones",$datos);
    }
}

 function getEmociones(){
    $database = new dbactions();
    $resultado = $database->queryAll("SELECT * from emociones");
     print_r($resultado);
    foreach ($resultado as $key=>$res){
       print "<option value=".$res[1].">".$res[1]."</option>";
    }
}
function borradoPregunta($numero){
    $acceso = new dbactions();
    $id_imagen = $acceso->queryRow("SELECT id_imagen from preguntas where numero = ".$numero);
    $acceso->delete("imagen","idImagen = ".$id_imagen->id_imagen);
    $acceso->delete("preguntas","numero = ".$numero);
    $acceso->delete("respuestas","numero = ".$numero);

    return  "La pregunta numero ".$numero."se ha borrado exitosamente";

}

