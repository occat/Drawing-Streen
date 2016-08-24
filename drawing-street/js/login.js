window.onload = function () {
    var name = document.getElementById("inputname");
    var pas = document.getElementById("inputpas");
    var passed = document.getElementById("inputpassed");
    var email = document.getElementById("inputemail");
    var ques = document.getElementById("inputques");
    var yzma = document.getElementById("inputma");
    var scma = document.getElementById("shechengma");
    var scroll1 = document.getElementById("scroll");
    var code;

//        字母开头，允许3-15字节，允许字母数字下划线
    var regname = /^[a-zA-Z][a-zA-Z0-9_]{2,14}$/;
//       regpas 以字母开头，长度在6~18之间，只能包含字母、数字和下划线
    var regpas = /^[a-zA-Z]\w{5,17}$/;
//        以字母开头，长度在6~18之间，只能包含字母、数字和下划线
    var regpassed = /^[a-zA-Z]\w{5,17}$/;

    var regemail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

//        var regma =/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
    checkname(name, regname);
    checkpas(pas, regpas);
    checkpassed(passed, regpas);
    checkemail(email, regemail);
    //function setInnerText(element, content) {
    //    //能力检测
    //    if (typeof element.innerText === "string") {
    //        element.innerText = content;
    //    } else {
    //        element.textContent = content;
    //    }
    //}
    function checkname(inp, regEx) {
        inp.onkeyup = function () {
            //获取下一个兄弟元素 浏览器兼容
            var next= getNextElement(this);
            //验证文本框的内容是否合法
            if (this.value.length < 3 || this.value.length > 6) {
                next.innerText="用户名在3-8位";
            }else{
                next.innerText="";
            }
            this.nextSibling.className = "zenametrue";
        }
        inp.onblur = function () {
            if (regEx.test(this.value)) {
                //this.nextSibling.innerHTML = ".  ";
                this.nextSibling.className = "p_right";
            } else {
                this.nextSibling.innerHTML = "用户名不得小于3个字符";
                this.nextSibling.className = "zenamefalse";
            }
        }
    }

    function checkpassed(inp, regEx) {
        inp.onfocus = function () {
            console.log(this.nextSibling);
            this.nextSibling.innerHTML = "请再次输入密码";
            this.nextSibling.className = "zenametrue";
        }
        inp.onblur = function () {
            if (regEx.test(this.value)) {
                if (this.value === pas.value) {
                    this.nextSibling.innerHTML = ".  ";
                    this.nextSibling.className = "p_right";
                }

            } else {
                this.nextSibling.innerHTML = "两次输入的密码不相同";
                this.nextSibling.className = "zenamefalse";
            }
        }
    }

    function checkpas(inp, regEx) {
        inp.onfocus = function () {
            this.nextSibling.innerHTML = "请填写密码，最小长度为6个字符";
            this.nextSibling.className = "zenametrue";
        }
        inp.onblur = function () {
            if (regEx.test(this.value)) {
                this.nextSibling.innerHTML = ".  ";
                this.nextSibling.className = "p_right";
            } else {
                this.nextSibling.innerHTML = "密码太短，不得小于6个字符";
                this.nextSibling.className = "zenamefalse";
            }
        }
    }

    function checkemail(inp, regEx) {
        inp.onfocus = function () {
            this.nextSibling.innerHTML = "请输入正确的邮箱地址";
            this.nextSibling.className = "zenametrue";
        }
        inp.onblur = function () {
            if (regEx.test(this.value)) {
                this.nextSibling.innerHTML = ".  ";
                this.nextSibling.className = "p_right";
            } else {
                this.nextSibling.innerHTML = "Email地址无效";
                this.nextSibling.className = "zenamefalse";
            }
        }
    }

    var regques = changeques();
    ques.onblur = function () {

        if ((this.value) === regques.toString()) {
            this.nextSibling.nextSibling.nextSibling.innerHTML = ".    ";
            this.nextSibling.nextSibling.nextSibling.className = "p_right";
        } else {
            this.nextSibling.nextSibling.nextSibling.innerHTML = "输入错误";
            this.nextSibling.nextSibling.nextSibling.className = "zenamefalse";
        }
    }


    var tijao = document.getElementById("tj");
    tijao.onclick = function () {
        var array = [];
        //if (checkname(name, regname)) {
        //    if (checkpas(pas, regpas)) {
        //        if (checkemail(email, regemail)) {
        //            if (checkpassed(passed, regpas)) {
        //                if ($("#ques:eq(1)").className === "p_right") {
        //                    if ($("#yanz:eq(1)").className === "p_right") {
        //                       alert("验证成功");
        //                    }
        //                }
        //            }
        //        }
        //
        //    }
        //}
        //if($("#ques:eq(1)").className == "p_right"){
        //    alert("成功");
        //}else {
        //    alert("您输入的作息有误，请重新输入！")
        //}
    }

    var change1 = document.getElementById("change1");
    var change2 = document.getElementById("change2");
    var ques = document.getElementById("ques");
    var yanzhema = document.getElementById("yanz");
//            change1.onclick = function(){
//                clearInterval(timer);
//
//            }
//            change2.onclick = function(){
//                clearInterval(timer);
//            }
    var timer = setInterval(function () {
        $(ques).html("<label class='newlable newlablecolor'><label>刷新验证问答</label></label>");
//            $(yanzhema).html("<label class='label newlablecolor'><label>刷新验证码</label></label>");
        $("#ques").on("click", function () {
            changeques();
        });
//            $(yanzhema).on("click",function(){
//                changeyzm();
//            });
    }, 60000)
    yzma.onblur = function () {
        validate();
//
    }
//            code = "";
//            var codeLength = 4;//验证码的长度
//            var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
//                    'S','T','U','V','W','X','Y','Z');//随机数
//            for(var i = 0; i < codeLength; i++) {//循环操作
//                var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
//                code += random[index];//根据索引取得随机数加到code上
//
//            }
//            $(scma).html(code);//把code值赋给验证码
    createCode();
    function createCode() {
        code = "";
        var codeLength = 4;//验证码的长度
        var checkCode = document.getElementById("code");
        var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');//随机数
        for (var i = 0; i < codeLength; i++) {//循环操作
            var index = Math.floor(Math.random() * 36);//取得随机数的索引（0~35）
            code += random[index];//根据索引取得随机数加到code上
        }
        $(scma).html(code);//把code值赋给验证码

    }

    function validate() {
        var inputCode = yzma.value.toUpperCase();
        //取得输入的验证码并转化为大写
        if (inputCode.length <= 0) { //若输入的验证码长度为0
            //则弹出请输入验证码

        }
        else if (inputCode != code) { //若输入的验证码与产生的验证码不一致时
            //则弹出验证码输入错误
            createCode();//刷新验证码
            yzma.value = "";//清空文本框
        }
        else { //输入正确时
            console.log(this);
            yzma.nextSibling.nextSibling.innerHTML = ".  ";
            yzma.nextSibling.nextSibling.className = "p_right";
        }
    }

    var sum = 0;

}
var sum = 0;
function changeques() {
//            clearInterval(timer);
    var num1 = parseInt(Math.random() * 100);
    var num2 = parseInt(Math.random() * 10);
    sum = parseInt(num1) + parseInt(num2);
    $("#ques label").html("<label>" + "  " + num1 + "  " + "+" + "  " + num2 + "  " + "=" + "  " + "?" + "</label>").addClass("newlable");
    return sum;
}
//        单击换一个则会换一个验证码
var newcode;
function changeyzm() {
    newcode = "";
    var codeLength = 4;//验证码的长度
    var newcheckCode = document.getElementById("shechengma");
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');//随机数
    for (var i = 0; i < codeLength; i++) {//循环操作
        var index = Math.floor(Math.random() * 36);//取得随机数的索引（0~35）
        newcode += random[index];//根据索引取得随机数加到code上
    }
    $(newcheckCode).html(newcode);
}

