/**
 * Created by Administrator on 2016/4/24.
 */
var input=document.getElementById("input");
input.onfocus=function(){
    if(this.value==="��������������..."){
         this.value="";
    }
};
input.onblur=function(){
    if(this.value===""){
        this.value="��������������...";
    }
};