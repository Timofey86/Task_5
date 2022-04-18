<?php
require_once '../config/connect.php';
require_once '../app/SendMessage.php';

use app\SendMessage;

$txt = $_POST['txt'];

$txt = mysqli_real_escape_string($db, $txt);
$send_message = new SendMessage($txt, $db);
$result = $send_message->sendToDataBase();

if ($result) {
    echo 1;
} else {
    echo 0;
}


