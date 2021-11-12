<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR


  $arrayRes = json_decode($json,true);

  $rutCliente =  $arrayRes['rutCliente'];
  $producto = $arrayRes['producto'];
  $horaReserva = $arrayRes['horaReserva'];
  $dia = $arrayRes['dia'];
  $nombre = $arrayRes['nombre'];
  $mes = date('F');
 
  

  require("../database.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = connect(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "INSERT INTO reservas(rutCliente, producto, horaReserva, dia, mes, nombre) VALUES
                  ('$rutCliente','$producto','$horaReserva','$dia','$mes','')"); 
  
  // RECORRE EL RESULTADO Y LO GUARDA EN UN ARRAY
  
  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'SE REGISTRO EXITOSAMENTE EL USUARIO';

  header('Content-Type: application/json');

  
  
?>