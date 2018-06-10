<?php

require_once './BBDD/config.php';
require_once './BBDD/Dbactions.php';

$db = new dbactions();
session_start();
if ($_POST) {
    if ((isset($_POST['name']) && !empty($_POST['name'])) && (isset($_POST['password']) && !empty($_POST['password']))) {

        $name = $_POST['name'];
        $pass = $_POST['password'];


        if ($user = $db->queryRow("SELECT idUser,nombre,apellidos from usuario where nombre='$name' AND password=md5($pass)")) {
            include $DIR . 'user/index.php';
            sesionUser($user);
        }

//    if ($user = $db->queryRow("SELECT idUser,nombre,apellidos from usuario where nombre='$name' AND password=md5($pass)")) {
//        sesionUser($user);
//        header('Location: /DidacticalGame/admin/index.php');
//    }
//    
    } else {
        header('Location: /DidacticalGame/index.php');
    }
}

function sesionUser($usuario) {
    $_SESSION['user'] = [];
    $_SESSION['user'][0] = $usuario->idUser;
    $_SESSION['user'][1] = $usuario->nombre;
    $_SESSION['user'][2] = $usuario->apellidos;
}
