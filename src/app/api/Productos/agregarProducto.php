<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR


  $arrayRes = json_decode($json,true);

  $nombre =  $arrayRes['nombre'];
  $valorProducto = $arrayRes['valorProducto'];
  $stock = $arrayRes['stock'];
  $proveedor = $arrayRes['proveedor'];
  

  require("../database.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = connect(); // CREA LA CONEXION
  $sql = "INSERT INTO productos(nombre, valorProducto, stock, proveedor) VALUES ('$nombre','$valorProducto', '$stock','$proveedor')";
  // REALIZA LA QUERY A LA DB
  $result = mysqli_query($conexion, $sql);    
  
  echo json_encode($sql);

  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'SE REGISTRO EXITOSAMENTE EL USUARIO';

  header('Content-Type: application/json');

  
  
?>