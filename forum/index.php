<?php

require_once("boilerplate/header.php");
@include_once("database/Database.php");
@include_once("helpers/Auth.php");

$threads = [];

$sql =
  "SELECT 
  `threads`.*, 
  COUNT(`topics`.`id`) AS `topics_count`,
  `users`.`name` AS `username`
FROM `threads`
LEFT JOIN `topics` ON `threads`.`id` = `topics`.`thread_id`
LEFT JOIN `users` ON `threads`.`user_id` = `users`.`id`
GROUP BY `threads`.`id`;";

if (Database::query($sql)) {
  $threads = Database::getAll();
}

?>

<title>Home | SD Forum</title>

<!-- BEGIN PAGINA CONTAINER -->
<div class="container main-content">

  <div class="row first-row">
    <div class="col s12">
      <div class="card">
        <div class="card-content">
          <span class="card-title">Threads</span>
          <?php if (Auth::isAdmin()) : ?>
            <button type="button" onclick="openDialog()" class="btn right cyan darken-1">Nieuwe Thread</button>

            <dialog id="dialog" class="dialog-window">
              <form action="handlers/create_thread.php" method="POST">
                <div class="card">
                  <div class="card-content">
                    <div class="row">
                      <button type="button" onclick="closeDialog()" class="right btn circle cyan darken-1">X</button>
                      <div class="input-field col s6 has-error">
                        <input id="title" type="text" name="title" placeholder="Tik hier een titel voor het onderwerp in" />
                        <label for="title" class="active">Titel van de Thread</label>
                        <span>Titel is verplicht!</span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col s12">
                        <textarea id="message-body" class="textarea-height" name="body"></textarea>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col s6 push-s6">
                        <button type="submit" name="action" class="btn right cyan darken-1"> Toevoegen </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </dialog>

          <?php endif; ?>


          <div class="collection">
            <!-- BEGIN VAN EEN THREAD -->
            <?php if (!empty($threads)) : ?>
              <?php foreach ($threads as $thread) : ?>
                <a href="thread.php?thread_id=<?= $thread['id'] ?>" class="collection-item avatar collection-link">
                  <img src="img/icon-php.png" alt="" class="circle">
                  <div class="row">
                    <div class="col s9">
                      <div class="row last-row">
                        <div class="col s12">
                          <span class="title"><?= $thread['title'] ?></span>
                          <p><?= $thread['description'] ?></p>
                        </div>
                      </div>
                      <div class="row last-row">
                        <div class="col s12 post-timestamp">Moderator: <?= $thread['username'] ?></div>
                      </div>
                    </div>
                    <div class="col s3">
                      <h6 class="title center-align">Statistieken</h6>
                      <p class="center-align"><?= $thread['topics_count'] ?> topics</p>
                    </div>
                  </div>
                </a>
                <!-- EINDE VAN EEN THREAD -->

              <?php endforeach; ?>
            <?php else : ?>
              <div class="collection-item">
                Geen threads gevonden.
              </div>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
<!-- EINDE PAGINA CONTAINER -->

<?php require_once("boilerplate/footer.php") ?>