<?php
require_once '../config/connect.php';
require_once '../app/DeleteTask.php';

use app\DeleteTask;

$id = $_POST['id'];
$delete_task = new DeleteTask($id, $db);
$result = $delete_task->deleteTask();

if ($result) {
    echo 1;
} else {
    echo 0;
}
