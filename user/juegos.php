<?php
session_start();
if(isset($_POST['quiz'])){
    include '../quizTest/index.php';
    
}
if(isset($_POST['ahorcado'])){
    include '../ahorcado/index.php';
}
if(isset($_POST['atras'])){
    include '../user/index.php';
}
?>