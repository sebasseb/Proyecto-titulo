<?php 
  header("Access-Control-Allow-Origin: *"); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("../database.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $link = connect();
  $rut = $_GET['rut'];
 //$rut = '19015485-8';
  
  // REALIZA LA QUERY A LA DB
  $registros = mysqli_query($link, "SELECT * FROM trabajadores where rut='$rut'");
  
  // RECORRE EL RESULTADO Y LO GUARDA EN UN ARRAY
  $datos = null;
  while ($resultado = mysqli_fetch_array($registros))  
  {
    $datos= $resultado;
  }
  
  $json = json_encode($datos); // GENERA EL JSON CON LOS DATOS OBTENIDOS
  
  echo $json; // MUESTRA EL JSON GENERADO

  //$miArray = array("manzana"=>"verde", "uva"=>"Morada", "fresa"=>"roja");
  //print_r(json_encode($miArray));
  

  header('Content-Type: application/json');
?>