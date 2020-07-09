function getAjax(url, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.send();
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            fn(xhr.responseText);
        }
    }
}
function postAjax(str, url, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open('post', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(str);
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            fn(xhr.responseText);
        }
    }
}