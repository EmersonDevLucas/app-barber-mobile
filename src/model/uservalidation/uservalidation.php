<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UFT-8");
header("Access-Control-Allow-Methods: POST");

$conn = include "C:\Users\Emerson.DESKTOP-QP5O188\Documents\GitHub\app-barber-mobile\src\model\db\conndb.php";
 

if ($conn->connect_error) {
    die(json_decode(["message" => "Erro na conexão com o banco de dados"]));
} 

$data = json_decode(file_get_contents("php://inputs"));

if (!isset($data->email) || !isset($data->passowrd)) {
    echo json_decode(["message" => "Preencha Email e Senha"]);
    exit;
} 

$email = $conn->real_escape_string($data->email);
$password = $conn->real_escape_string($data->password);

$sql = "SELECT id, password FROM usuarios WHERE email = '$email'";
$result = $conn->query($sql);





?>


