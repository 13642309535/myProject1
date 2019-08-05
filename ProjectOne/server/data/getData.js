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
    arr1.src= $(item).find("img").attr("src");
    arr1.title= $(item).find(".title a").html();
    arr1.price= $(item).find(".price").html();

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
$("#Container_HotSale").find("li").each(function (index, item) {

    var arr1 = {};
    arr1.src= $(item).find("img").attr("src");
    arr1.title= $(item).find(".title a").html();
    arr1.price= $(item).find(".price").html();

    arrT.push(arr1);
})
console.log(JSON.stringify(arrT));
