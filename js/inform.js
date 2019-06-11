function dosubmit(formobj){
    formobj.url.value=window.top.location.href;
    var name=formobj.name.value;
    var email=formobj.email.value;
    var msg=formobj.message.value;
    var msg_defalut=formobj.message.defaultValue;

    if(name==""){
        alert('Please input the right name!');
        formobj.name.focus();
        return false;
    }else if(!email.match(/[^\s\n]+\@[^\s\n]+\.(\w{2,4})$/)){
        alert("Please input a valid email address!");  
        formobj.email.focus();
        return false;
    }else if(!is_selected(formobj.product)
){
        alert("Please select Product!");
        return false;
    }else if(!is_selected(getsection(formobj.message,0,13)) && getsection(formobj.message,13,1)[0].value==""){
        alert("Please select Capacity!");
        return false;
    }else if(!is_selected(getsection(formobj.message,14,12)) && getsection(formobj.message,26,1)[0].value==""){
        alert("Please select Material!");
        return false;
    }
    return true;
}

function is_selected(obj){
for(var i = 0 ; i < obj.length; i++){
    if(obj[i].checked) return true;
    }
return false;
}
function getsection(objarr,start,len){
var retd = new Array();
for(var i =0 ; i < objarr.length; i ++){
    if(i >= start && (i-start) < len){
        retd.push(objarr[i])
    }
}
return retd;
}
