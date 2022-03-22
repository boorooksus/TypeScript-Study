export var 이름 = "kim";
export var 나이 = 20;

export type NameType = string;

// namespace: 타입 변수 숨기기
// 옛날 타입스크립트에서 타입명 숨겨서 중복 방지함
// 지금은 잘 안쓰임
namespace 네임스페이스 {
  export type Name = string | number;
}
