/**
 * Created by FL on 2016/4/9.
 */
$(".login-weixin").click(function(){
    $(".weixin").css("display","block");
    $(".weixin").css("top","155px");
    $(".weixin").css("left","368px");
});
$("#close").click(function(){
    $(".weixin").css("display","none");
})
var backtop = document.getElementsByClassName("backtop")[0];
document.onscroll = function(){
    if(document.body.scrollTop ===0){
        backtop.style.display = "none";
    }
    var height = document.body.scrollHeight - document.documentElement.clientHeight;
    if(document.body.scrollTop ===height){
        backtop.style.display = "block";
    }
}
backtop.onclick = function(){
    window.scrollTo(0,0);
}

//var input1 = document.getElementById("input1");
//input1.onfocus =function(){
//    input1.value = "";
//}
//var topbar=document.getElementById("topbar");
//topbar.onclick = function(){
//    input1.value = "用户名";
//}
//var input2 = document.getElementById("input2");
//input2.onfocus =function(){
//    input2.value = "";
//}
//input2.onblur = function(){
//    input2.value = "密码";
//}

var box = document.getElementById("weixin");
var drop = document.getElementById("wei-top");

drop.onmousedown = function (e) {
    e = e || window.event;
    var spaceX =  e.pageX - box.offsetLeft+204;
    var spaceY =  e.pageY - box.offsetTop;
    document.onmousemove = function (e) {
        var x = e.clientX - spaceX;
        var y = e.clientY - spaceY;
        console.log(x);
        console.log(y);
        box.style.left = x + "px";
        box.style.top = y + "px";
    }
}
document.onmouseup = function () {
    document.onmousemove = null;
}
