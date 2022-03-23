// 모든 ts파일은 ambient module(글로벌 모듈)
var x: number = 10;

// 타입스크립트에서 변수이름을 name이라고 하면 안됨
// 타입스크립트 기본 파일에서 이미 name 변수가 있음

// import, export 사용하면 로컬 모듈로 사용 가능

// 현재 로컬 모듈인데 글로벌 변수 만들고 싶을때
declare global {
  type Dog = string;
}

export default {};
