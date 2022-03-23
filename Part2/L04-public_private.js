(function () {
    var User = /** @class */ (function () {
        function User(a) {
            // name;  // 위와 똑같이 동작
            // private: 자식에서 수정 불가능
            // 클래스 내에서만 수정
            this.familyName = "kim";
            this.name = a + this.familyName;
        }
        // 외부에서 private 속성 변경하려면 함수 만들어서 쓰기
        User.prototype.이름변경함수 = function (a) {
            this.familyName = a;
        };
        return User;
    }());
    var 유저1 = new User("park");
    유저1.name = "hi";
    var Person = /** @class */ (function () {
        // public 키워드 쓰면 선언, this.~ 생략 가능
        // 바로 name에 할당
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var 사람1 = new Person("john");
});
