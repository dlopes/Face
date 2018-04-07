<?php

    // Ignora todos os caracters até a primeira vírgula depois de ";" (semicolon)

    $png = substr(
                $_POST['base64'],
                strpos($_POST['base64'], ";") + 1
    );

    $png = substr(
                $png,
                strpos($png, ",") + 1
    );

    

    var_dump($_POST['base64']);





?>