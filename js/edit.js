


function getPosts(){
    let posts = []
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        let post  = localStorage.getItem( localStorage.key( i ) )
        posts[i] = JSON.parse(post)
                //创建一行
                var trObj = document.createElement("tr");
                //追加到tbody中
                zy$("tbd").appendChild(trObj);
                //修改ID值
                //创建列
                //第一列
                var td1 = document.createElement("td");
                trObj.appendChild(td1);
                td1.innerHTML = posts[i].name;
                //第二列
                var td2 = document.createElement("td");
                trObj.appendChild(td2);
                td2.innerHTML = posts[i].subject;
                //第三列
                var td3 = document.createElement("td");
                trObj.appendChild(td3);
                td3.innerHTML = posts[i].score;
                //第四列
                var td4 = document.createElement("td");
                trObj.appendChild(td4);
                //创建a标签
                var aObj = document.createElement("a");
                td4.appendChild(aObj);
                //a的跳转地址
                aObj.href = "javascript:void(0)";
                aObj.innerText = "删除";
                //点击删除
                aObj.onclick = function () {
                    this.parentNode.parentNode.parentNode.
                    removeChild(this.parentNode.parentNode);
                };
    }
}


function zy$(id) {
    return document.getElementById(id)
};
var arr = [{
    "name": "1",
    "subject": "咕噜咕噜",
    "score": "43"
},
    {
        "name": "2",
        "subject": "玛卡巴卡",
        "score": "52"
    },
    {
        "name": "3",
        "subject": "唔西迪西",
        "score": "73"
    }
];
function get_last_key(){
    let max = -1;
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        key = parseInt(localStorage.key( i ))
        if(key > max){max = key}
    }
    return max + 1
}
//注册点击事件，生成现有表格
zy$("btn").onclick = function () {
    //tbody中的内容只出现一次
    if (!zy$("tbd").firstElementChild) {
        //遍历arr
        for (var i = 0; i < arr.length; i++) {
            //创建一行
            var trObj = document.createElement("tr");
            //追加到tbody中
            zy$("tbd").appendChild(trObj);
            //修改ID值
            trObj.id = "cc" + i;
            //创建列
            //第一列
            var td1 = document.createElement("td");
            trObj.appendChild(td1);
            td1.innerHTML = arr[i].name;
            //第二列
            var td2 = document.createElement("td");
            trObj.appendChild(td2);
            td2.innerHTML = arr[i].subject;
            //第三列
            var td3 = document.createElement("td");
            trObj.appendChild(td3);
            td3.innerHTML = arr[i].score;
            //第四列
            var td4 = document.createElement("td");
            trObj.appendChild(td4);
            //创建a标签
            var aObj = document.createElement("a");
            td4.appendChild(aObj);
            //a的跳转地址
            aObj.href = "javascript:void(0)";
            aObj.innerText = "删除";
            //点击删除
            aObj.onclick = function () {
                this.parentNode.parentNode.parentNode.
                removeChild(this.parentNode.parentNode);
            };
        }
    }
}

//注册点击事件，添加
zy$("btn2").onclick = function () {
    //创建一行
    var trObj = document.createElement("tr");
    //追加到tbody中
    zy$("tbd").appendChild(trObj);
    //创建列
    //一列
    var td1 = document.createElement("td");
    trObj.appendChild(td1);
    var input1 = document.createElement("input");
    td1.appendChild(input1);
    //二列
    var td2 = document.createElement("td");
    trObj.appendChild(td2);
    var input2 = document.createElement("input");
    td2.appendChild(input2);
    //三列
    var td3 = document.createElement("td");
    trObj.appendChild(td3);
    var input3 = document.createElement("input");
    td3.appendChild(input3);
    //四列
    var td4 = document.createElement("td");
    trObj.appendChild(td4);
    //a标签确定标签
    var aObj = document.createElement("a");
    td4.appendChild(aObj);
    aObj.href = "javascript:void(0)";
    aObj.innerText = "1.确定";
    //注册点击事件，确定
    aObj.onclick = function () {
        td1.innerText = input1.value;
        td2.innerText = input2.value;
        td3.innerText = input3.value;
        post = {};
        post["name"]=input1.value;
        post["subject"]=input2.value;
        post["score"]=input3.value;
        var i_id = get_last_key();
        localStorage.setItem(i_id,JSON.stringify((post)));
        //点击确定之后，第四列会发生变化
        //删除现有第四列
        this.parentNode.parentNode.removeChild(this.parentNode);
        //创建新的第四列
        var td4 = document.createElement("td");
        trObj.appendChild(td4);
        //第四列中的内容
        var aObj = document.createElement("a");
        td4.appendChild(aObj);
        aObj.innerText = "删除";
        aObj.href = "javascript:void(0)";
        //删除
        aObj.onclick = function () {
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        };
    };
    //a标签，取消标签
    var aObj2 = document.createElement("a");
    td4.appendChild(aObj2);
    aObj2.href = "javascript:void(0)";
    aObj2.innerText = "2.取消";
    //注册点击事件，取消
    aObj2.onclick = function () {
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    };

};