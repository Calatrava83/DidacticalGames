<?php
require_once "Db.php";
class dbactions extends Db{

    public function insert($tabla,$datos){
        $a=1;
        $values="?";
        if(count($datos)>1){
            for ($i=1;$i<count($datos);$i++){
                $values=$values.',?';
            }

        }

        $sql='INSERT INTO '.$tabla.' VALUES ('.$values.')';
        print $sql;
        $con = Db::setconexion(DB_HOST,DB_NAME,DB_USER,DB_PASSWD);
        $insert=$con->prepare($sql);

        for ($i=0;$i<count($datos);$i++){
            $insert->bindParam($a,$datos[$i]);

             $a++;
        }

        if(!$insert->execute()){
            echo "ha ocurrido un error";
        }else{
            print "Registro insertado correctamente";
        }


    }
    
   
     //columnas es array asociativo cuya clave es el nombre de la columna y el valor es el valor de la columna//
    public function insertColumn($sql){
       $con = Db::setconexion(DB_HOST,DB_NAME,DB_USER,DB_PASSWD);
        if($con->exec($sql)){
        }else{
            print "no insertado";
        }
    }
    
    
    public function delete($tabla,$where){
        $con = Db::setconexion(DB_HOST,DB_NAME,DB_USER,DB_PASSWD);
        $sql = 'DELETE FROM '.$tabla.' WHERE '.$where;
        if($con->exec($sql)>0){
            return true;

        }else{
            print "algo falla";
        }

    }

    public function update($tabla,$datos,$condicion){
        $con = Db::setconexion(DB_HOST,DB_NAME,DB_USER,DB_PASSWD);
        $sql = "UPDATE ".$tabla."SET ";
         foreach ($datos as $clave => $valor){
                $sql.=$clave."=".$valor;
         }
        $sql = $sql.$condicion;
        $con->exec($sql);

    }
    public function queryAll ($sql){
        $con = Db::setconexion(DB_HOST,DB_NAME,DB_USER,DB_PASSWD);
        $page = $con->prepare($sql);
        $page->execute();
        $query = $page->fetchAll(PDO::FETCH_NUM);
        return $query;
    }
    public function queryRow($sql){
        $con = Db::setconexion(DB_HOST,DB_NAME,DB_USER,DB_PASSWD);
         $page = $con->prepare($sql);
        $page->execute();
        $res = $page->fetch(PDO::FETCH_OBJ);
        return $res;
    }
    
    

}



