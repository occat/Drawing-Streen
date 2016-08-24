var search = document.getElementById("search");
        search.onfocus = function(){
            if(search.value=="请输入搜索内容..."){
                search.value="";
            }
        }
        search.onblur = function(){
                if(search.value==""){
                    search.value="请输入搜索内容..."
                }
        }

        function searcha(){
            var content = search.value;
            
            if(content=="美术颜料"){
                window.location.href = "./pigment.html";
            }
            if(content=="美术用纸"){
                window.location.href = "./paper.html";
            }
            if(content=="美术画笔"){
                window.location.href = "shuicaibi.html";
            }
            if(content=="雕塑刀"){
                window.location.href = "diaosudao.html";
            }
            if(content=="绘画工具"){
                window.location.href = "绘画工具.html";
            }
            if(content=="美术图书"){
                window.location.href = "meishutushu.html";
            }
            if(content=="油画材料"){
                window.location.href = "油画材料.html";
            }
            if(content=="石膏教具类"){
                window.location.href = "石膏教具类.html";
            }
            if(content=="美术分享"){
                window.location.href = "美术分享总文件.html";
            }
            if(content=="优惠活动"){
                window.location.href = "special.html";
            }
            if(content=="古典油画"){
                window.location.href = "./vintage.html";
            }
            if(content=="作品展览"){
                window.location.href = "exhibition.html";
            }
            if(content=="留言板"){
                window.location.href = "i主界面ndex.html";
            }
            if(content=="画家介绍"){
                window.location.href = "画家介绍/index.html";
            }
            if(content=="每日一乐"){
                window.location.href = "daily-fun.html";
            }else{
                alert("对不起！没有您搜索的内容。");
            }
        }