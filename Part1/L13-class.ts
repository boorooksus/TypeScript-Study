() => {
  // typescript에서 클래스 사용하기

  class Person {
    name: string; // name 필드 값 미리 지정해줘야 constructor에서 선언 가능

    // 리턴은 항상 오브젝트이기 때문에 리턴 타입은 굳이 명시 안해도 됨
    constructor(name: string) {
      this.name = name;
    }

    data = 0;

    함수(x: string): void {
      console.log(x);
    }
  }

  let 사람1 = new Person("kim");
  let 사람2 = new Person("park");

  사람1.함수("hello");

  function Homework() {
    class Car {
      model: string;
      price: number;

      constructor(model: string, price: number) {
        this.model = model;
        this.price = price;
      }

      tax(): number {
        return this.price / 10;
      }
    }

    let car1 = new Car("소나타", 3000);
    console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
    console.log(car1.tax()); //콘솔창 출력결과는 300
  }

  function Homework2() {
    class Word {
      num: number[];
      str: string[];

      constructor(...x: (string | number)[]) {
        x.forEach((item) => {
          if (typeof item === "number") {
            this.num.push(item);
          } else {
            this.str.push(item);
          }
        });
      }
    }

    let obj = new Word("kim", 3, 5, "park");
    console.log(obj.num); //[3,5]
    console.log(obj.str); //['kim', 'park']
  }
};
