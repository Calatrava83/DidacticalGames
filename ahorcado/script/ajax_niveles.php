<?php
require_once "../../BBDD/config.php";
require_once "../../BBDD/Dbactions.php";


    $db = new dbactions();
    
$estados = $db->queryAll("select idNivel,nombre FROM niveles");


for ($i = 0; $i < count($estados); $i++) {
    $estados[$i][1]= str_replace(" ","",$estados[$i][1]);
    $estados[$i][1]= str_replace($estados[$i][1],"#".$estados[$i][1],$estados[$i][1]);
}

print json_encode($estados);


