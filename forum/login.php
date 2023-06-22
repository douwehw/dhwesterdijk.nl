<?php require_once("boilerplate/header.php") ?>

<title>Login | SD Forum</title>

<!-- BEGIN PAGINA CONTAINER -->
<div class="container main-content">
  <div class="row first-row">
    <div class="col s6 push-s3">

      <!-- BEGIN LOGIN FORMULIER -->
      <div class="card">
        <div class="card-content">
          <div class="row">
            <form class="col s12" method="POST" action="handlers/login.php">
              <h1 class="title">Inloggen</h1>
              <div class="row">
                <div class="input-field col s12">
                  <input id="Email" name="email" type="text" class="validate">
                  <label for="Email">Email</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="Password" type="password" name="password" class="validate">
                  <label for="Password">Wachtwoord</label>
                </div>
              </div>
              <div class="row">
                <div class="col s12">
                  <button class="btn waves-effect waves-light right" type="submit" name="action">
                    Log in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- EINDE LOGIN FORMULIER -->

    </div>
  </div>
</div>
<!-- EINDE PAGINA CONTAINER -->

<?php require_once("boilerplate/footer.php") ?>