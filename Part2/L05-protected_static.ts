() => {
  // protected: extends된 class에서 사용 가능
  class User {
    protected x = 10;
  }
  class NewUser extends User {
    x = 20;
    doThis() {
      this.x = 30;
    }
  }

  // static

  class 클래스 {
    // static은 부모만 가짐. 자식에게 안물려줌
    static x = 10;
    y = 20;
  }

  let 자식1 = new 클래스();
  // console.log(자식1.x);  // x는 없음
  console.log(클래스.x);

  // static은 extends해도 같이 따라옴

  class 클래스2 {
    // static은 public, private와 같이 사용 가능
    public static x = 10;

    // static 변수는 this.변수로 사용하지 않고 클래스명.변수로 사용
    y = 클래스2.x + 10;
  }

  let 변수 = new 클래스2();
  console.log(변수);
  클래스2.x = 30;
  console.log(변수);

  function Homework2() {
    class User {
      private static x = 10;
      public static y = 20;

      static addOne = (a: number) => {
        User.x += a;
      };

      static printX(): void {
        console.log(User.x);
      }
    }
    User.addOne(3); //이렇게 하면 x가 3 더해져야함
    User.addOne(4); //이렇게 하면 x가 4 더해져야함
    User.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
  }

  function Homework3() {
    class square {
      constructor(public width: number, public height: number, public color: string) {}

      draw() {
        let a = Math.random();
        let square = `<div style="position:relative; 
      top:${a * 400}px; 
      left:${a * 400}px; 
      width:${this.width}px; 
      height : ${this.height}px; 
      background:${this.color}"></div>`;
        document.body.insertAdjacentHTML("beforeend", square);
      }
    }
  }
};
