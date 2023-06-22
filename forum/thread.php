<?php

require_once("boilerplate/header.php");

@require_once("helpers/Auth.php");
@require_once("database/Database.php");

if (!isset($_GET['thread_id'])) {
  header('location: index.php');
  exit(0);
}

$thread_id = intval($_GET['thread_id']);

$topics = [];

$sql =
  "SELECT `topics`.*, `users`.`name` AS `username`, COUNT(`replies`.`id`) AS `reply_count`
  FROM topics
  LEFT JOIN `users` ON `users`.`id` = `topics`.`user_id`
  LEFT JOIN `replies` ON `replies`.`topic_id` = `topics`.`id`
  WHERE `thread_id` = :thread_id
  GROUP BY `topics`.`id`
";

$placeholders = [
  ':thread_id' => $thread_id
];

if (Database::query($sql, $placeholders)) {
  $topics = Database::getAll();
}

?>

<title>Thread | SD Forum</title>

<!-- BEGIN PAGINA CONTAINER -->
<div class="container main-content">
  <div class="row first-row">

    <div class="col s12">
      <div class="card">
        <div class="card-content">
          <!-- TODO: Make this the name of the thread. -->
          <span class="card-title">Topics</span>
          <button onclick="openDialog()" class="btn right cyan darken-1">Nieuwe Topic</button>

          <dialog id="dialog" class="dialog-window">
            <form action="handlers/create_topic.php?thread_id=<?= $thread_id ?>" method="POST">
              <div class="card">
                <div class="card-content">
                  <div class="row">
                    <button type="button" onclick="closeDialog()" class="right btn circle cyan darken-1">X</button>
                    <div class="input-field col s6 has-error">
                      <input id="title" type="text" name="title" placeholder="Tik hier een titel voor het onderwerp in" />
                      <label for="title" class="active">Titel van de Topic</label>
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

          <div class="collection">

            <?php if (!empty($topics)) : ?>

              <?php foreach ($topics as $topic) : ?>

                <!-- BEGIN TOPIC -->
                <a href="topic.php?topic_id=<?= $topic['id'] ?>" class="collection-item avatar collection-link">
                  <img src="http://www.gravatar.com/avatar/fc7d81525f7040b7e34b073f0218084d?s=50" alt="" class="square">

                  <div class="row">

                    <div class="col s8">
                      <div class="row last-row">
                        <div class="col s12">
                          <span class="title"><?= $topic['title'] ?></span>
                          <p><?= $topic['content'] ?></p>
                        </div>
                      </div>
                      <div class="row last-row">
                        <div class="col s12 post-timestamp">Gepost door: <?= $topic['username'] ?> op: <?= $topic['created_at'] ?></div>
                      </div>
                    </div>

                    <div class="col s2">
                      <h6 class="title center-align">Replies</h6>
                      <p class="center replies"><?= $topic['reply_count'] ?></p>
                    </div>

                    <div class="col s2">
                      <h6 class="title center-align">Status</h6>
                      <div class="status-wrapper">
                        <span class="status-badge status-open">open</span>
                      </div>
                    </div>
                  </div>
                </a>

              <?php endforeach; ?>

            <?php else : ?>

              <div class="collection-item">
                <div class="row">
                  <div class="col s12">
                    <p>Geen topics beschikbaar op dit moment.</p>
                  </div>
                </div>
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