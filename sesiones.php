<?php
if ($_POST) {
    if ((isset($_POST['name']) && !empty($_POST['name'])) && (isset($_POST['password']) && !empty($_POST['password']))) {
        session_start();
        require_once './BBDD/config.php';
        require_once './BBDD/Dbactions.php';

        $db = new dbactions();
        $name = $_POST['name'];
        $pass = $_POST['password'];

        if ($user = $db->queryRow("SELECT idUser,nombre,apellidos from usuario where nombre='$name' AND password=md5($pass)")) {
            require_once  'user/index.php';
            sesionUser($user);
        } else if ($user = $db->queryRow("SELECT idAdmin,nombre,apellidos from administradores where nombre='$name' AND password=md5($pass)")) {
            include 'admin/index.php';
            sesionAdmin($user);
        } else {
            header('Location: /DidacticalGame/index.php');
        }
    } else {
        header('Location: /DidacticalGame/index.php');
    }
}else{
        header('Location: /DidacticalGame/index.php');
}
function sesionUser($usuario) {
    $_SESSION['user'] = [];
    $_SESSION['user'][0] = $usuario->idUser;
    $_SESSION['user'][1] = $usuario->nombre;
    $_SESSION['user'][2] = $usuario->apellidos;
}

function sesionAdmin($usuario) {
    $_SESSION['user'] = [];
    $_SESSION['user'][0] = $usuario->idAdmin;
    $_SESSION['user'][1] = $usuario->nombre;
    $_SESSION['user'][2] = $usuario->apellidos;
}


?>