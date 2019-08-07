class Tabs2 {
    constructor(data) {
        this.data = data;
    }
    init() {
        this.createAllTables();
        this.addHoverEvent();

    }

    createAllTables() {


        let allTableString = "";

        // 循环所有所有table
        this.data.forEach(ele => {

            let trString = "";

            // 循环tr
            ele.forEach(ele1 => {
                let aString = "";

                // 循环tda数组
                ele1.tda.forEach(ele2 => {
                    let html = `<a href="">${ele2}</a>
                        <b>|</b>`;
                    aString += html;
                });

                let html1 = `<tr> <th>${ele1.th}</th>
                <td>${aString}
                </td></tr>`;

                trString += html1;
            });

            let htm2 = `<table class="fl table1">${trString}</table>`;
            allTableString += htm2;

        });


        $("#table1").html(allTableString);

    }

    addHoverEvent() {
        var index;

        $("#tabs").find(">li").hover(function () {
            index = $(this).index();

            // 显示对应索引的table1
            $(".table1").eq(index).css("display", "block").siblings("table").css("display", "none");


            // 显示右边一整块
            $("#center").css("display", "block");

            // 左边换背景
            $(this).css("background-color", "white").siblings("li").css("background-color", "#f7f7f7");



        }, function () {
            $(this).css("background-color", "#f7f7f7");


            $("#center").hover(function () {
                $(this).css("display", "block");


                $("#tabs").find(">li").eq(index).css("background-color", "white").siblings("li").css("background-color", "#f7f7f7");

            }, function () {
                $(this).css("display", "none");

                $("#tabs").find(">li").css("background-color", "#f7f7f7");
            })

            $("#center").css("display", "none");



        });

        $("#tabs2").find("li").hover(function () {
            

        }, function () {

        })

    };

}
new Tabs2(data2).init();