var height = prompt("키를 입력해 주세요.");
console.log(height, typeof(height));

var height_int = parseInt(height);
console.log(height_int, typeof(height_int));

var height_float = parseFloat(height);
console.log(height_float, typeof(height_float));

var str = "3.141592는 Pi의 근사값입니다."
var pi_int;
pi_int = parseInt(str)