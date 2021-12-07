<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR


  $arrayRes = json_decode($json,true);

  $rutCliente =  $arrayRes['rutCliente'];
  $nombreCliente = $arrayRes['nombreCliente'];
  $reserva = $arrayRes['reserva'];
  $datetime = $arrayRes['datetime'];
  $telefono = $arrayRes['telefono'];
 
  

  require("../database.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = connect(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  $result = mysqli_query($conexion, "INSERT INTO reservas".$reserva."(rutCliente, nombreCliente, telefono, datetime, reserva) 
                                    VALUES ('$rutCliente','$nombreCliente','$telefono','$datetime','$reserva')"); 
  
  // RECORRE EL RESULTADO Y LO GUARDA EN UN ARRAY
  echo json_encode($result);
  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'SE REGISTRO EXITOSAMENTE EL USUARIO';

  header('Content-Type: application/json');

  
  
?>