// if조건문 사용하기 실습
 
// 문제1
// var age = 18;

// if (age<20){
//     console.log("20세 미만입니다.");
// }
// else{
//     console.log("20세 이상입니다.");
// }


// function is20s(age){
//     //age가 20 이상이고 30 미만이면 20대
//     if (20 <= age ?? age < 30 )
//         return true;
//     }

// console.log()


// 문제2
// var year = prompt("확인하고 싶은 년도를 입력하세요.")

// console.log(isLeapYear(year));

// function isLeapYear(year){
//     if (year % 4 == 0){
//         console.log(year, '은 윤년입니다.') 
//     }
//     else{
//         console.log(year, '은 윤년이 아닙니다.')
//     }
// }


console.log("Menu");
console.log("1. Ice Americano");
console.log("2. Cafe Latte");
console.log("3. Cappuccino");
console.log("4. Tea");

var choice=parseInt(prompt("메뉴를 선택해 주세요."));

console.log(choice + "번 메뉴를 선택하셨습니다.");

// if (choice == 1){
//     console.log("아이스 아메리카노는 1500원입니다.");
// }
// else if (choice == 2){
//     console.log("카페 라떼는 1800원입니다.");
// }
// else if (choice == 3){
//     console.log("카푸치노는 2000원입니다.");
// }
// else if (choice == 4){
//     console.log("홍차는 1300원입니다.");
// }
// else{
//     console.log("죄송합니다. 그런 메뉴는 없습니다.")
// }

switch(choice){
    case 1:
        console.log("아이스 아메리카노는 1500원입니다.");
        break;
    case 2:
        console.log("카페 라떼는 1800원입니다.");
        break;
    case 3:
        console.log("카푸치노는 2000원입니다.");
        break;
    case 4:
        console.log("홍차는 1300원입니다.");
        break;
    default:
        console.log("죄송합니다. 그런 메뉴는 없습니다.");
        break;

}
