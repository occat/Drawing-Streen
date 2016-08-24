/**
 * Created by Administrator on 2016/4/24.
 */
//构建一个对象后就可以无限的创造类似的东西

var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d")

//小球的构造函数  通常对象的属性写在构造函数中 对象的方法写在原型中
function Ball(str) { //在这个构造函数中可以通过传进一个json格式的参数来设置对象的各项属性 可以看76-86行传进来的就是这样一个参数
    this.r = str.r //半径
    this.color = str.color //颜色
    this.x = str.x //x位置
    this.y = str.y //y位置
    this.speed = str.speed // 速度
    this.angle = str.angle //角度
    this.p = 0 //小球与小球之间的碰撞检测状态机  刚开始给它一个非碰撞状态

}
Ball.prototype = { //小球的原型
    //小球原型中的的 运动方法
    update: function() {

        if (this.p != 1) //p=0没有碰撞或者p=2黏住了
        //如果小球之间没有碰撞则他们的x位置加等于cos（它的角度*π/180)正余弦可以以角度做运动，regTorad 69-72行  角度变弧度函数 y位置同理 同时调用poo方法 poo方法是判断是否撞到边界的
        {
            this.x += this.speed * Math.cos(regTorad(this.angle))
            this.y += this.speed * Math.sin(regTorad(this.angle))
            this.poo();
        } else { //进入碰撞状态
            //如果小球之间碰撞了那他的运动轨迹就从加等变为了减等同时调用peng方法 peng方法是改变了运动的角度。这里的碰撞轨迹写的很粗糙 需要后期改进  然后再将他的状态变为非碰撞状态

            this.x -= this.speed * Math.cos(regTorad(this.angle))
            this.y -= this.speed * Math.sin(regTorad(this.angle))
            this.peng()
            this.p = 2; //碰撞结束状态
        }
    },
    rander: function() { //渲染方法 canvas的一些api
        ctx.beginPath() //开始一段路径
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true) //画弧
        ctx.fillStyle = this.color //路径填充色
        ctx.closePath() //结束路径
        ctx.fill() //渲染
    },
    poo: function() {
        //第一层判断判断小球是否同时碰到两条边 碰到边则改变他的运动角度 入射角和反射角的知识
        if ((this.x > 800 - this.r && this.y > 400 - this.r) || (this.x < 0 + this.r && this.y < 0 + this.r) || (this.x < 0 + this.r && this.y > 400 - this.r) || (this.x > 800 - this.r && this.y < 0 + this.r)) {
            this.angle = (180 + this.angle)%360;
            // this.speed = -this.speed;
        } else if (this.x > 800 - this.r || this.x < 0 + this.r) { //判断碰到上下两条边
            this.angle = 180 - this.angle
        } else if (this.y > 400 - this.r || this.y < 0 + this.r) { //判断碰到左右两条边
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


//对象的构造函数和原型写完了 然后就可以玩了
var COLOURS = ['#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423']; //定义一个数组存储各种颜色
var ball = [] //定义一个数组存储创造出来的json对象
//这里可以用for循环将o个（随机颜色位置速度的）小球push进数组ball
var ballNum = parseInt(prompt("请输入小球的数量(2-10)")) % 11;
if (!ballNum || ballNum < 2) {
    ballNum = 2;
}
for (var o = 0; o < ballNum; o++) {
    ball.push({
        x: 15 + parseInt(Math.random() * 750),
        y: 15 + parseInt(Math.random() * 355),
        r: 15,
        speed: 0.1 + 10 * Math.random(),
        color: COLOURS[parseInt(Math.random() * 8)], //随机0-7的索引值对应的COLORS数组的颜色
        angle: 360 * Math.random()
    })

}

var b = [] //再定义一个数组来存储Ball对象//初始化
for (var i = 0; i < ball.length; i++) {
    var a = new Ball(ball[i])
    b.push(a)
}
setInterval(function() {
    //每次清空canvas画布
    ctx.clearRect(0, 0, 1900, 1000)

    for (var i = 0; i < ball.length; i++) {
        b[i].rander() //然后b数组里面的每个对象都在定时器里渲染和运动
        b[i].update()
    }
    for (var i = 0; i < ball.length; i++) {
        //遍历那个存json的数组把每个json传进Ball对象里，然后声明所有json都是一个Ball对象的实例然后把他们push到b数组里
        var flag = true;
        for (var j = 0; j < ball.length; j++) {
            //遍历每个小球的坐标然后对比位置关系相距小于等于两个半径就是相撞了 且上一次没有碰撞（p!=2）
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