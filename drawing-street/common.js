/**
 * Created by jiaoshou on 2016/4/25.
 */
function setInnerText(element,content) {
    //能力检测
    if(typeof element.innerText === "string") {
        element.innerText = content;
    }else{
        element.textContent = content;
    }
}

function getNextElement(element) {
    //能力检测
    if(element.nextElementSibling) {
        return element.nextElementSibling;
    }else{
        //找下一个节点，直到找到下一个元素为止
        var el = element.nextSibling;
        while(el && 1 !== el.nodeType) {
            el = el.nextSibling;
        }
        return el;
    }
}

//previousSibling
function getPreviousElement(element) {
    if(element.previousElementSibling) {
        return element.previousElementSibling;
    }else{
        var el = element.previousSibling;
        while(el && 1 !== el.nodeType) {
            el = el.previousSibling;
        }
        return el;
    }
}

//firstElementChild 浏览器兼容性
function getFirstElement(element){

    if(element.firstElementChild) {
        return element.firstElementChild;
    }else{
        var el = element.firstChild;
        while(el && 1 !== el.nodeType) {
            el = el.nextSibling;
        }
        return el;
    }
}


function my$(id) {
    return document.getElementById(id);
}