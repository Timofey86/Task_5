<?php
require_once '../config/connect.php';
require_once '../app/Clear_Tasks.php';

use app\Clear_Tasks;

$clear_tasks = new Clear_Tasks($db);
$result = $clear_tasks->clearTasks();

if ($result) {
    echo 1;
} else {
    echo 0;
}
