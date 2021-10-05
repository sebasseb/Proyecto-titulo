<?php

/**
 * Returns the list of policies.
 */
require 'database.php';

$productos = [];
$sql = "SELECT id, nombre, id_proveedor, stock, precio FROM inventario";

if ($result = mysqli_query($con, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $productos[$i]['id']    = $row['id'];
        $productos[$i]['nombre'] = $row['nombre'];
        $productos[$i]['id_proveedor'] = $row['id_proveedor'];
        $productos[$i]['stock'] = $row['stock'];
        $productos[$i]['precio'] = $row['precio'];
        $i++;
    }

    echo json_encode($productos);
} else {
    http_response_code(404);
}
