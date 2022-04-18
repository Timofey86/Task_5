document.addEventListener('DOMContentLoaded', function () {

    function showData() {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/controllers/getAllRecords.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let data = xhr.responseText;
                $("#data").html(data);
            }
        }
    }

    showData();

    function totalTask() {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/controllers/totalTask.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let data = xhr.responseText;
                $("#total_task").html(data);
            }
        }
    }

    totalTask();

    document.forms.form.onsubmit = function (e) {
        e.preventDefault();
        let txt = document.forms.form.txt.value;
        let body = 'txt=' + encodeURIComponent(txt);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/controllers/sendMessage.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(body);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                if (data == 1) {
                    let txt = document.forms.form.txt.value;
                    $('#form').trigger('reset');
                    showData();
                    totalTask();
                } else {
                    console.log(data);
                }
            }
        }
    }

    document.deleteItem = async function (id) {
        let element = document.getElementById(id);
        let responseResult = await fetch('/controllers/deleteTask.php',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: {id}
        });
        if (responseResult.status === 200) {
            let result = await responseResult.json();
            if (result === 1) {
                element.closest("td").style.display = "none";
                showData();
                totalTask();
            }
        }
    }

    let clear = document.getElementById('clear');
    clear.addEventListener('click', function () {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/controllers/clearTasks.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                if (data == 1) {
                    showData();
                    totalTask();
                }
            }
        }
    });
});