/**
 * Created by Administrator on 2016/5/5.
 */
var box = document.getElementById("box");
var opacity = 0;
//开启定时器
var timerId =  setInterval(function () {
    //设置透明度
    opacity += 0.01;
    box.style.opacity = opacity.toString();
    box.style.filter = "alpha(opacity="+ opacity*100 +")";

    //完全透明之后 清空定时器，并设置透明度为完全不透明
    if (opacity >= 1) {
        box.style.opacity = "1";
        box.style.filter = "alpha(opacity=100)";
        clearInterval(timerId);
    }
}, 30);