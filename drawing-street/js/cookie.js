 function setCookie(c_name, value, expiredays) {
            var exdate = new Date()
            exdate.setDate(exdate.getDate() + expiredays)
            document.cookie = c_name + "=" + escape(value) +
                ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
        }

        function getCookie(c_name) {
            if (document.cookie.length > 0) {
                c_start = document.cookie.indexOf(c_name + "=")
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1
                    c_end = document.cookie.indexOf(";", c_start)
                    if (c_end == -1) c_end = document.cookie.length
                    return unescape(document.cookie.substring(c_start, c_end))
                }
            }
            return ""
        }

function add_cart(num){
    var str = '';
    if(num==1){
        str += '<tr><td class="checkbox"><input class="check-one check" type="checkbox"/></td><td class="goods"><img src="../images/pigment-11.png" alt=""/><span>中国画工笔画颜料12毫升单支 12色24色马利牌 美术用品 24色(12ml)</span></td><td class="price">39.00</td><td class="count"><span class="reduce"></span><input class="count-input" type="text" value="1"/><span class="add">+</span></td><td class="subtotal">39.00</td><td class="operation"><span class="delete1">删除</span></td></tr>';
        setCookie('add1',str);
        alert("已经成功加入购物车");     
    }else if(num==2){
        str += '<tr><td class="checkbox"><input class="check-one check" type="checkbox"/></td><td class="goods"><img src="../images/zhi-1.png" alt=""/><span>玛丽素描纸8K八开素描纸</span></td><td class="price">3.00</td><td class="count"><span class="reduce"></span><input class="count-input" type="text" value="1"/><span class="add">+</span></td><td class="subtotal">3.00</td><td class="operation"><span class="delete2">删除</span></td></tr>';
        setCookie('add2',str);
        alert("已经成功加入购物车");
    }else if(num==3){
        str += '<tr><td class="checkbox"><input class="check-one check" type="checkbox"/></td><td class="goods"><img src="../images/1-big.png" alt=""/><span>儿童绘画工具套装 </span></td><td class="price">128.00</td><td class="count"><span class="reduce"></span><input class="count-input" type="text" value="1"/><span class="add">+</span></td><td class="subtotal">128.00</td><td class="operation"><span class="delete3">删除</span></td></tr>';
        setCookie('add3',str);
        alert("已经成功加入购物车");
    }else if(num==4){
        str += '<tr><td class="checkbox"><input class="check-one check" type="checkbox"/></td><td class="goods"><img src="../images/diao-1.jpg" alt=""/><span>软陶泥粘土泥塑工具泥塑刀</span></td><td class="price">30.00</td><td class="count"><span class="reduce"></span><input class="count-input" type="text" value="1"/><span class="add">+</span></td><td class="subtotal">30.00</td><td class="operation"><span class="delete4">删除</span></td></tr>';
        setCookie('add4',str);
        alert("已经成功加入购物车");
    }else if(num==5){
        str += '<tr><td class="checkbox"><input class="check-one check" type="checkbox"/></td><td class="goods"><img src="../images/huihua-1.png" alt=""/><span>儿童绘画工具套装 </span></td><td class="price">128.00</td><td class="count"><span class="reduce"></span><input class="count-input" type="text" value="1"/><span class="add">+</span></td><td class="subtotal">128.00</td><td class="operation"><span class="delete5">删除</span></td></tr>';
        setCookie('add5',str);
        alert("已经成功加入购物车");
    }else if(num==6){
        str += '<tr><td class="checkbox"><input class="check-one check" type="checkbox"/></td><td class="goods"><img src="../images/zhi-11.jpg" alt=""/><span>我的第一本色彩游戏书 </span></td><td class="price">128.00</td><td class="count"><span class="reduce"></span><input class="count-input" type="text" value="1"/><span class="add">+</span></td><td class="subtotal">128.00</td><td class="operation"><span class="delete6">删除</span></td></tr>';
        setCookie('add6',str);
        alert("已经成功加入购物车");
    }else if(num==7){
str += '<tr><td class="checkbox"><input class="check-one check" type="checkbox"/></td><td class="goods"><img src="../images/you-11.jpg" alt=""/><span>初学者油画工具套装马利牌油画颜料美术材料用品</span></td><td class="price">499.00</td><td class="count"><span class="reduce"></span><input class="count-input" type="text" value="1"/><span class="add">+</span></td><td class="subtotal">499.00</td><td class="operation"><span class="delete7">删除</span></td></tr>';
              
        setCookie('add7',str);
        alert("已经成功加入购物车");
    }else if(num==8){
        str += '<tr><td class="checkbox"><input class="check-one check" type="checkbox"/></td><td class="goods"><img src="../images/shi-1.png" alt=""/><span>树脂石膏像15cm石膏素描像</span></td><td class="price">36.00</td><td class="count"><span class="reduce"></span><input class="count-input" type="text" value="1"/><span class="add">+</span></td><td class="subtotal">36.00</td><td class="operation"><span class="delete8">删除</span></td></tr>';
        setCookie('add8',str);
        alert("已经成功加入购物车");
    }

    window.location.href = "./shopcart/demo.html";
}