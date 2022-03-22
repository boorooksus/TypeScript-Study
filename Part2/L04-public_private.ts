() => {
  class User {
    // public: 자식들이 이용 가능
    // public은 안써도 기본으로 설정돼있 음.
    public name;
    // name;  // 위와 똑같이 동작

    // private: 자식에서 수정 불가능
    // 클래스 내에서만 수정
    private familyName = "kim";

    constructor(a) {
      this.name = a + this.familyName;
    }

    // 외부에서 private 속성 변경하려면 함수 만들어서 쓰기
    이름변경함수(a) {
      this.familyName = a;
    }

    // // 함수에도 쓸 수 있음
    // public 함수() {

    // }
  }

  let 유저1 = new User("park");
  유저1.name = "hi";

  class Person {
    // public 키워드 쓰면 선언, this.~ 생략 가능
    // 바로 name에 할당
    constructor(public name: string) {}
  }
  let 사람1 = new Person("john");
};
