<?php

if ($_SERVER['REQUEST_METHOD'] != 'POST' || $_SERVER['SERVER_NAME'] != 'dhwesterdijk.nl') {
   die('No permissions.');
}

if (!isset($_POST['username']) || !isset($_POST['email']) || !isset($_POST['password'])) {
   die('Necessary information missing');
}

@include_once('../database/Database.php');

$name = htmlentities($_POST['username']);
$email = htmlentities($_POST['email']);
$password = password_hash(htmlentities($_POST['password']), PASSWORD_DEFAULT);

if ($name == '' || $email == '' || $password == password_hash('', PASSWORD_DEFAULT)) {
   die('Necessary information missing');
}

$sql = "INSERT INTO `users`(`name`, `email`, `password`) VALUES (:username, :email, :password)";
$placeholders = [':username' => $name, ':email' => $email, ':password' => $password];

if (Database::query($sql, $placeholders)) {
   header('location: ../login.php');
   exit(0);
} else {
   header('location: ../index.php');
   exit(0);
}
