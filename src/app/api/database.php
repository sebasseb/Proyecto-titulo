<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

function connect()
{

	$dbname = 'canchaseb';

	$connection = mysqli_connect('localhost', 'root', '', $dbname);

	if (!$connection) {
		echo "No se ha podido conectar con el servidor";
	}

	$db = mysqli_select_db($connection, $dbname);


	return $connection;
}
