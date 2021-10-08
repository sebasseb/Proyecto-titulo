<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("../database.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
    
  $conexion = connect(); // CREA LA CONEXION

  $rut = $_GET['rut'];
  echo $rut;
  // REALIZA LA QUERY A LA DB
  $registros = mysqli_query($conexion, "SELECT * FROM trabajadores WHERE rut=$rut");
  
  // SI EL USUARIO EXISTE OBTIENE LOS DATOS Y LOS GUARDA EN UN ARRAY
  if ($resultado = mysqli_fetch_array($registros))  
  {
    $datos[] = $resultado;
    $json = json_encode($datos); // GENERA EL JSON CON LOS DATOS OBTENIDOS
    
  }else{
    $json = null;
  }
  
  echo $json; // MUESTRA EL JSON GENERADO

  
  
  header('Content-Type: application/json');
?>