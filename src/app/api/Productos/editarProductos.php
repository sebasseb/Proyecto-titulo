<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    die();
}

$json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR


$arrayRes = json_decode($json, true);

$id = $arrayRes['id'];
$nombre =  $arrayRes['nombre'];
$valorProducto = $arrayRes['valorProducto'];
$stock = $arrayRes['stock'];
$proveedor = $arrayRes['proveedor'];




require("../database.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

$conexion = connect(); // CREA LA CONEXION

// REALIZA LA QUERY A LA DB
mysqli_query($conexion, "UPDATE `productos` SET
 `nombre`='$nombre',
 `valorProducto`='$valorProducto',
 `stock`='$stock',
 `proveedor`='$proveedor'
 
 WHERE `id`='$id'");

header('Content-Type: application/json');
