<?php
require_once '../config/connect.php';
require_once '../app/All_records.php';

use app\All_records;

$get_all_records = new All_records($db);
$result = $get_all_records->getAllRecords();

if (mysqli_num_rows($result) > 0) {
    while ($row = $result->fetch_assoc()) {
        ?>
        <table width="200" border="1">
            <tr>
                <td width="150" align="center"><?php echo $row['txt'] . ' '; ?></td>
                <td>
                    <button id="delete" data-id="<?php echo $row['id'] ?>" class="btn btn-danger">Delete</button>
                </td>
            </tr>
        </table>
        <?php
    }
}

