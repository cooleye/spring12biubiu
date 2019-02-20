// import hack_engine from 'hack_engine'; //破解行星发送机，获得控制权

class Engine{
    constructor(id){
        this.id = id;
    }
    start(){
        console.log('发动机启动')
    }
}

let engines = [];
for(let i = 0;i < 12;i++){
    engins.push(new Engine(i))
}

class Hack_engine{
    
    constructor(engines){
        this.FUNERAL_FULL = 100;
        this.engins = engines;
    }
    setEngineNumberMask(num){
        console.log("设置发送机：",num)
    }
    setFuneralLevel(num){
        console.log("发送机注入燃料：",num)
    }
}
let hack_engine = new Hack_engine(engines)

//行星发送机初始化函数
function init() {
    hack_engine.setEngineNumberMask(12);
    hack_engine.setFuneralLevel(hack_engine.FUNERAL_FULL);
}
//主函数，在此启动12座发动机
async function  main() {
    init()
    for(let i = 0; i < 12;i++){
       await fire(hack_engine.engins[i])
    }
}
//发动机启动函数
function fire(eng){
    //每隔3秒钟启动一座
    setTimeout(()=>{
        eng.start();
    },3000)
}

//开始按钮点击后，执行start事件函数
function start(){
    main()
}

start()

