<?php

/*
* CLASE EXCLUSIVA PARA CONEXION CON BDD CON PDO
*
*
*
*
*/
if(file_exists ("config.php")){
    include_once "config.php";
}
 abstract class db {

    protected $host;
    protected $dbname; //cambiar base de datos//
    protected $user;
    protected $pass;//Cambiar contraseña//

    public static function setconexion($host,$dbname,$user,$pass){
        $conexion = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
        return $conexion;
    }
    abstract public function insert($tabla,$datos);
    abstract public function delete($sql,$where);
    abstract public function update($tabla,$datos,$condicion);
    abstract public function queryAll($sql);
    abstract public function queryRow($sql);
}

