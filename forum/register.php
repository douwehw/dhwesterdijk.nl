<?php

require_once('boilerplate/header.php');

?>

<main>
   <div class="register-wrapper">
      <div class="reg-welcome-txt">Register</div>
      <form action="" method="POST">
         <input class="register" id="username" type="text" name="username" placeholder="Username">
         <input class="register" id="email" type="text" name="email" placeholder="Email">
         <input class="register" id="password" type="password" name="password" placeholder="Password">
         <input class="register" id="repeat-password" type="password" name="repeat-password" placeholder="Repeat password">
         <input class="register" id="register" type="submit" value="register">
      </form>
   </div>
</main>

<?php

require_once('boilerplate/footer.php');

?>