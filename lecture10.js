var a = 1;
console.log(a);
console.log(++a);  // + + a >>> a = a + 1
console.log(a);

var a = 1;
console.log(a);
console.log(--a);  // - - a >>> a = a - 1
console.log(a);

var a = 1;
console.log(a);
console.log(a++);  // + + 이 변수 뒤에 쓰이면 console.log(a) 명령 먼저 실행됨
console.log(a);

var a = 1;
console.log(a);
console.log(a--);  // - - 이 변수 뒤에 쓰이면 console.log(a) 명령 먼저 실행됨
console.log(a);

var a = 10;
var b = 7;
var c = a + b;
var d = a - b;
var e = a * b;

console.log(c);
console.log(d);
console.log(e);
