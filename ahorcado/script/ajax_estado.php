<?php
require_once "../../BBDD/config.php";
require_once "../../BBDD/Dbactions.php";


    $db = new dbactions();
    
$estados = $db->queryAll("select nombre_img,descripcion FROM imagen ORDER  BY idImagen Limit 8");

print json_encode($estados);


