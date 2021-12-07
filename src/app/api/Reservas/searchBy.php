<?php


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR

$datos = null;

$arrayRes = json_decode($json, true);


$sortBy = $arrayRes['sortBy'];
$searchInput = $arrayRes['searchInput'];





if ($sortBy == 'Fecha') {
  $sortBy = "datetime";
}
if ($sortBy == 'RUT') {
  $sortBy = 'rutCliente';
}
if ($sortBy == 'Espacio') {
  $sortBy = 'reserva';
}



require("../database.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

$conexion = connect(); // CREA LA CONEXION


$sql =   "SELECT * from reservasfutbolito where " . "$sortBy" . " like '" . "$searchInput" . "%'  UNION SELECT * from reservasfuttenis where " . "$sortBy" . " like '" . "$searchInput" . "%'  UNION SELECT * from reservasquincho where " . "$sortBy" . " like '" . "$searchInput" . "%'  UNION SELECT * from reservasfuncional where " . "$sortBy" . " like '" . "$searchInput" . "%'  ORDER BY " . "$sortBy" . " asc";

$registros = mysqli_query($conexion, $sql);
while ($resultado = mysqli_fetch_array($registros)) {
  $datos[] = $resultado;
}


// RECORRE EL RESULTADO Y LO GUARDA EN UN ARRAY

if ($datos == null) {
  echo null;
} else {
  $json = json_encode($datos); // GENERA EL JSON CON LOS DATOS OBTENIDOS

  echo $json; // MUESTRA EL JSON GENERADO
}


header('Content-Type: application/json');
