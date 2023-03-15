<?php

require_once('boilerplate/header.php')

?>

<main>
   <div class="thread-wrapper">
      <div class="thread-container">

         <h1 class="thread-name">This is a topic.</h1>
         <hr class="thread-name-underline">

         <div class="topic-wrapper">
            <?php echo file_get_contents('boilerplate/topic.php'); ?>
         </div>

      </div>
   </div>
</main>

<?php

require_once('boilerplate/footer.php')

?>