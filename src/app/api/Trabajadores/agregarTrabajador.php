<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR


  $arrayRes = json_decode($json,true);

  $rut =  $arrayRes['rut'];
  $nombre = $arrayRes['nombre'];
  $direccion = $arrayRes['direccion'];
  $fono = $arrayRes['fono'];
  $passwd = $arrayRes['passwd'];
  $salario = $arrayRes['salario'];
  $isAdmin  = $arrayRes['isAdmin'];
  

  require("../database.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = connect(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "INSERT INTO trabajadores(rut, nombre, direccion, fono, passwd, salario,isAdmin) VALUES
                  ('$rut','$nombre', '$direccion','$fono','$passwd','$salario','$isAdmin')");    
  
  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'SE REGISTRO EXITOSAMENTE EL USUARIO';

  header('Content-Type: application/json');

  
  
?>