<?php
if (session_status() == PHP_SESSION_NONE) {
   session_start();
}

class Auth
{

   public static function loggedIn(): bool {
      if (isset($_SESSION['user_id']) && isset($_SESSION['username'])) {
         return true;
      } else {
      return false;
      }
   }

   public static function getLoggedInUserID(): int {
      if (isset($_SESSION['user_id'])) {
         return intval($_SESSION['user_id']);
      } else {
         return 0;
      }
   } 

   public static function getLoggedInUsername(): string {
      if (isset($_SESSION['username'])) {
         return $_SESSION['username'];
      } else {
         return '';
      }
   }

   public static function login(): void {
      $_SESSION['user_id'] = $user['id'];
      $_SESSION['username'] = $user['name'];
   }

   public static function logout(): void {
      if (session_status() == PHP_SESSION_ACTIVE) {
         if (isset($_SESSION['user_id'])) {
            unset($_SESSION['user_id']);
         }

         if (isset($_SESSION['username'])) {
            unset($_SESSION['username']);
         }

         session_destroy();
      }
   }
}