<?php
@require_once('app/database/Database.php');

$array = ["foo", "bar"];
$threads = [];
if(Database::query("SELECT * FROM `threads`")) {
   $threads = Database::getAll();
}

?>
<a href="thread.php" class="open-thread">
   <div class="thread">
      <div class="info-wrapper">
         <img src="content/images/thumbs-up.webp" alt="thread icon" class="thread-icon" height="75">
         <h1 class="thread-name">Name</h1>
         <h4 class="thread-description">Desc.</h4>
         <h6 class="posted-by">user</h6>
      </div>
      <div class="statistics-wrapper">
         <h4 class="stats-text">Statistics</h4>
         <h1 class="threads-count">10</h1>
      </div>
   </div>
</a>