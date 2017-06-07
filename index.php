<?php 

$result = '<html>

<head>
<script src="jquery-3.2.1.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script src="./js/main.js"></script>
<link rel="stylesheet" type="text/css" href="./css/main.css">
</head>';

include './php/funciones.php';
include './php/DAO.php';

//ENCABEZADO
$result .= '<div id="encabezado">';

$result .= include './php/encabezado.php';

$result .= '</div>';

// CUERPO_INDEX
$result .= '<div id="cuerpo_index">';


	/*
	// IZQUIERDA
	$result .= '
	<div id="izquierda_index">'

	include './php/izquierda.php'

		//IZQUIERDA - TOP
		include './php/izquierda_top.php'

		//IZQUIERDA - RESTO
		include './php/izquierda_resto.php'

	$result .= '
	</div>';
	*/

	// CUERPO
	$result .= '<div id="cuerpo">';

	$result .= include './php/cuerpo_index.php';

	$result .= '</div>';

// </div> CUERPO_INDEX
$result .= '</div>';

$result .='</html>';
echo $result;

?>