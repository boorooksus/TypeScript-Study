() => {
  // rest 패러미터: 패러미터 몇 개 올지 모를 때 사용
  // 주의사항: 다른 패러미터와 사용할 땐, 맨 뒤에 쓰기
  function 함수(num: number, ...a: number[]) {
    console.log(a);
  }

  함수(1, 2, 3, 4, 5);

  // 추가 개념: ...(점 세개) 용도
  // 1. rest parameter
  // 2. array나 object 옆에 쓰일 때: 괄호 없애기(spread operator)
  let arr = [1, 2, 3];
  let arr2 = [4, 5];
  let arr3 = [...arr, ...arr2];
  console.log(arr3);

  // destructuring: mapping 시켜주는 것
  let [변수1, 변수2] = ["hi", 100];
  console.log(변수1);
  console.log(변수2);

  // typeScript에서 destructuring 사용할 땐 맞춰줘야 함
  let { student: student, age: age } = { student: true, age: 20 };

  // 단, 자바스크립트 신문법에 의해 변수 이름이 같다면 생략 가능
  // let { student, age } = { student: true, age: 20 };  // 위와 똑같이 동작

  // 함수에서 destructuring 사용
  // 예시: object 안의 자료를 함수 패러미터로 넣고 싶을 때
  function 함수2({ x, y }: { x: number; y: number }): void {
    console.log(x, y);
  }

  let 오브젝트 = { x: 1, y: 2 };
  // 함수2(오브젝트);
  함수2({ x: 1, y: 2 });

  function Homework1() {
    function getMax(...nums: number[]): number {
      let res = nums[0];
      nums.forEach((num) => {
        if (num > res) {
          res = num;
        }
      });
      return res;
    }

    console.log(getMax(6, 3, 7, 2));
  }

  function Homework2() {
    type ParamType = { user: string; comment: number[]; admin: boolean };
    function 함수({ user, comment, admin }: ParamType): void {
      console.log(user, comment, admin);
    }
    함수({ user: "kim", comment: [3, 5, 4], admin: false });
  }

  function Homework3() {
    function printArr([num, str, bool]: (number | string | boolean)[]): void {
      console.log(num, str, bool);
    }
    printArr([40, "wine", false]);
  }
};
