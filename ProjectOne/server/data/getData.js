// 获取选项卡导航数据1(只拿前部分,后半部分错误的)
var arrT = [];
$(".drop_links ").each(function (index, item) {
    var o = {};
    var arr1 = [];
    $(item).find("h4 a").each(function (index1, item1) {
        arr1[index1] = $(item1).html()
    });
    o.h3_a = arr1;

    var arr2 = [];
    $(item).find(".se_links a").each(function (index2, item2) {
        arr2[index2] = $(item2).html()
    });
    o.p_a = arr2;
    arrT.push(o);
})
console.log(JSON.stringify(arrT));

// 获取选项卡导航数据2
var arrT = [];
$(".se_links_ul").find("li").each(function (index, item) {

    var arr1 = [];
    $(item).find(".se_links_a  a").each(function (index1, item1) {
        arr1[index1] = $(item1).html();
    })
    arrT.push(arr1);
})
console.log(JSON.stringify(arrT));




//获取选项卡导航对应的列表数据
// arrT = [
//     [{
//         th: 手机,
//         tda: [1, 2, 3]
//     } {} {} {} {}][][][]
// ];
var arrT = [];
$(".ddwrap_brand_table").each(function (index, item) {

    var arr1 = [];
    $(item).find("tr").each(function (index1, item1) {

        var o = {};
        o.th = $(item1).find("label").html();
        var arr2 = [];
        $(item1).find("a").each(function (index2, item2) {
            arr2[index2] = $(item2).html();
        })
        o.tda = arr2;
        arr1.push(o);
    })
    arrT.push(arr1);
})
console.log(JSON.stringify(arrT));



// 获取轮播图2 数据
// arrT = [{
//     src:1 ,
//     title: 2,
//     price: 3,

// }];


var arrT = [];
$(".proslider").find("li").each(function (index, item) {

    var arr1 = {};
    arr1.src = $(item).find("img").attr("src");
    arr1.title = $(item).find(".title a").html();
    arr1.price = $(item).find(".price").html();

    arrT.push(arr1);
})
console.log(JSON.stringify(arrT));


// 获取轮播图3 数据
// arrT = [{
//     src:1 ,
//     title: 2,
//     price: 3,

// }];


var arrT = [];
$("#Container_HotSale").find("li").each(function (index, item) {

    var arr1 = {};
    arr1.src = $(item).find("img").attr("src");
    arr1.title = $(item).find(".title a").html();
    arr1.price = $(item).find(".price").html();

    arrT.push(arr1);
})
console.log(JSON.stringify(arrT));


// 获取轮播图5 数据
// arrT = [{
//     a_href:1 ,
//     img_src: 2,

// }];


var arrT = [];
$("#topslider_child").find("li").each(function (index, item) {

    var arr1 = {};
    arr1.a_href = $(item).find("a").attr("href");
    arr1.img_src = $(item).find("img").attr("src");

    arrT.push(arr1);
})
console.log(JSON.stringify(arrT));


// 获取好评热品goodsGoodReputation(弹性盒弹开) 数据
arrT = [{
    img_src: 0,
    recommendation: 1,
    title: 2,
    details: 3,
    rank_a: 4,
    user_name: 5,
    span_bg: 6
}];

var arrT = [];
$(".hot_comment_goods_c1 ").each(function (index, item) {
    var arr1 = {};
    // arr1.img_src = $(item).find("img").attr("src");
    // arr1.recommendation = $(item).find("strong").html();
    // arr1.title=$(item).find(".hot_comment_title").find("a").html();
    // arr1.details=$(item).find(".hot_comment_text").html();
    // arr1.rank_a=$(item).find(".rankB10").html();
    // arr1.user_name=$(item).find(".hot_comment_user p").html();
    arr1.span_bg = $(item).find(".hot_comment_user span").css("background");
    arrT.push(arr1);
})
console.log(JSON.stringify(arrT));



// 










$(".hot_comment_user span").each(function (index, item) {

    console.dir($(item).css("background").split('"')[1]);


})