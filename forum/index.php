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
   <div class="wrapper">
   <div class="thread-bar"></div>
   <div class="thread-wrapper">
   <button class="new-topic">New Thread</button>
   <div class="create-new-topic">
      <form action="app/handlers/create_topic.php">
         <!-- TODO! create the damn handler -->
         <input type="text" id="topic-name" placeholder="Give your topic a name">
         <textarea id="topic-content" placeholder="Tell us about your topic"></textarea>
         <input type="submit" id="create-topic" value="Create Topic">
      </form>
   </div>
      <?= $thread_template ?>
      <?= $thread_template ?>
      <?= $thread_template ?>
      <?= $thread_template ?>
      <?= $thread_template ?>
      <?= $thread_template ?>
      <?= $thread_template ?>
      <?= $thread_template ?>
   </div>
   </div>
</main>

<?php require_once('app/boilerplate/footer.php'); ?>