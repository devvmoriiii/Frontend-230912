/*
! 변수
변수 (variable) : 변하는 수 (값이 달라질 수 있는 데이터) 로, 데이터를 저장하기 위한 공간


! 변수 선언
변수 선언 : 변수를 사용 및 다른 변수들과 구별하기 위해 이름을 붙여 주는 것
값을 저장할 컴퓨터 메모리 공간에 이름을 붙이는 것과 동일한 개념

! 변수명 명명규칙
첫 글자는 영문자, _ (언더스코어), $ (달러) 만 사용 가능
공백 문자 사용 불가
특수문자는 _ (언더스코어), $ (달러) 만 사용 가능
lowerCamelCase 사용 (첫 글자는 소문자로, 이어지는 단어의 시작은 대문자로)
영어 대소문자를 구별 (dream 과 Dream 은 서로 다른 변수)
예약어는 사용 불가
의미있는 단어 사용

(Ex. 사용 가능 - now, _now, now25, now$25
사용 불가 - 25now, now 25, *now)

! 변수 선언 키워드
: let | var

let
- 블록 범위 변수 (Block Scope)
- 재할당 가능 
- 호이스팅 가능 (단, 선언 전에 접근 불가)

var 
- 함수 범위 변수 (Function Scope)
- 재할당 가능
- 호이스팅 가능 (선언 부분이 상단으로 끌어오려짐)

var 의 경우,
변수를 중복해서 선언 가능한 위험성 + 변수가 속하는 범위가 애매하다는 점에서 최근에는 주로 사용하지 않음

! 선언과 초기화
선언 : 변수 선언 키워드 변수명; 형태로 작성
값 할당 : 변수명 = 값;
초기화 : 변수 선언과 값 할당을 한 번에 진행하는 것

*/

// 예제
let letVariable;
var varVarable;

letVariable = 10;
varVarable = "변수";

let letVariable2 = 20;
let varVarable2 = "Hello 변수!";

// Practice - 나이 계산 프로그램
// let currentYear = 2023;
// let birthYear = parseInt(prompt("출생 년도를 입력하세요."));
// let age = currentYear - birthYear;

// document.write(`<h1>올해는 ${currentYear} 년도입니다.</h1>`);
// document.write(`<h1>${birthYear} 년도에 태어난 사람의 나이는 ${age}세입니다.</h1>`);


// ___________________________

/*
  ! 상수
  상수 (cosntant) : 한 번 할당된 값을 변경할 수 없음 (재할당 불가)
  상수의 선언과 동시에 할당까지 이루어져야 함

  ! 상수 명명교칙
  UPPER_SNAKE_CASE

  (Ex. MY_CONSTANT, PI)

*/

// 예제
const PI = 3.14;
// PI = 2;

// ___________________________

/* 
! 유효범위 
  유효범위 : 변수(상수) 또는 함수가 선언되어 있는 영역
  해당 영역에서 변수 및 함수에 접근할 수 있는 범위

  전역 유효범위, 함수 유효범위, 블록 유효범위 3가지로 나누어짐.

  전역 유효범위 (Global Scope) 
  - 코드의 모든 부분에서 접근할 수 있는 변수, 함수

  지역 유효범위 (Local Scope)
  - 함수 유효범위 (Function Scope) : var 키워드로 선언된 변수로, 함수 내에서만 접근 가능
  - 블록 유효범위 (Block Scope) : let, const 키워드로 선언된 변수로, 블록({} 중괄호) 내에서만 접근 가능

! 호이스팅
  호이스팅 (Hoisting) : 변수와 함수 선언은 코드 실행 전에 메모리에 저장
  변수의 경우, 선언부만 호이스팅 (제일 상단부로 끌어올려짐)

  var : 선언부가 호이스팅
  let, const : 호이스팅되지만, TDZ(Temporal Dead Zone) 때문에 접근 불가


*/

// 예제
// console.log(a);
// var a = 5;
// console.log(a);

console.log(b);
let b = 5;
// let b = 10;

console.log(c)
let c = 5;