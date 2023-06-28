<?php

require_once("boilerplate/header.php");

@require_once("helpers/Auth.php");
@require_once("database/Database.php");
@include_once("helpers/Auth.php");

if (!isset($_GET['topic_id'])) {
	header('location: index.php');
	exit(0);
}

$topic_id = intval($_GET['topic_id']);

$topic = [];

$sql =
	"SELECT `topics`.*, `users`.`name` AS `username` 
	FROM `topics` 
	LEFT JOIN `users` ON `users`.`id` = `topics`.`user_id`
	WHERE `topics`.`id` = :id
	GROUP BY `topics`.`id`
";

$placeholders = [
	':id' => $topic_id
];

if (Database::query($sql, $placeholders)) {
	$topic = Database::get();
}

$replies = [];

$sql =
	"SELECT `replies`.*, `users`.`name` AS `username`
	FROM `replies`
	LEFT JOIN `users` ON `users`.`id` = `replies`.`user_id`
	WHERE `replies`.`topic_id` = :id
	GROUP BY `replies`.`id`
";

if (Database::query($sql, $placeholders)) {
	$replies = Database::getAll();
}

?>

<title>Topic | SD Forum</title>

<!-- BEGIN PAGINA CONTAINER -->
<div class="container main-content">
	<div class="row first-row">
		<div class="col s12">
			<!-- BEGIN TOPIC -->
			<div class="card cyan lighten-5">
				<div class="card-content">
					<div class="collection">
						<div class="collection-item row">
							<div class="col s3">
								<div class="avatar collection-link">
									<div class="row">
										<div class="col s3">
											<img src="http://www.gravatar.com/avatar/fc7d81525f7040b7e34b073f0218084d?s=50" alt="" class="square" />
										</div>
										<div class="col s9">
											<!-- TODO: Make this the user who made the Topic -->
											<p class="user-name"><?= $topic['username']  ?></p>
										</div>
									</div>
									<!-- TODO: Make this accurately diplay the date of the Topic's creation -->
									<p class="post-timestamp"><?= $topic['created_at'] ?></p>
								</div>
							</div>
							<div class="col s9">
								<div class="row last-row">
									<div class="col s12">
										<!-- TODO: Make this accurately display the title of the Topic -->
										<h6 class="title"><?= $topic['title'] ?></h6>
										<!-- TODO: Make this display the entire content of the Topic -->
										<p>
											<?= $topic['content'] ?>
										</p>
									</div>
								</div>
								<div class="row last-row block-timestamp">
									<div class="col s6 push-s6">
										<!-- TODO: Make this show the most recent edit date -->
										<p class="post-timestamp last-post-timestamp">
											Laatst aangepast op: <?= !empty($topic['updated_at']) ? $topic['updated_at'] : $topic['created_at']; ?>

										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- EINDE TOPIC -->

			<!-- TODO: Make it render all Replies using <php foreach(reply) ?> -->

			<!-- BEGIN REPLY -->
			<div class="card">
				<div class="card-content">
					<span class="card-title">Replies</span>
					<?php if (!empty($replies)) : ?>

						<?php foreach ($replies as $reply) : ?>

							<div class="collection">
								<div class="collection-item row">
									<div class="col s2">
										<!-- TODO: Make this accurately display the username of who reacted -->
										<span class="reply-username"><?= $reply['username'] ?></span>
										<!-- TODO: Make this accurately display when the comment was made -->
										<span class="reply-timestamp"><?= $reply['created_at'] ?></span>
									</div>
									<div class="col s10">
										<!-- TODO: Make this display the reply content -->
										<p><?= $reply['content'] ?></p>
									</div>
								</div>
							</div>
						<?php endforeach; ?>
					<?php endif; ?>
					<?php if (Auth::loggedIn()) : ?>
					<!-- TOEVOEGEN VAN EEN REPLY -->
					<div class="card">
						<div class="card-content">
							<form method="POST" action="handlers/create_reply.php?topic_id=<?= $_GET['topic_id'] ?>">
								<div class="row">
									<div class="col s12">
										<label for="body" class="active">Reactie</label>
										<textarea id="message-body" name="body"></textarea>
									</div>
								</div>
								<div class="row">
									<div class="col s6 push-s6">
										<button type="submit" class="btn right cyan darken-1"> Bewaren </button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<?php endif; ?>
					<!-- EINDE TOEVOEGEN VAN EEN REPLY -->
				</div>
			</div>
		</div>
		<!-- EINDE PAGINA CONTAINER -->

		<?php require_once("boilerplate/footer.php") ?>