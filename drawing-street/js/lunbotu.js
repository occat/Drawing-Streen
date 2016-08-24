/**
 * Created by Administrator on 2016/5/5.
 */
//����
var box = document.getElementById("box");
var screen = box.children[0];
var ul = screen.children[0];
var ulLis = ul.children;
var ol = screen.children[1];

var arr = document.getElementById("arr");
var left = document.getElementById("left");
var right = document.getElementById("right");
var timer = null;

//alert(screen.offsetWidth);

var imgWidth = screen.offsetWidth;//ͼƬ���

//����ͼƬ������̬���ɰ�ť ��̬�������һ��ͼƬ
for (var i = 0; i < ulLis.length; i++) {
    //��̬���ɰ�ť
    var li = document.createElement("li");
    li.innerHTML = i + 1;//����li�ڲ��ı��
    ol.appendChild(li);
}
var olLis = ol.children;
olLis[0].className = "current";
//��̬�������һ��ͼƬ
var firstImg = ulLis[0].cloneNode(true);//��¡�ڵ� ��������ȿ�¡
ul.appendChild(firstImg);
//2.��꾭����ť ��ť���� ���ҽ�ul�ƶ���ָ��λ��
for (var j = 0; j < olLis.length; j++) {

    olLis[j].index = j;
    //��꾭�� ��ť����
    olLis[j].onmouseover = function () {
        //�ɵ�������
        for (var k = 0; k < olLis.length; k++) {
            olLis[k].className = "";
        }
        //�������Լ�
        this.className = "current";

        //������꾭���İ�ť��������ȥ�ƶ�ul

        //Ŀ�� �͵�ǰ��ť�������й� ��ͼƬ����й� �����Ǹ���
        var target = -this.index * imgWidth;
        animate(ul, target);

        //pic = this.index;//��Ӧ�ò��ŵ�ͼƬ��������ɵ�ǰ�����İ�ť������
        //square = this.index;//����һ��Ӧ������İ�ť������Ҳ��ɵ�ǰ�����İ�ť������
        pic = square = this.index;//�����Ͱ�����ͳһ��
    }
}


var pic = 0;//pic��ʾ��ǰӦ����ʾ��ͼƬ������

//���right �ƶ�ul��ָ��λ��
right.onclick = function () {
    playNext();
}
left.onclick = function () {
    //�ж� ��������һ�ž͸�����
    if (pic == 0) {
        ul.style.left = -(ulLis.length - 1) * imgWidth + "px";//һ��Ҫע���������ַ���
        //ͼƬ��λ���� ���һ��ͼƬ֮ǰ������ͼƬ�Ŀ�� �����Ǹ���
        pic = ulLis.length - 1;//������һ��ͼƬ������
    }
    pic--;
    var target = -pic * imgWidth;
    animate(ul, target);


    //��ťҲҪ������
    //�ж� ������ڵ�һ����ť����������-- ����������ť������
    if (square > 0) {
        square--;
    } else {
        square = olLis.length - 1;
    }
    //�ɵ�������
    for (var i = 0; i < olLis.length; i++) {
        olLis[i].className = "";
    }
    //���µ�ǰ��
    olLis[square].className = "current";
}

//����Զ�����
timer = setInterval(playNext, 1000)//ÿ��һ���Ӳ���һ��


var square = 0;//��ʾ��ǰӦ������İ�ť
function playNext() {
    //�ж� ��������һ�ž͸�����
    if (pic == ulLis.length - 1) {
        ul.style.left = "0px";
        pic = 0;
    }
    pic++;
    var target = -pic * imgWidth;
    animate(ul, target);

    //��ťҲҪ������
    //�ж� ���С�����һ����ť����������++ �������0
    if (square < olLis.length - 1) {
        square++;
    } else {
        square = 0;
    }
    //�ɵ�������
    for (var i = 0; i < olLis.length; i++) {
        olLis[i].className = "";
    }
    //���µ�ǰ��
    olLis[square].className = "current";
}

//���� ��������
//0.1��꾭������ ����ʱ��
//�����ť�ƶ�ul
//��꾭��box��ʾarr
box.onmouseover = function () {
    arr.style.display = "block";
    clearInterval(timer);
}
box.onmouseout = function () {
    arr.style.display = "none";
    timer = setInterval(playNext, 1000);
}

function animate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        /*//���offsetLeft<target ˵�� ������Ŀ����� Ӧ�������� step������
         if (obj.offsetLeft < target) {
         var step = 10;
         }
         //���offsetLeft>target ˵�� ������Ŀ���Ҳ� Ӧ�������� step�Ǹ���
         if (obj.offsetLeft > target) {
         var step = -10;
         }*/
        var step =800;
        step = obj.offsetLeft < target ? step : -step;
        leader = leader + step;
        if (Math.abs(obj.offsetLeft - target) > Math.abs(step)) {
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    },500)
}