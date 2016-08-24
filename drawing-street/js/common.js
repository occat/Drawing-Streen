/**
 * Created by jiaoshou on 2016/4/25.
 */
function setInnerText(element, content) {
    //能力检测
    if (typeof element.innerText === "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}

function getNextElement(element) {
    //能力检测
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        //找下一个节点，直到找到下一个元素为止
        var el = element.nextSibling;
        while (el && 1 !== el.nodeType) {
            el = el.nextSibling;
        }
        return el;
    }
}

//previousSibling
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var el = element.previousSibling;
        while (el && 1 !== el.nodeType) {
            el = el.previousSibling;
        }
        return el;
    }
}

//firstElementChild 浏览器兼容性
function getFirstElement(element) {

    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var el = element.firstChild;
        while (el && 1 !== el.nodeType) {
            el = el.nextSibling;
        }
        return el;
    }
}
function my$(id) {
    return document.getElementById(id);
}
//function creattable(datas,sources) {
//    function header(datas) {
//        var tab = my$("tab");
//        tab.border = "1px";
//        tab.width = "400px";
//        tab.cellPadding = "0";
//        tab.cellSpacing = "0";
//        for (var i = 0; i < datas.length; i++) {
//            var data = datas[i];
//            var th = document.createElement("th");
//            tab.appendChild(th);
//            th.style.backgroundColor = "gray";
//            th.style.height = "30px";
//            th.style.lineHeight = "30px";
//            setInnerText(th, data);
//        }
//        return tab;
//    }
//
//    function hang(tab, sources) {
//        for (var i = 0; i < sources.length; i++) {
//            var source = sources[i];
//            //创建行
//            var tr = document.createElement("tr");
//            tab.appendChild(tr);
//            tr.style.textAlign = "center";
//            //遍历source对象的所有属性
//            for (var key in source) {
//                var td = document.createElement("td");
//                tab.appendChild(td);
//                setInnerText(td, source[key]);
//            }
//            //创建删除按钮
//            var td=document.createElement("td");
//            tr.appendChild(td);
//            //在最后一列生成删除键
//            td.innerHTML="<a href='#'>删除</a>";
//            //点击删除按钮
//            var link=getFirstElement(td);
//             link.index=i;
//            link.onclick=function(){
//                //删除点击的这行
//
//            }
//            //删除点击时的行
//
//
//        }
//    }
//}