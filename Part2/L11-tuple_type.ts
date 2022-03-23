() => {
  // array 위치까지 고려하여 엄격하게 타입지정하기

  let 멍멍: [string, boolean] = ["dog", true];
  let 야옹: [string, boolean?] = ["dog"];

  // 물음표는 맨 뒤에만 가능
  // let x: [string, boolean?, number] = ['dog'];

  // rest 패러미터의 tuple 타입
  function 함수(...x: [number, string]) {
    console.log(x);
  }
  함수(123, "345");

  // spread operator
  let arr = [1, 2, 3];
  let arr2: [...number[], number, number] = [...arr, 4, 5];

  function homework2() {
    let arr: [string, number, ...boolean[]] = ["동서녹차", 4000, true, false, true, true, false, true];
  }

  function homework3() {
    function 함수(...x: [string, boolean, ...(number | string)[]]) {}
    함수("a", true, 6, 3, "1", 4);
  }

  function homework4() {
    function 함수(...x: (number | string)[]): [String[], number[]] {
      let nums: number[] = [];
      let strs: string[] = [];
      x.forEach((a) => {
        if (typeof a === "number") {
          nums.push(a);
        } else {
          strs.push(a);
        }
      });

      return [strs, nums];
    }
  }
};
