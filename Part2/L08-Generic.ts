() => {
  function 함수(x: unknown[]) {
    return x[0];
  }

  let a = 함수([1, 2]);
  // a의 타입은? number아님 unknown임.
  // 연산 하려면 narrowing해야함
  // console.log(a + 1);

  // 다른 방법으로 Generic 함수 만들면 됨
  function 함수2<MyType>(x: MyType[]): MyType {
    return x[0];
  }
  let b = 함수2<number>([1, 2]);
  console.log(b + 1);

  // type 여러 개 지정 가능
  function 함수3<MyType, MyType2>(x: MyType[], y: MyType2[]): MyType {
    return x[0];
  }
  let c = 함수3<number, string>([1, 2], ["3", "4"]);

  // Generic 타입 제한두기(constraints)
  function 함수4<MyType extends number>(x: MyType): number {
    // 연산할 때 narrowing 할 필요 없음
    return x + 1;
  }

  // 커스텀 타입도 가능
  interface LengthCheck {
    length: number;
  }

  function 함수5<MyType extends LengthCheck>(x: MyType): number {
    // 연산할 때 narrowing 할 필요 없음
    return x.length;
  }

  // 클래스에도 적용 가능
  class 클래스<T> {}

  function homework1<T extends string | string[]>(x: T): void {
    console.log(x.length);
  }
  homework1<string[]>(["kim", "park"]);

  interface Animal {
    name: string;
    age: number;
  }

  function Homework2<T extends Animal>(x: string): Animal {
    // let res: Animal;
    // res.name = x.parse("name");
    // res.age = x.parse("age");
    // return res;
    return JSON.parse(x);
  }

  let data = '{"name" : "dog", "age" : 1 }';

  function Homework3() {
    class Person<T> {
      name;
      constructor(a: T) {
        this.name = a;
      }
    }
    let a = new Person<string>("어쩌구");
    a.name;
    console.log(typeof a.name);
  }
};
