var btn = document.querySelector('.button');
var name1 = document.getElementById('un');
var word = document.getElementById('pw');

    //用户名正则，由数字、26个英文字母或者下划线组成的字符串:
    // var reg = /^[0-9a-zA-Z_]{1,}$/;
    //输出 true

btn.onclick = function () {
    // if(reg.test("name1.value")){
    //     console.log(777);
    // }else{
    //     name1.value=""
    //     name1.setAttribute("placeholder","数字/26个英文字母/下划线!");
    // }
    console.log(999)
    postAjax("username=" + name1.value + "&password=" + word.value, "../php/login.php", function (date) {
        var json = JSON.parse(date);
        if (json.code) {
            alert('登录成功！');
            window.location.replace("./index.html");
        } else {
            alert('登录失败！');
            history.go(0);
            // console.log(555)
        }
    })
}
