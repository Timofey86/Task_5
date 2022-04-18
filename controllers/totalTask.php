<?php
require_once '../config/connect.php';
require_once '../app/TotalTask.php';

use app\TotalTask;

$total_task = new TotalTask($db);
$result = $total_task->getTotalTask();

$count = mysqli_num_rows($result);
?>

Total Task <span><?php echo $count; ?></span>
