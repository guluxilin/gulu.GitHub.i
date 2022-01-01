function Router(){
    this.routes = {};
    this.curUrl = '';

    this.route = function(path, callback){
        this.routes[path] = callback || function(){};
    };

    this.refresh = function(){
        this.curUrl = location.hash.slice(1) || '/';
        this.routes[this.curUrl]();
    };

    this.init = function(){
        window.addEventListener('load', this.refresh.bind(this), false);
        window.addEventListener('hashchange', this.refresh.bind(this), false);
    }
}
var R = new Router();
R.init();
var res = document.getElementById('user_img');
var writer = document.getElementById('user_name');
R.route('/', function() {
    res.src='./img/user.png';
    res.style="width:100px;height:100px; ";
   writer.innerText="咕噜咕噜";
    writer.style="font-weight: 700;margin: 0;text-align: center;padding-top:20px;";
});
R.route('/user1', function() {
    res.src="./img/makabaka.jpeg";
    res.style="width:100px;height:100px;";
    writer.innerText="玛卡.巴卡";
    writer.style="font-weight: 700;margin: 0;text-align: center;padding-top:20px;";
});
R.route('/user2', function() {
    res.src="./img/yigubigu.jpeg";
    res.style="width:100px;height:100px; ";
    writer.innerText="依古·比古";
    writer.style="font-weight: 700;margin: 0;text-align: center;padding-top:20px;";
});
R.route('/user3', function() {
    res.src="./img/wuxidixi.jpeg";
    res.style="width:100px;height:100px; ";
    writer.innerText="唔西·迪西";
    writer.style="font-weight: 700;margin: 0;text-align: center;padding-top:20px;";
});

