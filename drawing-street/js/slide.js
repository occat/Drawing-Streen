/**
 * Created by Administrator on 2016/4/10.
 */
//动态创建7个li
var ul = document.getElementById("banner_main");
var arr = document.getElementById("arr");
var arrRight = document.getElementById("arr_right");
var arrLeft = document.getElementById("arr_left");
var ol = document.getElementById("banner_focus");
var imgWidth = ul.parentNode.offsetWidth;
var banner = ul.parentNode.parentNode;
var timer =  null;
for (var i = 0; i < 7; i++) {
    var li = document.createElement("li");
    ul.appendChild(li);
    var link = document.createElement("a");
    li.appendChild(link);
    link.href = "javascript:void(0)";
    link.className = "fl";
    var img = document.createElement("img");
    link.appendChild(img);
    img.src = 'images/zbanner_' +
        i +
        '.png';
}
var ulList = ul.children;


for (var i = 0; i < ulList.length; i++) {
    var li = document.createElement("li");
    ol.appendChild(li);
    li.className = "fl";
}
var firstPic = ul.children[0];
var lastPic = firstPic.cloneNode(true);
ul.appendChild(lastPic);
var olList = ol.children;
olList[0].className = "fl current";
for (var i = 0; i < olList.length; i++) {
    olList[i].index = i;
    olList[i].onclick = function () {
        for (var k = 0; k < olList.length; k++) {
            olList[k].className = "fl";
        }
        this.className = "fl current";
        var target = -this.index * imgWidth
        animate(ul, target);
        square = pic = this.index;
    }
}
arr.style.display = "none"
banner.onmouseover = function () {
    arr.style.display = "block";
    clearInterval(timer);
}
banner.onmouseout = function () {
    arr.style.display = "none";
    timer = setInterval(function () {
        play();
    },2000)
}
var pic = 0;
console.log(ulList.length)
arrRight.onclick = function () {
    play();
}
arrLeft.onclick = function () {
    if (pic === 0) {
        ul.style.left = -(ulList.length - 1)*imgWidth + "px";
        pic = ulList.length - 1;
    }
    pic --;
    var target = -pic * imgWidth;
    animate(ul,target);

    if (square > 0) {
        square--;
    } else {
        square = olList.length - 1;
    }

    for(var i = 0; i < olList.length; i++) {
        olList[i].className = "fl";
    }
    olList[square].className = "fl current"
}
//添加自动滚动
timer = setInterval(function () {
    play();
},2000)
var square = 0;
function play() {
    if (pic === ulList.length - 1) {
        ul.style.left = 0;
        pic = 0;
    }
    pic ++;
    var target = -pic * imgWidth;
    animate(ul,target);

    if (square < olList.length - 1) {
        square++;
    } else {
        square = 0;
    }

    for(var i = 0; i < olList.length; i++) {
        olList[i].className = "fl";
    }
    olList[square].className = "fl current"
}


function animate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 35;
        step = leader < target ? step : -step;
        if (Math.abs(target - leader) > Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    }, 15)
}




//var step = 958;
//timer = setInterval(function () {
//    //leader = leader + step
//    var leader = ul.offsetLeft;
//    var target = (ulList.length-1) * imgWidth;
//    step = 958;
//
//    if(-target < leader) {
//        leader = -leader + step;
//        ul.style.left = - leader + "px";
//    } else if (-target == leader){
//        ul.style.left = -imgWidth + "px";
//    }
//},2000)
