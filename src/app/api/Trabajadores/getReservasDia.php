<?php 
  header("Access-Control-Allow-Origin: *"); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("../database.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $link = connect();
  $date = $_GET['date'].'%';

  
  
  $registros = mysqli_query($link, "SELECT SUBSTRING(datetime,12,2) FROM reservas WHERE datetime like '$date'");
  

  $datos = null;
  while ($resultado = mysqli_fetch_array($registros))  
  {
    $datos= $resultado;
  }
  
  $json = json_encode($datos); 
  
  echo $json; 

  //$miArray = array("manzana"=>"verde", "uva"=>"Morada", "fresa"=>"roja");
  //print_r(json_encode($miArray));
  

  header('Content-Type: application/json');
?>