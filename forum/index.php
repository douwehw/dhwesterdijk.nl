<?php

require_once('app/boilerplate/header.php');

@require_once('app/database/Database.php');
@require_once('app/helpers/Auth.php');


if (!Auth::loggedIn()) {
   header('location: login.php');
}

$thread_template = file_get_contents('app/boilerplate/threads.php')

?>

<main>
   <div class="thread-wrapper">
      <?= $thread_template ?>
   </div>
</main>

<?php

require_once('app/boilerplate/footer.php');

?>