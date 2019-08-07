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



// 获取好评热品goodsGoodReputation2(tab切换) 数据
arrT = {
    title: [],
    dataList: [
        [{
                img_src: 0,

            }, {}, {}, {}, {}

        ],
        [],
        [],
        [],
    ]

};


var dataList = [];

$(".promotion").find(".tabc").each(function (index, item) {

    var arr2 = [];

    $(item).find("li").each(function (index1, item1) {
        var arr1 = {};
        arr1.img_src1 = $(item1).find(".img img").attr("src");
        arr1.img_src2 = $(item1).find("span img").attr("src");
        arr1.title = $(item1).find(".title a").html();
        arr1.price = $(item1).find(".price").html();
        console.log(arr1);

        arr2.push(arr1);
    })


    dataList.push(arr2);
})
console.log(JSON.stringify(dataList));



// 获取main3 floor 数据
arrT = {
    title: [],
    dataList: [
        [{
                img1_src: 0,
                img2_src: 1,
                title: 2,
                price: 3


            }, {}, {}, {}, {}, {}

        ],

        [],
        [],
        [],
    ],

    dataList2: [
        [],
        [],
        [],
        [],

    ]

};

var arrT = {};
arrT.title = [];
dataList = [];
dataList2 = [];


$(".col720 .floor").each(function (index, item) {
    arrT.title[index] = $(item).find("h2").html();

    var arr2 = [];
    $(item).find(".brandlogo  li").each(function (index1, item1) {

        arr2.push($(item1).find("img").attr("src"));
    })
    dataList2.push(arr2);


    let arr1 = [];
    $(item).find(".prolist ").each(function (index1, item1) {
        let obj = {};
        obj.img1_src = $(item1).find(".img img").attr("src");
        obj.img2_src = $(item1).find(".icon_pro img").attr("src");

        obj.title = $(item1).find(".title  a").html();

        obj.price = $(item1).find(".price").html();
        arr1.push(obj);
    })

    dataList.push(arr1);

})
arrT.dataList = dataList;
arrT.dataList2 = dataList2;

console.log(JSON.stringify(arrT));


// 获取轮播图7 数据
var arr = [
    [



    ]
    []
    []
    []
]
var arrT = [];
$(".ad_slider").each(function (index, item) {
    let arr1 = [];
    $(item).find("li").each(function (index1, item1) {

        arr1.push($(item1).find("img").attr("src"))
    })
    arrT.push(arr1);
})
console.log(JSON.stringify(arrT));