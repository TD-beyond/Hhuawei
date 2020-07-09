var arr = []
for (var i in data[0]) {
    arr.push(data[0][i]); //属性
    // arr.push(data[i]); //值
}
var nuImg = "";
for (var i = 1; i < 8; i++) {
    nuImg += `<div class="swiper-slide"><a href="" target="_blank"><img src="${arr[i]}"alt=""></a>'</div>`;
}
$(".swiper-wrapper")[0].innerHTML = nuImg;
$('.addToCart').click(function(){
    // $.get('../js/cart/interface/addwq.php',{
    $.get('../php/cart/interface/addwq.php',{
        id:data[0].goodsId,
        img:data[0].img0,
        price:data[0].price,
        name:data[0].name,
        details:data[0].details
    },function(data){
        var json = JSON.parse(data);
        if(json.code==1){
            alert('添加商品成功');
        }
    })
})
// 3 删除购物车里面的指定id的商品
// 接口:./interface/delwq.php?id=10000

$('.delProduct').click(function () {
    $.get('../php/cart/interface/delwq.php', {
        id: data[0].goodsId
    }, function (data) {
        var json = JSON.parse(data);
        if (json.code == 1) {
            alert('商品删除成功')
        }
    })
})
