<<?php 
$servername = "localhost:3306";
$username = "root";
$password = "Ehsegredo1!";
$database = "bdbarberapp";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    echo "conexão falhou";
} else {
    echo "conexão realizada";
}


























?>