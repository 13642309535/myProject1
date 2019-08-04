$(function () {

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


            $("#tabs").find(">li").hover(function () {
                let index = $(this).index();

                $(".table1").eq(index).css("display", "block").siblings("table").css("display", "none");
                $(".table2 ").css("display", "block");
                $(".bg1").css("display", "block");
                
                $("#center").css("display", "block");
                $(this).css("background-color", "white");
                $(this).css("zindex", "10");



            }, function () {

                $(".table1").css("display", "none");
                $("#center").css("display", "none");

            });

        };

    }
    new Tabs2(data2).init();



})