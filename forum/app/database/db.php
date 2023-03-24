<?php

/*

// Info needed to authenticate DB server
$dbHost = '127.0.0.1';
$dbName = 'forum-module';
$dbUser = 'root';
$dbPass = '';

// Creating a connection to the DB
$db_connection = null;
// Send SQL statement to the DB server
$db_statement = null;

function dbConnect(): bool {
   global $dbHost, $dbName, $dbUser, $dbPass, $db_connection;

   if (is_null($db_connection)) {
      try {
         $db_connection = new PDO("mysql:host={$dbHost};dbname={$dbName};", $dbUser, $dbPass);
      } catch(PDOException $error) {
         return false;
      }
      return true;
   }
}

function dbQuery($sql, $params = []): bool {
   global $db_connection, $db_statement;

   if(is_null($db_connection)) {
      if(!dbConnect()) {
         return false;
      }
   }

   if(!empty($sql)) {
      try {
         $db_statement = $db_connection?->prepare($sql);
         $db_statement->execute($params);
      } catch(PDOException $error) {
         return false;
      }
   } else {
      return false;
   }
   return true;
}

function dbGet(): array {
   global $db_statement;

   $result = [];

   if(!is_null($db_statement)) {
      $result = $db_statement?->fetch(PDO::FETCH_ASSOC);
      if(!$result) {
         $result = [];
      }
   }
   return $result;
}

function dbGetAll(): array {
   global$db_statement;

   $result = [];

   if(!is_null($db_statement)) {
      $result = $db_statement->fetchAll(PDO::FETCH_ASSOC);

      if(!$result) {
         $result = [];
      }
   }
   return $result;
}

*/