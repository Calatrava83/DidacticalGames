<?php
require_once '../../BBDD/config.php';
require_once '../../BBDD/Dbactions.php';

if(isset ($_POST['id_user'])  && isset($_POST['nivel']) && isset($_POST['puntos'])){
    $db = new dbactions();
    $id=$_POST['id_user'];
    $nivel = $_POST['nivel'];
    $puntos=$_POST['puntos'];
    $db->insertColumn("INSERT INTO nivel (id_user,cod_nivel,puntos,fecha_actual,juego) VALUES (".$id.",".$nivel.",".$puntos.",CURRENT_DATE(),'ahorcado')");
    
    print "true";
}else{
    print "false";
}