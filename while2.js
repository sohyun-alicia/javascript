//  문제 세개를 내고 사용자가 맞출때까지 반복하는 프로그램

var count = 0;          // 틀린 개수를 저장할 count 변수 선언

while (true){           // 조건식에 true를 입력하면 반복문이 계속 실행됨

    var ans;
    ans = parseInt(prompt("1 + 1 = ?"));        // 정답 입력받기
    if (ans != 2){                              // if 조건문을 이용해 정답을 비교
        console.log((++count) + "번 틀렸습니다. 다시 도전하세요.");
        // 정답이 아니면 count 1씩 증가
        continue;                   // continue 키워드를 만나면 반복문의 맨 끝으로 이동
    }
    ans = parseInt(prompt("7-3 = ?"))
    if (ans!=4){
        console.log((++count) + "번 틀렸습니다. 다시 도전하세요.");
        continue;
        }
    ans = parseInt(prompt("9*7 = ?"));
    if (ans!=63){
        console.log((++count) + "번 틀렸습니다. 다시 도전하세요.");
        continue;
    }

    break;          // 나머지 코드를 더이상 실행하지 않고  while 반복문 바깥으로 빠져나감

    // continue를 만나면 여기로 이동

}   
// break를 만나면 여기로 이동
console.log("참 잘했습니다!")