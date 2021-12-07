<?php


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR

$datos = null;

$arrayRes = json_decode($json, true);


$sortBy = $arrayRes['sortBy'];
$searchInput = $arrayRes['searchInput']."%";

if($sortBy == 'Nombre'){
  $sortBy = 'nombre';
}
if($sortBy == 'Proveedor'){
  $sortBy = 'proveedor';
}
if($sortBy == 'Precio'){
  $sortBy = 'valorProducto';
}









require("../database.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

$conexion = connect(); // CREA LA CONEXION


$sql =   "SELECT * FROM productos WHERE ".$sortBy." LIKE '$searchInput'";


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

//  echo $sql; // MUESTRA EL JSON GENERADO


header('Content-Type: application/json');
