<?php

require_once('boilerplate/header.php');

$topic_template = file_get_contents('boilerplate/topic.php');

?>

<main>
   <div class="topic-wrapper">

      <?php
      echo $topic_template;
      echo $topic_template;
      echo $topic_template;
      echo $topic_template;
      echo $topic_template;
      echo $topic_template;
      echo $topic_template;
      echo $topic_template;
      echo $topic_template;
      echo $topic_template;
      ?>

   </div>
</main>

<?php

require_once('boilerplate/footer.php');

?>