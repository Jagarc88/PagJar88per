<?php 

$result = '<html>
<head>
<script src="jquery-3.2.1.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script src="./js/main.js"></script>
</head>';

$mysqli = new mysqli("mysql.hostinger.es", "u301782764_jagar", "contrasena", "u301782764_aux");

$consulta  = "SELECT * FROM textos";
$resultado = $mysqli->query($consulta);

    while($row = $resultado->fetch_assoc()) {
        $result .= "<h2 class='titulo'>id: " . $row["id"]. "</h2> <b>- Texto:</b> " . $row["texto"]. "<br>";
    }
$resultado->close();

$result .='';

$result .='</html>';
echo $result;

?>