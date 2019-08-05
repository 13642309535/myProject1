/* 当页面加载完，先获取当前的时间和目标购买的时间比较->距离开始：00天00小时00分钟00秒(实时更新)*/
/* 如果时间到了，切换为另一张图片 + 切换购买图片 + 处理倒计时 */

let oSpanH=document.getElementById("spanH");
let oSpanM=document.getElementById("spanM");
let oSpanS=document.getElementById("spanS");

/* [1] 设置目标时间 */
var target = new Date(2019, 7, 11, 15, 26, 00);
console.log(target);

/* [2] 开启定时器计算并显示倒计时 */
var timer = setInterval(function () {
    var currentDate = new Date();
    var offset = Math.round((target.getTime() - currentDate.getTime()) / 1000);

    // if (offset <= 0) {
    //     /* 切换图片 */
    //     oProduct.src = "./img/2.png";
    //     oActive.src = "./img/3.jpg";
    //     oCountDown.innerText = "";

    //     /* 关闭倒计时 */
    //     clearInterval(timer);
    // }

    var d = Math.floor(offset / 60 / 60 / 24);

    var h = Math.floor(offset / 60 / 60 % 24);
    var m = Math.floor(offset / 60);
    var s = Math.floor(offset % 60);
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);

    oSpanH.innerText=h;
    oSpanM.innerText=m;
    oSpanS.innerText=s;

}, 1000);


function addZero(a) {
    if (a < 10) {
        a ="0" + a;
    }
    return a;
}

