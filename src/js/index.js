// 删除顶部广告⬇
class Fn {
    constructor() {
        this.init();
    }
    init() {
        this.del();
    }
    del() {
        this.top = document.getElementById("top");
        this.span = this.top.children[0].children[0].children[1];
        var that = this;
        this.span.onmousedown = function () {
            document.body.removeChild(that.top);
        }
        window.onbeforeunload = function () {
            var str = `<div class="top-con">
                            <a href="#">
                                <img src="./images/qT1sHPHHTfczhPoPZbct.jpg" alt="">
                                <span></span>
                            </a>
                       </div>`;
            that.top.innerHTML = str;
            document.documentElement.scrollTop = 0;
        };
    }
}
var del = new Fn();
del.init();
// 删除顶部广告⬆

//轮播图⬇
//引入了swiper.js,就会有里面定义的Swiper构造函数
var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 是否无缝轮播
    autoplay: true,//是否自动轮播
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable :true,
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})
//轮播图⬆

// 首页单文字滚动⬇
$(function () {
    //1文字轮播(2-5页中间)开始

    $(".font_inner li:eq(0)").clone(true).appendTo($(".font_inner"));//克隆第一个放到最后(实现无缝滚动)
    var liHeight = $(".swiper_wrap").height();//一个li的高度
    //获取li的总高度再减去一个li的高度(再减一个Li是因为克隆了多出了一个Li的高度)
    var totalHeight = ($(".font_inner li").length * $(".font_inner li").eq(0).height()) - liHeight;
    // $(".font_inner").height(totalHeight);//给ul赋值高度
    var index = 0;
    var autoTimer = 0;//全局变量目的实现左右点击同步
    var clickEndFlag = true; //设置每张走完才能再点击

    function tab() {
        $(".font_inner").stop().animate({
            top: -index * liHeight
        }, 400, function () {
            clickEndFlag = true;//图片走完才会true
            if (index == $(".font_inner li").length - 1) {
                $(".font_inner").css({ top: 0 });
                index = 0;
            }
        })
    }

    function next() {
        index++;
        if (index > $(".font_inner li").length - 1) {//判断index为最后一个Li时index为0
            index = 0;
        }
        tab();
    }
    function prev() {
        index--;
        if (index < 0) {
            index = $(".font_inner li").size() - 2;//因为index的0 == 第一个Li，减二是因为一开始就克隆了一个LI在尾部也就是多出了一个Li，减二也就是_index = Li的长度减二
            $(".font_inner").css("top", - ($(".font_inner li").size() - 1) * liHeight);//当_index为-1时执行这条，也就是走到li的最后一个
        }
        tab();
    }
    //切换到下一张
    $(".swiper_wrap .gt").on("click", function () {
        if (clickEndFlag) {
            next();
            clickEndFlag = false;
        }
    });
    //切换到上一张
    $(".swiper_wrap .lt").on("click", function () {
        if (clickEndFlag) {
            prev();
            clickEndFlag = false;
        }
    });
    //自动轮播
    autoTimer = setInterval(next, 3000);
    $(".font_inner a").hover(function () {
        clearInterval(autoTimer);
    }, function () {
        autoTimer = setInterval(next, 3000);
    })

    //鼠标放到左右方向时关闭定时器
    $(".swiper_wrap .lt,.swiper_wrap .gt").hover(function () {
        clearInterval(autoTimer);
    }, function () {
        autoTimer = setInterval(next, 3000);
    })
    //1文字轮播(2-5页中间)结束
})
// 首页单文字滚动⬆


//mBanner ⬇
var box = document.getElementById('box'); var arr = document.getElementById('arr'); var left = document.getElementById('left'); var right = document.getElementById('right'); var screen = box.children[0]; var ul = screen.children[0]; var ol = screen.children[1]; var lis = ul.children; for (var i = 0; i < lis.length; i++) {
    var li = document.createElement('li'); li.index = i; li.onclick = liclick; if (i == 0) { li.className = 'current'; }
    ol.appendChild(li);
}
var liwidth = screen.offsetWidth; function liclick() {
    for (var i = 0; i < ol.children.length; i++) { ol.children[i].className = ''; }
    this.className = 'current'; index = this.index; animate(ul, -index * liwidth);
}
box.onmouseenter = function () { arr.style.display = 'block'; clearInterval(move); }
box.onmouseleave = function () { arr.style.display = 'none'; move = setInterval(function () { right.click(); }, 2000) }
var index = 0; left.onclick = function () {
    if (index === 0) { index = lis.length - 1; ul.style.left = -index * liwidth + 'px'; }
    index--; ol.children[index].click();
}
right.onclick = function () {
    if (index === lis.length - 1) { ul.style.left = '0px'; index = 0; }
    index++; if (index < lis.length - 1) { ol.children[index].click(); } else {
        animate(ul, -index * liwidth); for (var i = 0; i < ol.children.length; i++) { var li = ol.children[i]; li.className = ''; }
        ol.children[0].className = 'current';
    }
}
var first = ul.children[0]; var cloneli = first.cloneNode(true); ul.appendChild(cloneli); var move = setInterval(function () { right.click(); }, 2000)
function animate(element, target) {
    if (element.timerId) { clearInterval(element.timerId); element.timerId = null; }
    element.timerId = setInterval(function () {
        var step = 10; var current = element.offsetLeft; if (current > target) { step = -Math.abs(step); }
        if (Math.abs(current - target) <= Math.abs(step)) { clearInterval(element.timerId); element.style.left = target + 'px'; return; }
        current += step; element.style.left = current + 'px';
    }, 5);
}
//mBanner ⬆
