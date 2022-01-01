function testClk(){
    var obj = document.getElementById("org");
    var sel = document.getElementById("identity");
    if (sel.value == "other") {
        var input1 = document.createElement('input');
        input1.setAttribute('type', 'text');
        input1.placeholder="摄影水平";
        obj.insertBefore(input1,null);
    } }