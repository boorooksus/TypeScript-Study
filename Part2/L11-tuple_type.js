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
    // array 위치까지 고려하여 엄격하게 타입지정하기
    var 멍멍 = ["dog", true];
    var 야옹 = ["dog"];
    // 물음표는 맨 뒤에만 가능
    // let x: [string, boolean?, number] = ['dog'];
    // rest 패러미터의 tuple 타입
    function 함수() {
        var x = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            x[_i] = arguments[_i];
        }
        console.log(x);
    }
    함수(123, "345");
    // spread operator
    var arr = [1, 2, 3];
    var arr2 = __spreadArray(__spreadArray([], arr, true), [4, 5], false);
    function homework2() {
        var arr = ["동서녹차", 4000, true, false, true, true, false, true];
    }
    function homework3() {
        function 함수() {
            var x = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                x[_i] = arguments[_i];
            }
        }
        함수("a", true, 6, 3, "1", 4);
    }
    function homework4() {
        function 함수() {
            var x = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                x[_i] = arguments[_i];
            }
            var nums = [];
            var strs = [];
            x.forEach(function (a) {
                if (typeof a === "number") {
                    nums.push(a);
                }
                else {
                    strs.push(a);
                }
            });
            return [strs, nums];
        }
    }
});
