() => {
  let 동물: string | number | undefined; // 타입 지정 너무 김

  // type Alias: 타입 변수 만들기
  type Animal = string | number | undefined;
  let 동물2: Animal = "cat";

  type AnimalType = { name: string; age: number };
  let 동물3: AnimalType = { name: "abbc", age: 10 };

  // const 잠깐 설명
  // const 오브젝트 내의 값은 수정 가능
  const 출생지역 = { region: "seoul" };
  출생지역.region = "busan";

  // typescript는 오브젝트 내의 속성도 lock 가능
  // readonly 사용
  type PersonType = { readonly name: string; age?: number };
  const person: PersonType = { name: "abc", age: 20 };
  //   person.name = "def";  // 에러
  person.age = 23;

  // 타입 합치기
  type Name = string;
  type Age = number;
  type Person = Name | Age;

  // & 기호로 오브텍트 합치기(오브텍트 extend)
  type PositionX = { x: number };
  type PositionY = { y: number };
  type PositionXY = PositionX & PositionY;

  let positon: PositionXY = { x: 10, y: 20 };

  // type 변수는 재정의 불가능
  // type PositionX = string;  // error

  function Homework1() {
    type x = string | number;
    type y = string | boolean;

    type z = x | y;
    let test: z = "abc";
    let test2: z = 10;
    let test3: z = true;

    type a = { x: number; y: string };
    type b = { x: string; z: boolean };
    type c = a & b;
    // let test4: c = { x: "abc", y: "abc", z: true };
  }

  function Homework2() {
    type MyType = { color?: string; size: number; readonly position: number[] };
  }

  function Homework3() {
    type MyType2 = { name: string; phone: number; email: string };
  }

  function Homework4() {
    type MyType = { color?: string; size: number; readonly position: number[] };

    type Underage = { underage: boolean };

    type NewType = MyType & Underage;
  }
};
