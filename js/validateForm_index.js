function validateForm_index(){
    var x=document.forms["myForm"]["name"].value;
    if (x==null || x==""){
        alert("输入不得为空");
        return false;
    }
}