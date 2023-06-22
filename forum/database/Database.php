<?php

class Database
{
   // Info needed to authenticate DB server
   private static $dbHost = '37.97.201.78';
   private static $dbName = 'forum';
   private static $dbUser = 'douwewesterdijk';
   private static $dbPass = 'DHW2004alfa!';

   // Creating a connection to the DB
   private static $db_connection = null;
   // Send SQL statement to the DB server
   private static $db_statement = null;

   private static function connect(): bool
   {
      try {
         self::$db_connection = new PDO(
            'mysql:host=' . self::$dbHost . ';dbname=' . self::$dbName,
            self::$dbUser,
            self::$dbPass
         );
      } catch (PDOException) {
         return false;
      }
      return true;
   }

   public static function query(string $sql, array $args = []): bool
   {
      if (is_null(self::$db_connection)) {
         if (!self::connect()) {
            return false;
         }
      }

      if (!empty($sql)) {
         try {
            self::$db_statement = self::$db_connection?->prepare($sql);
            self::$db_statement->execute($args);
         } catch (PDOException $error) {
            return false;
         }
      } else {
         return false;
      }
      return true;
   }

   public static function get(): array
   {

      $result = [];

      if (!is_null(self::$db_statement)) {
         $result = self::$db_statement?->fetch(PDO::FETCH_ASSOC);
         if (!$result) {
            $result = [];
         }
      }
      return $result;
   }

   public static function getAll(): array
   {

      $result = [];

      if (!is_null(self::$db_statement)) {
         $result = self::$db_statement->fetchAll(PDO::FETCH_ASSOC);

         if (!$result) {
            $result = [];
         }
      }
      return $result;
   }
}
