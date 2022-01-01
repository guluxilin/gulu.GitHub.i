
$.ajax({
    url: "data.json", //json文件位置
    type: "GET", //请求方式为get
    dataType: "json", //返回数据格式为json
    success: function(data) { //请求成功完成后要执行的方法
        //each循环 使用$.each方法遍历返回的数据date

        path = `table.tpl`;
        domid = '#form_test';
        $.get(path, function(tpl){
            // 这里使用了链接调用,可以节省一个本地变量
            for(var i = 0;i<data.RECORDS.length;i++){
                result = ejs.compile(tpl)(  {data:data.RECORDS[i]}  );
                $(domid).append(result);
            }
        });
        //for (var i = 0; i < data.RECORDS.length; i++) { //遍历一下json数据
            //var trow = getDataRow(data.RECORDS[i]); //定义一个方法,返回tr数据
            //tbody_all.appendChild(trow);
        //}
    }
});