<?php 

$columnas = ["id","texto"];
$nombreTablas = ["textos"];

function select() {

	$mysqli = new mysqli("mysql.hostinger.es", "u301782764_jagar", "contrasena", "u301782764_aux");

	$consulta  = "SELECT * FROM textos";
	$resultado = $mysqli->query($consulta);

    return $resultado;
}

?>