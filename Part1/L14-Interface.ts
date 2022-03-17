() => {
  // Object에 타입 지정할 때, type alias 지정하는 방법 외에 interface 사용 가능

  // 둘이 같은 표현
  //   type Square = { color: string; width: number };
  interface Square {
    color: string;
    width: number;
  }

  let 네모: Square = { color: "red", width: 100 };

  // 인터페이스 장점: extends 가능
  interface Student {
    name: String;
  }
  interface Teacher extends Student {
    age: number;
  }
  let 학생: Student = { name: "kim" };
  let 선생: Teacher = { name: "park", age: 20 };

  // 그런데 type alias도 이런 기능 가능
  // intersection type 이용
  type Animal = { name: string };
  type Cat = { age: number } & Animal;

  // 단, interface는 중복 선언 가능하지만, intersection은 불가능
  //   interface Student { score: number };
  // 위 코드 추가하면 기존 Student에 score 속성 추가됨.

  // 그리고 interface, type alias 둘 다 기존 속성 변경 불가
  // interface Student { name: number };  // 에러
  type Dog = { name: number } & Animal;
  // let 개: Dog = {name: 123}  // 에러(never 타입)

  // interface가 더 자주 사용됨

  function Homework1() {
    interface ProductType {
      brand: string;
      serialNumber: number;
      model: string[];
    }
    let 상품 = { brand: "Samsung", serialNumber: 1360, model: ["TV", "phone"] };
  }

  function Homework2_3() {
    interface Item {
      product: string;
      price: number;
    }
    let 장바구니: Item[] = [
      { product: "청소기", price: 7000 },
      { product: "삼다수", price: 800 },
    ];

    interface NewItem extends Item {
      card?: boolean;
    }
  }

  function Homework4() {
    interface Op {
      plus: (a: number, b: number) => number;
      minus: (a: number, b: number) => number;
    }

    let obj: Op = {
      plus(a, b) {
        return a + b;
      },
      minus(a, b) {
        return a - b;
      },
    };
  }
};
