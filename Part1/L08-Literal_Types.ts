() => {
  // Literal Type: 원하는 값만 올 수 있게 하기
  let 이름: "kim";
  이름 = "kim";
  // 이름 = 'Park';  // Error

  let age: 10 | 20 | 30;
  age = 10;

  // 패러미터는 hello만, 리턴값은 1 또는 0
  function 함수(x: "hello"): 1 | 0 {
    return 1;
  }

  type 가위바위보 = "가위" | "바위" | "보";
  function 함수2(x: 가위바위보): 가위바위보[] {
    let arr = [x];
    return arr;
  }

  // 자료를 여러 개 저장할 수 있는 const 라고 생각할 수 있음.

  // Literal type 문제점
  var 자료 = { name: "kim" };
  function 내함수(a: "kim") {}
  // 내함수(자료.name); // 에러

  // 해결법1
  var 자료2: { name: "kim" } = { name: "kim" };
  function 내함수2(a: "kim") {}
  내함수2(자료2.name);

  // 해결법2
  // as const: literal type 지정해줌. type을 value로 변경해줌.
  // as const 쓰면 readonly로 설정해줌
  var 자료3 = { name: "kim" } as const;
  function 내함수3(a: "kim") {}
  내함수3(자료3.name);
};
