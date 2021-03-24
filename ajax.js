// -------------Console----------------
// req.readyState;                      # 이미 완료된 request의 상태
// 4
// var req2 = new XMLHttpRequest();     
// undefined
// req2.readyState;                     # 아직 open() 메서드 실행 전이기 때문에 0으로 나옴
// 0
// req2.open("GET",".data.txt");        
// undefined
// req2.readyState;                     # open() 메서드 호출 후라 readyState확인하면 1이 나옴
// 1
// req2.send();
// undefined
// req2.readyState;
// 4


// var pi=3.14;
// undefined
// var string="string";
// undefined
// JSON.stringify(pi);
// "3.14"
// JSON.parse("3.14");
// 3.14
// JSON.parse("\"string\"");
// "string"
