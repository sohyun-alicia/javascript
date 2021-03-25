//------------------------익명 함수 ---------------------//
// var sum = 0;

// // 1~50까지 합 출력
// for (var i=1; i<=50; i++){
//     sum += i;
// }
// console.log(sum);

// // 1~5까지 값 출력
// (function (){
//     for (var i=1; i<=5; i++){
//         console.log(i);
//     }
// })();

// // 51~100까지 합 출력
// for (;i<=100; i++){
//     sum += i;
// }
// console.log(sum);


//------------------------settime과 callback활용 익명함수---------------------//
// 1. 
// function callback(){
//     console.log("timeout");
// }

// setTimeout(callback(), 3000);


// 2. 
// setTimeout(function callback(){
//     console.log("timeout");
// }, 3000);

// 3. 
// setTimeout(function (){
//     console.log("timeout");
// }, 3000);


try{
    console.log("try-1");
    throw "error";
    console.log("try-2");
}

catch(e){
    console.log("catch error:", e);
}

finally{
    console.log("finally-this code will always be executed")
}

