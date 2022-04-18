<?php
require_once '../config/connect.php';
require_once '../app/ClearTasks.php';

use app\ClearTasks;

$clear_tasks = new ClearTasks($db);
$result = $clear_tasks->clearTasks();

if ($result) {
    echo 1;
} else {
    echo 0;
}
