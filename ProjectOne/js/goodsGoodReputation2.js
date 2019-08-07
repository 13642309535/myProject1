class goodsGoodReputation2 {

    constructor(data) {
        this.data = data;
        this.index = null;
    }
    init() {

        this.createHTML();
        this.addEvent();
    }

    createHTML() {

        let arr_title = this.data.title.map((ele) => {
            return `<span class="span1">${ele}</span>`;
        });


        let arr_dataList = this.data.dataList.map(function (ele) {

            let ulString = ``;

            let liString = ``;
            liString = ele.map(function (ele2) {

                if (ele2.img_src2) {

                    return ` <li>
                    <img class="img1"
                            src=${ele2.img_src1}
                           alt="">
                       <p>${ele2.title}</p>
                        <img class="img2"
                            src=${ele2.img_src2}
                           alt="">
                       <span>${ele2.price}</span>
    
                     </li>`;
                } else {

                    return ` <li>
                    <img class="img1"
                            src=${ele2.img_src1}
                           alt="">
                       <p>${ele2.title}</p>
                       <span>${ele2.price}</span>
                     </li>`;
                }
            }).join("");

            ulString = `<ul class="ul2">${liString}</ul>`;
            return ulString;
        })



        var html = ``;
        for (let i = 0, length = arr_title.length; i < length; i++) {

            let html1 = `<li class="li1"> ${arr_title[i]}${arr_dataList[i]}</li>`;
            html += html1;
        }

        $("#goodsGoodReputation2").html(html);

    }

    addEvent() {

        // 初始化
        $("#goodsGoodReputation2 .ul2").eq(0).css("display", "block");

        // 划过li事件
        $("#goodsGoodReputation2  .li1").hover(function (ele) {

            let index = $(this).index();

            // 标题事件

            // 改变标题背景
            $("#goodsGoodReputation2 .span1").css("background", "#F6F6F6");
            $(this).find(".span1").css("background", "white");

            // 改变标题边框
            $("#goodsGoodReputation2 .span1").css("border-bottom", "1px solid #d9d9d9");
            $(this).find(".span1").css("border-bottom", "none");

            // 改变标题字体颜色
            $("#goodsGoodReputation2 .span1").css("color", "#666");
            $(this).find(".span1").css("color", "#f60");


            





            // 列表详情事件
            $("#goodsGoodReputation2 .ul2").css("display","none");
            $(this).find(".ul2").css("display","block");

        }, );






    }
}


var goodsGoodReputation22 = new goodsGoodReputation2(goodsGoodReputation2_data);
goodsGoodReputation22.init();