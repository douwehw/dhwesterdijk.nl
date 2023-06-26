<?php

if ($_SERVER['REQUEST_METHOD'] != 'POST' || $_SERVER['SERVER_NAME'] != 'dhwesterdijk.nl') {
   die("Geen toegang");
}

if (!isset($_POST['title']) || !isset($_POST['body'])) {
   die("Benodidge informatie ontbreekt");
}

@include_once('../database/Database.php');
@include_once('../helpers/Auth.php');

$title = htmlentities($_POST['title']);
$body = htmlentities(($_POST['body']));

$sql = "INSERT INTO `topics`(`title`, `content`, `user_id`, `thread_id`) VALUES (:title, :content, :userid, :threadid)";
$placeholders = [':title' => $title, ':content' => $body, ':userid' => Auth::getLoggedInUserID() ?? 1, ':threadid' => $_GET['thread_id']];

if (Database::query($sql, $placeholders)) {
   header('location: ../thread.php?thread_id=' . $_GET['thread_id']); // this should redirect to the new thread
   exit(0);
} else {
   die($_GET['thread_id']); // redirect to index.php
   exit(0);
}
