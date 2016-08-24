/**
 * Created by Administrator on 2016/5/15.
 */
$(function(){
    //给h2注册事件，当点击时显示相对应的
    $("#linkQq").click(function(){
//                var isShow = $("dAqq").css("display","block");
//                //判断下一个兄弟的显示状态
//                    //显示
        $("#dAqq").show();
        //让下一个兄弟隐藏
        $("#dAweixin").hide();

    });
    $("#weixin").click(function(){
//                    //显示
        $("#dAweixin").show();
        //让下一个兄弟隐藏
        $("#dAqq").hide();
    });


    //当用户点击文本框，要输入的时候，显示文本边框
    $("#showText").focus(function(){
        $(this).addClass("textBorder");
    });
    $("#showText").blur(function(){
        $(this).removeClass("textBorder");
    });

    //点击发送按钮，将用文本域里的内容发送到上面文本域中，并使内容靠右显示
    var Hstr="";
    $("#sendBtn").click(function(){
        var date = new Date();
        var time = date.toTimeString().slice(0,9);
        var scrollH = $("#receive").get(0).scrollHeight;
        $("#receive").scrollTop(scrollH+66);
        Hstr += '本人 '+time+'\n'+$("#showText").val()+"\n";
        if(Hstr != ""){
            $("#receive").html(Hstr);
            $("#showText").val("");
        }

    });
});