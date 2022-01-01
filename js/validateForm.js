
function validateForm(){
    var x=document.getElementById("user").value;
    var y=document.getElementById("password").value;
    var flag=0;
    if(x == ""||y == "")
    {
        alert("输入不得为空");
        return false;
    }
    if (x.charAt(0)>='A'&&x.charAt(0)<='Z'||x.charAt(0)>='a'&&x.charAt(0)<='z') {
        flag=1;
    }
    else
    {
        alert('用户名开头必须为字母');
        return false;
    }
    if(y.length<6)
    {
        alert("密码长度少于6位");
        return false;
    }
}
