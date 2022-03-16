// 변수명 뒤에 타입 작성해야함
let 이름: string = "abc";

// object에 타입 작성, 타입 확실하지 않을땐 물음표 붙이기
let 타입불확실: { name?: string } = { name: "kim" };

// 가능한 타입이 여러개면 '|' 이용
let 어떤거: string | number = 123;

// 커스텀 타입
type 내타입 = string | number;

// 함수에 타입 지정
function 함수(x: number): number {
  return x * 2;
}

// tuple type 지정
type Member = [number, boolean];
let john: Member = [123, true];

// object에 여러 속성들 타입 한 번에 설정하기
type Member2 = {
  // 글자로 된 모든 object 속성 타입은 string
  [key: string]: string;
};
let ann: Member2 = { name: "kim", age: "123" };
