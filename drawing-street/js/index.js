/**
 * Created by Administrator on 2016/4/24.
 */
//����һ�������Ϳ������޵Ĵ������ƵĶ���

var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d")

//С��Ĺ��캯��  ͨ�����������д�ڹ��캯���� ����ķ���д��ԭ����
function Ball(str) { //��������캯���п���ͨ������һ��json��ʽ�Ĳ��������ö���ĸ������� ���Կ�76-86�д������ľ�������һ������
    this.r = str.r //�뾶
    this.color = str.color //��ɫ
    this.x = str.x //xλ��
    this.y = str.y //yλ��
    this.speed = str.speed // �ٶ�
    this.angle = str.angle //�Ƕ�
    this.p = 0 //С����С��֮�����ײ���״̬��  �տ�ʼ����һ������ײ״̬

}
Ball.prototype = { //С���ԭ��
    //С��ԭ���еĵ� �˶�����
    update: function() {

        if (this.p != 1) //p=0û����ײ����p=2�ס��
        //���С��֮��û����ײ�����ǵ�xλ�üӵ���cos�����ĽǶ�*��/180)�����ҿ����ԽǶ����˶���regTorad 69-72��  �Ƕȱ仡�Ⱥ��� yλ��ͬ�� ͬʱ����poo���� poo�������ж��Ƿ�ײ���߽��
        {
            this.x += this.speed * Math.cos(regTorad(this.angle))
            this.y += this.speed * Math.sin(regTorad(this.angle))
            this.poo();
        } else { //������ײ״̬
            //���С��֮����ײ���������˶��켣�ʹӼӵȱ�Ϊ�˼���ͬʱ����peng���� peng�����Ǹı����˶��ĽǶȡ��������ײ�켣д�ĺֲܴ� ��Ҫ���ڸĽ�  Ȼ���ٽ�����״̬��Ϊ����ײ״̬

            this.x -= this.speed * Math.cos(regTorad(this.angle))
            this.y -= this.speed * Math.sin(regTorad(this.angle))
            this.peng()
            this.p = 2; //��ײ����״̬
        }
    },
    rander: function() { //��Ⱦ���� canvas��һЩapi
        ctx.beginPath() //��ʼһ��·��
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true) //����
        ctx.fillStyle = this.color //·�����ɫ
        ctx.closePath() //����·��
        ctx.fill() //��Ⱦ
    },
    poo: function() {
        //��һ���ж��ж�С���Ƿ�ͬʱ���������� ��������ı������˶��Ƕ� ����Ǻͷ���ǵ�֪ʶ
        if ((this.x > 800 - this.r && this.y > 400 - this.r) || (this.x < 0 + this.r && this.y < 0 + this.r) || (this.x < 0 + this.r && this.y > 400 - this.r) || (this.x > 800 - this.r && this.y < 0 + this.r)) {
            this.angle = (180 + this.angle)%360;
            // this.speed = -this.speed;
        } else if (this.x > 800 - this.r || this.x < 0 + this.r) { //�ж���������������
            this.angle = 180 - this.angle
        } else if (this.y > 400 - this.r || this.y < 0 + this.r) { //�ж���������������
            this.angle = 360 - this.angle
        }
    },
    peng: function() {
        this.angle = 90 + this.angle
    }
}


function regTorad(reg) {
    var rad = reg * Math.PI / 180
    return rad;
}


//����Ĺ��캯����ԭ��д���� Ȼ��Ϳ�������
var COLOURS = ['#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423']; //����һ������洢������ɫ
var ball = [] //����һ������洢���������json����
//���������forѭ����o���������ɫλ���ٶȵģ�С��push������ball
var ballNum = parseInt(prompt("������С�������(2-10)")) % 11;
if (!ballNum || ballNum < 2) {
    ballNum = 2;
}
for (var o = 0; o < ballNum; o++) {
    ball.push({
        x: 15 + parseInt(Math.random() * 750),
        y: 15 + parseInt(Math.random() * 355),
        r: 15,
        speed: 0.1 + 10 * Math.random(),
        color: COLOURS[parseInt(Math.random() * 8)], //���0-7������ֵ��Ӧ��COLORS�������ɫ
        angle: 360 * Math.random()
    })

}

var b = [] //�ٶ���һ���������洢Ball����//��ʼ��
for (var i = 0; i < ball.length; i++) {
    var a = new Ball(ball[i])
    b.push(a)
}
setInterval(function() {
    //ÿ�����canvas����
    ctx.clearRect(0, 0, 1900, 1000)

    for (var i = 0; i < ball.length; i++) {
        b[i].rander() //Ȼ��b���������ÿ�������ڶ�ʱ������Ⱦ���˶�
        b[i].update()
    }
    for (var i = 0; i < ball.length; i++) {
        //�����Ǹ���json�������ÿ��json����Ball�����Ȼ����������json����һ��Ball�����ʵ��Ȼ�������push��b������
        var flag = true;
        for (var j = 0; j < ball.length; j++) {
            //����ÿ��С�������Ȼ��Ա�λ�ù�ϵ���С�ڵ��������뾶������ײ�� ����һ��û����ײ��p!=2��
            if (i != j) {
                if ((Math.abs(b[i].x - b[j].x) <= 30) && (Math.abs(b[i].y - b[j].y) <= 30)) {
                    if (b[i].p != 2 && b[j].p != 2) {
                        b[i].p = 1
                        b[j].p = 1
                    }
                    flag = false;
                }
            }
        }
        if (flag) {
            b[i].p = 0
        }
    }
}, 10)