<?php
require_once '../config/connect.php';
require_once '../app/AllRecords.php';

use app\Allrecords;

$get_all_records = new Allrecords($db);
$result = $get_all_records->getAllRecords();

if (mysqli_num_rows($result) > 0) {
    while ($row = $result->fetch_assoc()) {
        ?>
        <table width="300" border="1">
            <tr>
                <td width="200" align="center"><?php echo $row['txt'] . ' '; ?></td>
                <td align="right">
                    <button onclick="deleteItem(<?php echo $row['id'] ?>)" id="<?php echo $row['id'] ?>"
                            class="btn btn-danger">Delete
                    </button>
                </td>
            </tr>
        </table>
        <?php
    }
}

