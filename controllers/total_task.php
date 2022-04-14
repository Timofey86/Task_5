<?php
require_once '../config/connect.php';
require_once '../app/Total_Task.php';

use app\Total_Task;

$total_task = new Total_Task($db);
$result = $total_task->getTotalTask();

$count = mysqli_num_rows($result);
?>

Total Task <span><?php echo $count; ?></span>
