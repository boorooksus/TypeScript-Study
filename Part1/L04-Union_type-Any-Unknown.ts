// union type: type 여러 개 중에 선택 가능
let 회원: number | string = 123;
회원 = "abc";

let 회원들2: (number | string)[] = [1, 2, 3];
let 오브젝트: { a: string | number } = { a: "123" };

// 수학 연산은 number에서만 가능
let 나이2: string | number;
// console.log(나이2 + 1);

// any
let 이름3: any;
이름3 = 123;
이름3 = true;
이름3 = [];
// any 쓰면 typeScript 쓰는 이유 없어짐
// -> 타입 쉴드 해제문법 (일반 JS 변수 쓰고 싶을때만 사용)

// unknown
let 이름4: unknown;
이름4 = 123;
이름4 = {};
// any 보다 조금 더 안전함
// 다른 타입 변수에 할당 방지해줌
// let 변수: string = 이름4

// unknwon은 수학 연산 에러 발생 시킴
let 이름5: unknown;
이름5 = 123;
// console.log(이름5 - 1);  // 에러

// Narrowing, Assertion 사용해서 엄격하게 코드 짜기

// ==== Homework 1 ====
() => {
  let user: string = "kim";
  let age: unknown = undefined;
  let married: boolean = false;
  let 철수: (string | unknown | boolean)[] = [user, age, married];
};

// ==== Homework 2 ====
() => {
  let 학교: { score: (boolean | number)[]; teacher: string; friend: string | string[] } = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
  };

  학교.score[4] = false;
  학교.friend = ["Lee", 학교.teacher];
};
