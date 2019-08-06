class goodsGoodReputation {

    constructor(data) {
        this.data = data;
        this.index = 0;
    }
    init() {

        this.createHTML();
        this.addHover();


    }

    createHTML() {

        var html1 = this.data.map((ele) => {
            return `<li>
            <div class="ago">
                <img src=${ele.img_src} alt=""
                    class="fl">

                <div class="fl">

                    <h3>
                        <strong>${ele.recommendation}</strong>
                        <a href="">${ele.title}</a>
                    </h3>
                    <p class="p1">${ele.details}</p>
                    <div class="bottom">
                        <div class="fl rank"><a href="">${ele.rank_a}</a></div>

                        <div class="fr user">
                            <p class="fl p2">${ele.user_name}</p>
                            <span></span>

                        </div>

                    </div>
                </div>

            </div>
            <div class="later">
                <h3>
                ${ele.title}
                </h3>

                <div>
                    <p>${ele.recommendation}</p>
                    <p>${ele.rank_a.split("[")[1].split("]")[0]}人已评论</p>
                </div>
                <img src=${ele.img_src}  alt="">
            </div>
        </li>`
        }).join("");
        $("#goodsGoodReputation").html(html1);

    }


    addHover() {

        $("#goodsGoodReputation").find("li").hover(function () {

            $(this).css("width", "670px").siblings("li").css("width", "175px");
            this.index = $(this).index();
            console.log(this.index);

            $(".ago").css("display", "none");
            $(".ago").eq(this.index).css("display", "block");

            $(".later").css("display", "block");
            $(".later").eq(this.index).css("display", "none");



        });




    }
}

var goodsGoodReputation1 = new goodsGoodReputation(goodsGoodReputation_data);
goodsGoodReputation1.init();