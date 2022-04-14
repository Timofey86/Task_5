<?php
require_once '../views/templates/header.php';
require_once '../views/templates/head.php';
?>
<body>
<div class="container">
    <form class="form" id="form">
        <h1>Todo list</h1>
        <div class="inputBox">
            <input type="text" id="txt" placeholder="Enter your Task" required>
            <button id="btn" class="btn btn-success"></
            >Добавить</button>
        </div>
    </form>
    <ul id="data">

    </ul>
    <div class="footer">
        <h3 id="total_task"></h3>
        <button class="btn btn-info" id="clear">Clear</button>
    </div>
</div>
<?php
require_once '../views/templates/footer.php';
?>
<script src="../controllers/js/main.js"></script>
</body>
</html>