<?php
require '../database.php';
function create($con)
{
    $postdata = file_get_contents("php://input");
    $nombreproducto = 'Gatorade';
    $id_proveedor = '1';
    $stock = '1';
    $precio = '19990';
    

    // Create.
    $sql = "INSERT INTO `inventario`(`nombre`,`id_proveedor`,`stock`,`precio`) VALUES 
    ('{$nombreproducto}','{$id_proveedor}','{$stock}','{$precio}')";

    if (mysqli_query($con, $sql)) {
        echo 'INSERTADO';
    } else {
        http_response_code(422);
        echo 'sechingo';
    }
}

create($con);