<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR


$arrayRes = json_decode($json, true);
//echo json_encode($arrayRes);

$rut =  $arrayRes['rut'];
$passwd = $arrayRes['passwd'];


require("../database.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

$conexion = connect(); // CREA LA CONEXION

// REALIZA LA QUERY A LA DB
$registros = mysqli_query($conexion, "SELECT * from trabajadores where rut = '$rut' and passwd = '$passwd'");

while ($resultado = mysqli_fetch_array($registros)) {
  $datos[] = $resultado;
}
if (isset($datos)) {
  $json = json_encode($datos); // GENERA EL JSON CON LOS DATOS OBTENIDOS
  echo $json; // MUESTRA EL JSON GENERADO  
}else{
  echo null;
}









class Result
{
}



header('Content-Type: application/json');
