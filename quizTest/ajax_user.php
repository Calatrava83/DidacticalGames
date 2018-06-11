<?php
require_once '../admin/adminPreguntas/config.php';
require_once '../admin/adminPreguntas/Dbactions.php';

if(isset ($_POST['id_user']) && isset ($_POST['tiempo']) && isset($_POST['nivel'])){
    $db = new dbactions();
    $tiempo=$_POST['tiempo'];
    $id=$_POST['id_user'];
    $nivel = $_POST['nivel'];
    $db->insertColumn("INSERT INTO nivel (id_user,cod_nivel,tiempo,fecha_actual,juego) VALUES ('".$id."',' ".$nivel." ',' ".$tiempo." ',CURRENT_DATE(),'quizTest')");
    
    print "true";
}else{
    print "false";
}