window.onload = function() {

    var oBtn = document.getElementById('btn');


    oBtn.onclick = function() {


        ajax('get','./php/getNews.php','',function(data) {
            var data = JSON.parse( data );

            var oUl = document.getElementById('ul1');
            var html = '';
            for (var i=0; i<data.length; i++) {
                html += '<li><a href="">'+data[i].title+'</a> [<span>'+data[i].date+'</span>]</li>';
            }
            oUl.innerHTML = html;
        });

        setInterval(function() {
            ajax('get','./php/getNews.php','',function(data) {
                var data = JSON.parse( data );

                var oUl = document.getElementById('ul1');
                var html = '';
                for (var i=0; i<data.length; i++) {
                    html += '<li><a href="">'+data[i].title+'</a> [<span>'+data[i].date+'</span>]</li>';
                }
                oUl.innerHTML = html;
            });
        }, 1000);

    }
}