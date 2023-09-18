const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";

function getData(){$.ajax({method: "GET", url: urlBacon, dataType: "json"})

    .done(function (data) {console.log(data);})
    .fail(function () {alert("no good");});
}
function getData1(){$.ajax({method: "GET", url: urlBacon, dataType: "json"})

    .done(function (data) {console.log(data);})
    .fail(function () {alert(console.log("no good"));});
}
$.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    beforeSend: function (xhr) {
        xhr.overrideMimeType("text/plain; charset=x-user-defined");
    }
})
    .done(function (data) {
        if (console && console.log) {
            console.log("Sample of data:", data.slice(0, 100));
        }
    });
    var url = "http://localhost:8080/api/v1/users";
    //var url = 'https://jsonplaceholder.typicode.com/todos';
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhr.send(null);
    var url = "http://localhost:8080/api/v1/users";
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url + '/1', true)
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhr.send(null);
    var data = {};
    //data.firstname = "John";
    //data.lastname = "Snow";
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhr.send(json);
getData1();
getData();