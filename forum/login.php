<?php

require('app/boilerplate/header.php');

?>

<main>
   <div class="login-wrapper">
      <div class="welcome-txt">Welcome back</div>
      <form action="app/handlers/login.php" method="POST">
         <input id="username" type="text" name="username" placeholder="Username">
         <input id="password" type="password" name="password" placeholder="Password">
         <input id="login" type="submit" value="login">
         <button onclick="window.location.href='register.php'" type="button" id="register">Register</button>
      </form>
   </div>
</main>


<?php

require('app/boilerplate/footer.php');

?>