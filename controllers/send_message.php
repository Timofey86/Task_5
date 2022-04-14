<?php
require_once '../config/connect.php';
require_once '../app/Send_Message.php';

use app\Send_Message;

$txt =$_POST['txt'];

$txt = mysqli_real_escape_string($db, $txt);
$send_message =new Send_Message($txt,$db);
$result = $send_message->sendToDataBase();

if ($result) {
    echo 1;
}else {
    echo 0;
}


