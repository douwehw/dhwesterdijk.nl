<?php
@require_once('Auth.php');

Auth::logout();

header('location: ../../login.php');
exit();