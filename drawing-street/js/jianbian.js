/**
 * Created by Administrator on 2016/5/5.
 */
var box = document.getElementById("box");
var opacity = 0;
//������ʱ��
var timerId =  setInterval(function () {
    //����͸����
    opacity += 0.01;
    box.style.opacity = opacity.toString();
    box.style.filter = "alpha(opacity="+ opacity*100 +")";

    //��ȫ͸��֮�� ��ն�ʱ����������͸����Ϊ��ȫ��͸��
    if (opacity >= 1) {
        box.style.opacity = "1";
        box.style.filter = "alpha(opacity=100)";
        clearInterval(timerId);
    }
}, 30);