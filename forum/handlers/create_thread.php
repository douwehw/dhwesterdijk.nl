<?php

if ($_SERVER['REQUEST_METHOD'] != 'POST' || $_SERVER['SERVER_NAME'] != 'localhost') {
   die('No permissions.');
}

if (!isset($_POST['title']) || !isset($_POST['body'])) {
   die('Necessary information missing');
}

@include_once('../database/Database.php');
@include_once('../helpers/Auth.php');

$title = htmlentities($_POST['title']);
$body = htmlentities($_POST['body']);

if ($title == '' || $body == '') {
   die('Necessary information missing');
}

$sql = "INSERT INTO `threads`(`title`, `description`, `user_id`) VALUES (:title, :body, :userid)";
$placeholders = [':title' => $title, ':body' => $body, ':userid' => Auth::getLoggedInUserID()];

if (Database::query($sql, $placeholders)) {
   header('location: ../index.php');
   exit(0);
} else {
   header('location: ../login.php');
   exit(0);
}
