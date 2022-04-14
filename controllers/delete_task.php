<?php
require_once '../config/connect.php';
require_once '../app/delete_task.php';

use app\Delete_Task;

$id = $_POST['id'];
$delete_task = new Delete_Task($id,$db);
$result = $delete_task->deleteTask();

if ($result) {
    echo 1;
} else {
    echo 0;
}
