<?php

$columnas = ["id","texto"];
$nombreTablas = ["textos"];

function select() {

$mysqli = new mysqli("localhost", "pruebauser", "contrasena", "prueba");

	$consulta  = "SELECT * FROM textos";
	$resultado = $mysqli->query($consulta);

    return $resultado;
}

function select_condition($pre ,$condiciones, $post) {

	$mysqli = new mysqli("localhost", "pruebauser", "contrasena", "prueba");

	$consulta  = "SELECT * FROM textos";

	if(sizeof($condiciones) > 0){

		$consulta .= " WHERE";
		for ($i=0; $i<sizeof($condiciones); $i++) {
			$consulta .= " ".$pre[$i]." ". $condiciones[$i] ." '".$post[$i]."'";

			if($i < sizeof($condiciones)-1){
				$consulta .= " AND";
			}
		}
	}

	$consulta .= ";";

	echo $consulta;

	$resultado = $mysqli->query($consulta);

    return $resultado;
}

?>
