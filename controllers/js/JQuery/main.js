$(document).ready(function () {

    function showData() {
        $.ajax({
            url: '/controllers/get_all_records.php',
            type: 'POST',
            success: function (result) {
                $("#data").html(result);
            }
        });
    }

    showData()

    function totalTask() {
        $.ajax({
            url: '/controllers/total_task.php',
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

        $.ajax({
            url: '/controllers/send_message.php',
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

    $(document).on("click", "#delete", function () {
        id = $(this).data("id");
        element = $(this);

        $.ajax({
            url: '/controllers/delete_task.php',
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
    })

    document.deleteItem = function (id) {
        let element = $('#'+id);
        //console.log("element:", element);
        $.ajax({
            url: '/controllers/delete_task.php',
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
            url: '/controllers/clear_tasks.php',
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


