<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] != 'POST' || $_SERVER['SERVER_NAME'] != 'localhost') {
   die("Geen toegang");
}

if (!isset($_POST['email']) || !isset($_POST['password'])) {
   die("Benodidge informatie ontbreekt");
}

@include_once('../database/Database.php');

$email = htmlentities($_POST['email']);
$password = htmlentities($_POST['password']);

$sql = "SELECT * FROM `USERS` WHERE `email` = :email";
$placeholders = [':email' => $email];

$users = [];

if (Database::query($sql, $placeholders)) {
   $user = Database::get();
}

if (empty($user)) {
   header('location: ../../login.php');
   exit(0);
}

if (password_verify($password, $user['password'])) {
   $_SESSION['user_id'] = $user['id'];
   $_SESSION['username'] = $user['name'];
   $_SESSION['role'] = intval($user['role']) == 0 ? 'User' : 'Admin';

   header('location: ../index.php');
   exit(0);
}

header('location: ../login.php');
exit(0);