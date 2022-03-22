() => {
  // type alias에 함수 type 저장하는 법
  type 함수타입 = (a: string) => number;

  let 함수: 함수타입 = function (a) {
    return 10;
  };

  // object 에 함수 저장할 수 있음
  type UserType = {
    name: string;
    plusOne: (a: number) => number;
    changeName: (a: string) => void;
  };

  let 회원정보: UserType = {
    name: "kim",
    plusOne(a) {
      return a + 1;
    },
    changeName: (a) => {
      회원정보.name = a;
    },
  };

  function Homework2() {
    type StripType = (x: string) => string;
    let cutZero: StripType = (x) => {
      x = x.replace(/^0+/, "");
      return x;
    };

    console.log(cutZero("000123"));

    type RemoverType = (x: string) => number;
    let removeDash: RemoverType = (x) => {
      let arr = x.split("-");
      let res = "";
      arr.forEach((num) => {
        res += num;
      });
      return Number(res);
    };

    console.log(removeDash("123-456-788"));

    function Homework3() {
      type StripType = (x: string) => string;
      let cutZero: StripType = (x) => {
        x = x.replace(/^0+/, "");
        return x;
      };

      type RemoverType = (x: string) => number;
      let removeDash: RemoverType = (x) => {
        let arr = x.split("-");
        let res = "";
        arr.forEach((num) => {
          res += num;
        });
        return Number(res);
      };

      type CbType = (a: string, b: StripType, c: RemoverType) => void;
      let myFunc: CbType = (a, b, c) => {
        console.log(c(b(a)));
      };
      myFunc("010-1111-2222", cutZero, removeDash);
    }
  }
};
