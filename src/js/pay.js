
getAjax("../php/cart/interface/showlist.php", function fn(data) {
    var json = JSON.parse(data);
    var pro_main_box = document.querySelector('.pro_main_box');
    // var pro_title_top = document.querySelector('.pro_title_top');
    var str = "";
    if (json.code == 0) {
        str = `
        <p class="no_product" style="height: 40px;padding-bottom: 20px;line-height: 40px;color: red;font-weight: bold;text-align:center;">你的购物车空空如也！</p>
        `
    } else {
        var arrall = json.data;
        for (var i = 0; i < arrall.length; i++) {
            // console.log(arrall[i])
            var newArr = arrall[i]
            // console.log(newArr[2])
            str += ` 
            <label for="" class="float_left"><input readonly="readonly" class="checked"></label>
            <div class="pro_main clear_fix">
            <a href="javascript:;" class="float_left"><img src="${newArr[2]}" alt=""></a>
            <ul class="float_left">
                <li>
                    <a href="javascript:;" title="${newArr[1]}" class="p-name">${newArr[1]}</a>
                    <p class="p-info">${newArr[5]}</p>
                    <div class="p-label"> <span>分期免息</span> </div>
                </li>
                <li>
                    <div class="p-price"><span>${newArr[3]}</span></div>
                </li>
                <li>
                    <div class="p-stock">
                        <div class="p-stock-area clear_fix">
                            <input type="number" class="p-stock-text float_left" value="${newArr[4]}">
                                <p class="p-stock-btn float_left"><a href="javascript:;" class="disabled">−</a>
                                    <a href="javascript:;" class="add">+</a>
                                </p>
                         </div>
                    </div>
                </li>
                <li class="p-price-total">0</li>
                <li>
                    <a href="javascript:;" seed="cart-item-del" class="p-del">删除</a>
                </li>
            </ul>
            </div>`
        }
    }
    pro_main_box.innerHTML = str;

    var addPro = document.querySelector(".add");
    var cutPro = document.querySelector(".disabled");
    var numPro = document.querySelector(".p-stock-text");
    var pricePro = document.querySelector(".p-price");
    var allPrice = document.querySelector(".p-price-total");
    allPrice.innerHTML = pricePro.children[0].innerHTML * numPro.value;
    addPro.onclick = function () {
        var num = numPro.value++;
        allPrice.innerHTML = pricePro.children[0].innerHTML * (num + 1);
        $.get('../php/cart/interface/updatewq.php', {
            id: 070701,
            type: 'add'
        }, function (data) {
            var json = JSON.parse(data);
            if (json.code == 1) {
                alert('商品数量增加成功')
            }
        })

    }
    cutPro.onclick = function () {
        var num = numPro.value--;
        allPrice.innerHTML = pricePro.children[0].innerHTML * (num - 1);
    }
})





