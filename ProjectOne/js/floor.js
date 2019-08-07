class floor {
    constructor(data) {
        this.data = data;
        this.dataList = data.dataList;
        this.dataList2 = data.dataList2;
        this.title = data.title;
    }
    init() {
        this.createHTML()

    }
    createHTML() {

        var arrLi = [];
        this.dataList.map(function (ele, index) {

            let allLiString = ``;
            ele.map(function (ele1, index1) {

                let liString = `<li>
                <img class="img1"
                    src=${ele1.img1_src} alt="">
                <img class="img2"
                    src=${ele1.img2_src} 
                    alt="">
                <p>
                ${ele1.title} 
                </p>
                <span>${ele1.price} </span>
            </li>`;

                allLiString += liString;

                return allLiString;

            })
            arrLi.push(allLiString);

        });

        var arrLi1 = [];
        this.dataList2.map(function (ele, index) {

            let allLiString1 = ``;
            ele.map(function (ele1, index1) {

                let liString1 = `<li>
                <a href="">
                    <img src=${ele1}   alt="">
                </a>
            </li>`;

                allLiString1 += liString1;
                return allLiString1;

            })
            arrLi1.push(allLiString1)
        })

        var html = ``;
        for (let i = 0, length = this.title.length; i < length; i++) {

            let html1 = ` 
            <div class="left3 ">
            <h2>${this.title[i]}</h2>
            <ul class="ul3"> ${arrLi[i]}</ul>
            <ul class="ul3p"> ${arrLi1[i]} </ul>
            </div>`
            html += html1;
        }


        $(".floor").html(html);

        $(".left3").css("margin-bottom", "20px")


        $(".left3").each(function (index, item) {

            let lunbotu7 = ` <div class="fl  lunbotu7""></div>`;

            $(item).find(".ul3 li").eq(0).after(lunbotu7);

            $(".lunbotu7").css({
                "width": "480",
                "height": "205"
            })

        })



    }


}

new floor(allFloor).init();

// li图片路径undefined的更改图片
$(".floor .left3  li").each(
    function (index, item) {

        let index1 = index;
        let src = $(item).find("img").attr("src");

        if (src == "undefined") {
            $(".floor .left3  li").eq(index1).html('<img src="https://c2.neweggimages.com.cn/WebResources/2009/Default/Nest/img_v3/stockout130507.jpg" alt="">')

        }
    }
)