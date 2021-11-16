<?php
 
if($_POST) {
    $name = $_POST['nome'];  
    $email = $_POST['email'];
    $message = $_POST['messaggio'];
    $recipient = "giuliapolenta@gmail.com";
    $mailheader = "From: $email \r\n";
    
    if(mail($recipient, $message, $mailheader)) {
        $alert = "Grazie per averci contattato, $name!<br>Tra pochi secondi verrai reindirizzato alla home page";
    } else {
        $alert = "Siamo spiacenti, la sua email non è stata inviata correttamente. <br> Può inviare una email all'indirizzo <a href='mailto:info@asppolverigi.it' style='color: #12184a;'>info@asppolverigi.it</a>";
    }   
  
    header( "refresh:3;url=index.html" );
    echo "<body style='margin: 0; padding: 0; overflow: hidden'><div style='width: 100vw; height: 100vh; background-color:#E3F1FF;'>
    <p style='font-family: HK Grotesk; font-size: 18px; font-weight: bold; color: #12184a; line-height: 1.5; margin: 0 auto; 
    text-align:center; padding-top: 50vh;'>$alert</p></div></body>";

}
?>