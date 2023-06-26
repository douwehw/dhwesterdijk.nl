<?php

if ($_SERVER['REQUEST_METHOD'] != 'POST' || $_SERVER['SERVER_NAME'] != 'dhwesterdijk.nl') {
  die('No permissions.');
}

if (!isset($_POST['body'])) {
  die('Necessary information missing');
}

@include_once('../database/Database.php');
@include_once('../helpers/Auth.php');

$body = htmlentities($_POST['body']);

if ($body == '') {
  die('Necessary information missing');
}

$sql = "INSERT INTO `replies`(`content`, `user_id`, `topic_id`) VALUES (:body, :userid, :topicid)";
$placeholders = [':body' => $body, ':userid' => Auth::getLoggedInUserID(), ':topicid' => $_GET['topic_id']];

if (Database::query($sql, $placeholders)) {
  header('location: ../topic.php?topic_id=' . $_GET['topic_id']);
  exit(0);
} else {
  header('location: ../login.php');
  exit(0);
}
