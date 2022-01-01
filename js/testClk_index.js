function testClk_index(){
    var obj = document.getElementById("org");
    var sel = document.getElementById("identity");
    if (sel.value == "manager") {
        var input1 = document.createElement('input');
        input1.setAttribute('type', 'text');
        input1.setAttribute('name', 'countrywrite');
        obj.insertBefore(input1,null);
    } }