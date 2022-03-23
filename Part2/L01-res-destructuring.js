var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
(function () {
    // rest 패러미터: 패러미터 몇 개 올지 모를 때 사용
    // 주의사항: 다른 패러미터와 사용할 땐, 맨 뒤에 쓰기
    function 함수(num) {
        var a = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            a[_i - 1] = arguments[_i];
        }
        console.log(a);
    }
    함수(1, 2, 3, 4, 5);
    // 추가 개념: ...(점 세개) 용도
    // 1. rest parameter
    // 2. array나 object 옆에 쓰일 때: 괄호 없애기(spread operator)
    var arr = [1, 2, 3];
    var arr2 = [4, 5];
    var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
    console.log(arr3);
    // destructuring: mapping 시켜주는 것
    var _a = ["hi", 100], 변수1 = _a[0], 변수2 = _a[1];
    console.log(변수1);
    console.log(변수2);
    // typeScript에서 destructuring 사용할 땐 맞춰줘야 함
    var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
    // 단, 자바스크립트 신문법에 의해 변수 이름이 같다면 생략 가능
    // let { student, age } = { student: true, age: 20 };  // 위와 똑같이 동작
    // 함수에서 destructuring 사용
    // 예시: object 안의 자료를 함수 패러미터로 넣고 싶을 때
    function 함수2(_a) {
        var x = _a.x, y = _a.y;
        console.log(x, y);
    }
    var 오브젝트 = { x: 1, y: 2 };
    // 함수2(오브젝트);
    함수2({ x: 1, y: 2 });
    function Homework1() {
        function getMax() {
            var nums = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                nums[_i] = arguments[_i];
            }
            var res = nums[0];
            nums.forEach(function (num) {
                if (num > res) {
                    res = num;
                }
            });
            return res;
        }
        console.log(getMax(6, 3, 7, 2));
    }
    function Homework2() {
        function 함수(_a) {
            var user = _a.user, comment = _a.comment, admin = _a.admin;
            console.log(user, comment, admin);
        }
        함수({ user: "kim", comment: [3, 5, 4], admin: false });
    }
    function Homework3() {
        function printArr(_a) {
            var num = _a[0], str = _a[1], bool = _a[2];
            console.log(num, str, bool);
        }
        printArr([40, "wine", false]);
    }
});
