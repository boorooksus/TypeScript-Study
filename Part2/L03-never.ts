() => {
  // 함수 return 타입으로 never 사용할 수 있는 조건
  // 1. return 값이 없어야함
  // 2. endpoint가 없어야함
  function 함수(): never {
    // 끝나지 않는 함수 만드는법
    // 1. 에러 발생
    throw new Error();
    // 2. 무한 루프
    while (true) {}
  }

  // never타입 등장하는 경우. 많이는 안쓰임

  // 1. 이상한 narrowing에서 never타입 등장
  function 함수2(param: string) {
    if (typeof param == "string") {
      console.log(param);
    } else {
      // 이 부분 param은 never 타입
      // ( 이 조건이 걸리는건 있을 수 없기 때문)
      console.log(param);
    }
  }

  // 2. 어떤 함수표현식은 return 타입이 자동으로 never
  let 함수3 = function () {
    throw new Error();
  };
};
