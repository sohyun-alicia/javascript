// 배열 Array 만들기와 사용하기

// Console

// var arr=[1, 2, 3, 4, 5];
// undefined
// arr.pop();                   pop()명령은 배열의 맨 뒤 요소를 빼서 반환
// 5
// arr;
// (4) [1, 2, 3, 4]
// arr.shift();                 shift()명령은 배열의 맨 앞 요소를 빼서 반환
// 1
// arr;
// (3) [2, 3, 4]
// arr.push(6);                 push() 배열의 맨 뒤에 요소 추가
// 4
// arr.unshift(0);              unshift() 배열의 맨 앞에 요소 추가
// 5
// arr;
// (5) [0, 2, 3, 4, 6]

// 실습
var arr;
var arr = [1, 2, 3, 4, 5];

function firstElement(arr){
    return arr[0];
}


// arr;
// (5) [1, 2, 3, 4, 5]
// arr.reverse();                   reverse() 배열 순서 거꾸로 뒤집음
// (5) [5, 4, 3, 2, 1]
// arr.sort();                      sort() 배열을 크기대로 나열
// (5) [1, 2, 3, 4, 5]
// var arr1 = [1, 2, 3];
// undefined
// var arr2 = [4, 5, 6];
// undefined
// arr1.concat(arr2);               arr.concat(arr2) 두개의 배열을 이어줌
// (6) [1, 2, 3, 4, 5, 6]
// arr1.push(arr2);                 arr.push(arr2) arr2를 배열 그대로 arr의 마지막 요소로 넣음
// 4
// arr;
// (5) [1, 2, 3, 4, 5]
// arr1;
// (4) [1, 2, 3, Array(3)]
// var arr4 = [1, 2, 3, 1, 2, 3];
// undefined
// arr4.indexOf(2);                 indexOf() 호출한 요소가 처음 나오는 인덱스 반환
// 1
// arr4.lastIndexOf(2);             lastIndexOf() 호출한 요소가 마지막으로 나오는 인덱스 반환
// 4
// var str = "1, 2, 3, 4, 5";
// undefined
// str.split(",");                      str.split(",") str을 ","로 나눠서 배열로 반환
// (5) ["1", " 2", " 3", " 4", " 5"]

// var arr = [1, 2, 3]; 
// undefined
// arr.unshift('begin');                 arr.unshift() 호출한 값을 배열 맨 앞에 넣어줌
// 4
// arr;
// (4) ["begin", 1, 2, 3]
// arr.push('end');                      arr.push() 호출한 값을 배열 맨 뒤에 넣어줌
// 5
// arr;
// (5) ["begin", 1, 2, 3, "end"]



// -------------------------주석 사용하기---------------------------//
// var name = "홍길동"; 
//개발할 때는 사용자 입력 대신 변수를 만들어 사용하면 편리함
var name = prompt("이름을 입력해 주세요.");
var msg = "당신의 이름은" + name + "입니다." + name + "님의 이름은" + name.length + "글자 입니다."
// console.log(msg); //개발할 때는 경고창을 띄우지 말고 콘솔에서 메시지를 확인

alert(msg);