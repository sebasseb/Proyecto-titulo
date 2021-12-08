<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR


  $arrayRes = json_decode($json,true);

  $fecha = $arrayRes['fecha'];
  $total = $arrayRes['total'];
  

  require("../database.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = connect(); // CREA LA CONEXION
  
  $sql = "INSERT INTO ventas (fecha, total) VALUES ('$fecha','$total')";
  // REALIZA LA QUERY A LA DB
  $result = mysqli_query($conexion, $sql); 
  
  // RECORRE EL RESULTADO Y LO GUARDA EN UN ARRAY
  echo json_encode($result);
 
 

  header('Content-Type: application/json');

  
  
?>