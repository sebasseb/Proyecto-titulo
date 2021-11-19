<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');










$json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR


$arrayRes = json_decode($json, true);


$rut =  $arrayRes['usuario'];
$passwd = $arrayRes['password'];

/*
$rut =  '19015485-8';
$passwd = '123456';
*/
require("../database.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

$conexion = connect(); // CREA LA CONEXION

// REALIZA LA QUERY A LA DB
$registros = mysqli_query($conexion, "SELECT * from trabajadores where rut = '$rut' and passwd = '$passwd'");

while ($resultado = mysqli_fetch_array($registros)) {
  $datos[] = $resultado;
}
if (isset($datos)) {
  $json = json_encode($datos); // GENERA EL JSON CON LOS DATOS OBTENIDOS
  //echo $json; // MUESTRA EL JSON GENERADO 
  
  $arr = array('alg' => 'HS256' , 'typ' => 'JWT');
 
  $header = base64url_encode(json_encode($arr));
  $payload = base64url_encode($json);
  //$payload = base64url_encode($json);
  //$header_payload = $header . '.' . $payload;

  $header_payload = $header . '.' . $payload;
 
  $signature = hash_hmac('sha256',$header_payload,'canchaseb');
  $signature = base64url_encode($signature);
  $jwt = $payload;
  
  $res = [
    "token" => $jwt,
    "data" => $datos
  ];

  echo json_encode($res);
  

  //echo $json;
  
  
 
 

  
}else{
  echo json_encode('null');
}




function base64url_encode($data) {
  return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

function base64url_decode($data) {
  return base64_decode(str_pad(strtr($data, '-_', '+/'), strlen($data) % 4, '=', STR_PAD_RIGHT));
}




