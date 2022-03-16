// 함수 타입 지정
function 함수1(x: number): number {
  return x * 2;
}

// void: 아무것도 리턴하지 않을 때
function 함수2(x: number): void {
  1 + 1;
}

// 파라미터가 옵션일 경우
function 함수3(x?: number): void {}

// 위랑 같은 코드
function 함수4(x: number | undefined): void {}
