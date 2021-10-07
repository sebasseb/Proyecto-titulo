<?php

function connect(){

  	 $dbname = 'canchaseb';

	 $connection = mysqli_connect('localhost', 'root', '', $dbname);

	 if(!$connection){
		echo "No se ha podido conectar con el servidor" ;
	 }

	 $db = mysqli_select_db($connection,$dbname);


	 return $connection;
}

