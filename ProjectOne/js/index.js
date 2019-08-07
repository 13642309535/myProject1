
// 搜索框事件
$("#sousuokuang").focus(function (index,item) {
    
    $("#sousuokuang").attr("placeholder","")
})
$("#sousuokuang").blur(function (index,item) {
    
    $("#sousuokuang").attr("placeholder","请输入您要搜索的关键字")
})

