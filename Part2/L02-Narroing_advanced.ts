() => {
  // 0. undefined, null 체크 할 때 테크닉
  function 함수(a: string | undefined) {
    // if, else를 if 하나로 줄이는법

    // a가 undefined면 실행 안됨( && 왼쪽이 false라서)
    // string이면 실행(&& 왼쪽 오른쪽 둘 다 true)
    if (a && typeof a === "string") {
      console.log("a is string");
      return;
    }
  }
  // &&: 조건식 2개가 참이면 전부 참으로 판정해주는 논리연산자
  // true/false 대신 자료형은 넣으면 && 사이에서 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막 값을 남김
  // falsy: null, undefined, NaN( false와 유사한 기능하는 것들)
  //     1 && null && 3   // null이 남음
  // undefined && '안녕' && 100  // undefined 남음

  // 1. in 키워드로 narrowing
  type Fish = { swim: string };
  type Bird = { fly: string };

  function 함수2(animal: Fish | Bird) {
    // animal 변수가 Fish인지 Bird인지에 따라 narrowing

    // 아래 처럼 하면 에러남.
    // typeof 연산자는 number, string, boolean, object등 기본 타입만 가능
    // if (typeof animal === 'Fish') {
    //     animal.swim
    // }

    // 해결법: in 사용
    if ("swim" in animal) {
      animal.swim;
    }

    // class로 생성된 instance인 경우, instanceof 로도 해결 가능

    // instanceof는 날짜에서 많이 사용됨
    let 날짜 = new Date();
    if (날짜 instanceof Date) {
    }
  }

  // 비슷한 오브젝트 타입들을 만들어 사용하는 경우, 오브젝트 타입마다 literal type을 만들어두면 narrowing 편리해짐.
  type Car = {
    wheel: "4개";
    color: string;
  };
  type Bike = {
    wheel: "2개";
    color: string;
  };

  function 함수3(x: Car | Bike) {
    if (x.wheel === "4개") {
      console.log("이 차는 " + x.color);
    } else {
      console.log("이 바이크는 " + x.color);
    }
  }
  // unique하게 구분 가능할 수 있도록 literal type 지정

  //  object들 구분할 일이 많을 때 literal type을 만들어두면 편리
};
