$(document).ready(function () {

    function showData() {
        $.ajax({
            url: '/controllers/getAllRecords.php',
            type: 'POST',
            success: function (result) {
                $("#data").html(result);
            }
        });
    }

    showData()

    function totalTask() {
        $.ajax({
            url: '/controllers/totalTask.php',
            type: 'POST',
            success: function (result) {
                $("#total_task").html(result);
                console.log(result);
            }
        });
    }

    totalTask();


    $("#btn").on("click", function (e) {
        e.preventDefault();
        txt = $("#txt").val();
        if (txt == ''){
            alert('Enter the Task!')
            die;
        }

        $.ajax({
            url: '/controllers/sendMessage.php',
            type: 'POST',
            data: {
                txt: txt
            },
            success: function (result) {
                if (result == 1) {
                    txt = $("#txt").val();
                    //alert("ToDo list Added Successfully");
                    $('#form').trigger('reset');
                    showData();
                    totalTask();
                } else {
                    console.log(result);
                }
            }
        });
    });

    /*$(document).on("click", "#delete", function () {
        id = $(this).data("id");
        element = $(this);

        $.ajax({
            url: '/controllers/deleteTask.php',
            type: 'POST',
            data: {
                id: id
            },
            success: function (result) {
                if (result == 1) {
                    $(element).closest("td").fadeOut();
                    showData();
                    totalTask();
                }
            }
        });
    })*/

    document.deleteItem = function (id) {
        let element = $('#'+id);
        $.ajax({
            url: '/controllers/deleteTask.php',
            type: 'POST',
            data: {
                id: id
            },
            success: function (result) {
                if (result == 1) {
                    $(element).closest("td").fadeOut();
                    showData();
                    totalTask();
                }
            }
        });

    }

    $(document).on("click", "#clear", function () {
        $.ajax({
            url: '/controllers/clearTasks.php',
            type: 'POST',
            success: function (result) {
                if (result == 1) {
                    showData();
                    totalTask();
                }
            }
        });
    })
});


