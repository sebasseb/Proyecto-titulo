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

$rutCliente =  $arrayRes['rutCliente'];
$nombreCliente = $arrayRes['nombreCliente'];
$reserva = $arrayRes['reserva'];
$datetime = $arrayRes['datetime'];
$telefono = $arrayRes['telefono'];



require("../database.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

$conexion = connect(); // CREA LA CONEXION

$sql =  "UPDATE reservas$reserva SET rutCliente = '$rutCliente', nombreCliente = '$nombreCliente', reserva = '$reserva', datetime = '$datetime', telefono = '$telefono' WHERE datetime = '$datetime'";

// REALIZA LA QUERY A LA DB
$result = mysqli_query($conexion,$sql);

echo json_encode($result);

header('Content-Type: application/json');
