// 변수 가림 현상(Shadowing)

function shadowing_example(){
    var val = 1;            //지역번수
    console.log("F", val);
    val++;
}

var val = 0;                //전역변수
shadowing_example();
console.log("O", val);