<?php
$result_cuerpo_index = "";

$pre = array("id","texto");
$cond = array("=","=");
$post = array("3","BUENO");

//$resultado = select_condition($pre ,$cond, $post);
$resultado = select();

if ($resultado->num_rows > 0) {
	
	    while($row = $resultado->fetch_assoc()) {
	        $result_cuerpo_index .= "<h2 class='titulo'>id: " . $row["id"]. "</h2> <b>- Texto:</b> " . $row["texto"]. "<br>";
	    }
	$resultado->close();
}

$result_cuerpo_index .='<br>'.writeMsg();

return $result_cuerpo_index;

?>