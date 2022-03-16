(function () {
    var 동물; // 타입 지정 너무 김
    var 동물2 = "cat";
    var 동물3 = { name: "abbc", age: 10 };
    // const 잠깐 설명
    // const 오브젝트 내의 값은 수정 가능
    var 출생지역 = { region: "seoul" };
    출생지역.region = "busan";
    var person = { name: "abc", age: 20 };
    //   person.name = "def";  // 에러
    person.age = 23;
    var positon = { x: 10, y: 20 };
    // type 변수는 재정의 불가능
    // type PositionX = string;  // error
    function Homework1() {
        var test = "abc";
        var test2 = 10;
        var test3 = true;
        // let test4: c = { x: "abc", y: "abc", z: true };
    }
    function Homework2() {
    }
    function Homework3() {
    }
    function Homework4() {
    }
});
