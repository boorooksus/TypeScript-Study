// union type: type 여러 개 중에 선택 가능
var 회원 = 123;
회원 = "abc";
var 회원들2 = [1, 2, 3];
var 오브젝트 = { a: "123" };
// 수학 연산은 number에서만 가능
var 나이2;
// console.log(나이2 + 1);
// any
var 이름3;
이름3 = 123;
이름3 = true;
이름3 = [];
// any 쓰면 typeScript 쓰는 이유 없어짐
// -> 타입 쉴드 해제문법 (일반 JS 변수 쓰고 싶을때만 사용)
// unknown
var 이름4;
이름4 = 123;
이름4 = {};
// any 보다 조금 더 안전함
// 다른 타입 변수에 할당 방지해줌
// let 변수: string = 이름4
// unknwon은 수학 연산 에러 발생 시킴
var 이름5;
이름5 = 123;
// console.log(이름5 - 1);  // 에러
// Narrowing, Assertion 사용해서 엄격하게 코드 짜기
// ==== Homework 1 ====
(function () {
    var user = "kim";
    var age = undefined;
    var married = false;
    var 철수 = [user, age, married];
});
// ==== Homework 2 ====
(function () {
    var 학교 = {
        score: [100, 97, 84],
        teacher: "Phil",
        friend: "John",
    };
    학교.score[4] = false;
    학교.friend = ["Lee", 학교.teacher];
});
