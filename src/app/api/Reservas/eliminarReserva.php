<?php


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR

$datos = null;

$arrayRes = json_decode($json, true);

$reserva = $arrayRes['reserva'];
$datetime = $arrayRes['datetime'];
$rut = $arrayRes['rutCliente'];


require("../database.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

$conexion = connect(); // CREA LA CONEXION


$sql =   "DELETE FROM reservas"."$reserva"." WHERE datetime ='$datetime' and rutCliente = '$rut'";

$registros = mysqli_query($conexion, $sql);



// RECORRE EL RESULTADO Y LO GUARDA EN UN ARRAY
echo json_encode($registros);

header('Content-Type: application/json');
