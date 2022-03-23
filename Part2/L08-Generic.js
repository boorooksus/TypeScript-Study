(function () {
    function 함수(x) {
        return x[0];
    }
    var a = 함수([1, 2]);
    // a의 타입은? number아님 unknown임.
    // 연산 하려면 narrowing해야함
    // console.log(a + 1);
    // 다른 방법으로 Generic 함수 만들면 됨
    function 함수2(x) {
        return x[0];
    }
    var b = 함수2([1, 2]);
    console.log(b + 1);
    // type 여러 개 지정 가능
    function 함수3(x, y) {
        return x[0];
    }
    var c = 함수3([1, 2], ["3", "4"]);
    // Generic 타입 제한두기(constraints)
    function 함수4(x) {
        // 연산할 때 narrowing 할 필요 없음
        return x + 1;
    }
    function 함수5(x) {
        // 연산할 때 narrowing 할 필요 없음
        return x.length;
    }
    // 클래스에도 적용 가능
    var 클래스 = /** @class */ (function () {
        function 클래스() {
        }
        return 클래스;
    }());
    function homework1(x) {
        console.log(x.length);
    }
    homework1(["kim", "park"]);
    function Homework2(x) {
        // let res: Animal;
        // res.name = x.parse("name");
        // res.age = x.parse("age");
        // return res;
        return JSON.parse(x);
    }
    var data = '{"name" : "dog", "age" : 1 }';
    function Homework3() {
        var Person = /** @class */ (function () {
            function Person(a) {
                this.name = a;
            }
            return Person;
        }());
        var a = new Person("어쩌구");
        a.name;
        console.log(typeof a.name);
    }
});
