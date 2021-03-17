//-----------------------연산자-------------------------//

var e = "a", f = "b", g = "c", h = "d";

// 콘솔
// e == e;
// true
// e != e;
// false
// e < f;
// true
// f < e;
// false

// true && true;        && and : 둘다 true여아 결과값 true
// true
// true && false;
// false
// false && false;
// false
// true || true;
// true
// true || false;       || or : 둘중 하나만 true여도 결과값 true
// true
// false || false;
// false

// not(!)
// !true
// false
// !false
// true

// var height = 180;
// undefined
// var age = 20;
// undefined
// height >= 180 && age >= 20 && age <30
// true
// height = 170;
// 170
// height >= 180 && age >= 20 && age <30
// false
// age < 8 || age >= 65;
// false
// age = 70;
// 70
// age < 8 || age >= 65;
// true

// exercise
function isBigger(a,b){
    return a > b;
}

function isBothTrue(a,b){
    return a && b;
}