<?php 
  header("Access-Control-Allow-Origin: *"); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("../database.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  //$json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR


  //$arrayRes = json_decode($json,true);

 // $dia = $arrayRes['dia'];


  $link = connect();
  
  // REALIZA LA QUERY A LA DB
  $registros = mysqli_query($link, "SELECT * FROM reservas" );
  
  // RECORRE EL RESULTADO Y LO GUARDA EN UN ARRAY
  while ($resultado = mysqli_fetch_array($registros))  
  {
    $datos[]= $resultado;
  }
  
  $json = json_encode($datos); // GENERA EL JSON CON LOS DATOS OBTENIDOS
  
  echo $json; // MUESTRA EL JSON GENERADO

  //$miArray = array("manzana"=>"verde", "uva"=>"Morada", "fresa"=>"roja");
  //print_r(json_encode($miArray));
  

  header('Content-Type: application/json');
?>