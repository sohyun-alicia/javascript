//-------------------- 문자열 이어 붙이기 : str1.concat(str2)

// var str = "Hello";
// str.length;
// var str2 = "World";
// var str3 = str.concat(str2)     // 문자열 이어붙여주기

// 실습(콘솔)

// var prefix = "program";
// undefined
// var suffix = "mer";
// undefined
// var word;
// undefined
// var word_length;
// undefined
// var word = prefix.concat(suffix);
// undefined
// word;
// "programmer"
// (anonymous) @ VM651:1
// word.length;
// 10
// word_length
// undefined


//--------------------------문자열 다루기----------------------//

// 인덱싱 : charAt()
// var str = 'abcdeabced';
// undefined
// str.charAt(0);        인덱스 넘버에 해당하는 값 호출
// "a"
// str.length;           글자 길이
// 10
// str.charAt(9);
// "d"            
// str.charAt(str.length-2);            끝에서부터 두번째 값 가져오기
// "e"

// 슬라이싱 : substring, substr
// str.substring(2,4);                  2번 인덱스부터 4번 인덱스 값 전까지 호출
// "cd"
// str.substr(2,4);                     2번 인덱스부터 4개 값 호출
// "cdea"
// str.substring(2);                    2번 인덱스 값부터 끝까지
// "cdeabced"
// str.substr(2);                       2번 인덱스 값부터 끝까지
// "cdeabced"
// str.substr(-7);                      끝에서부터 끝에서 7번째 값까지
// "deabced"
// str.substr(-7,2);                    끝에서 7번째부터 두개 값
// "de"
// str.indexOf("bc");                   호출하는 값이 처음 나오는 인덱스 값
// 1
// str.lastIndexOf("bc");               호출하는 값이 마지막으로 나오는 인덱스 값
// 6
// str.lastIndexOf("f");                없는 값을 호출할 경우 -1 반환
// -1

//실습
function firstLetter(str){
    return str.charAt(0)
}

function first2Letters(str){
    return str.substring(0,2)
}