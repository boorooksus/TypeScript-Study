(function () {
    var 함수 = function (a) {
        return 10;
    };
    var 회원정보 = {
        name: "kim",
        plusOne: function (a) {
            return a + 1;
        },
        changeName: function (a) {
            회원정보.name = a;
        },
    };
    function Homework2() {
        var cutZero = function (x) {
            x = x.replace(/^0+/, "");
            return x;
        };
        console.log(cutZero("000123"));
        var removeDash = function (x) {
            var arr = x.split("-");
            var res = "";
            arr.forEach(function (num) {
                res += num;
            });
            return Number(res);
        };
        console.log(removeDash("123-456-788"));
        function Homework3() {
            var cutZero = function (x) {
                x = x.replace(/^0+/, "");
                return x;
            };
            var removeDash = function (x) {
                var arr = x.split("-");
                var res = "";
                arr.forEach(function (num) {
                    res += num;
                });
                return Number(res);
            };
            var myFunc = function (a, b, c) {
                console.log(c(b(a)));
            };
            myFunc("010-1111-2222", cutZero, removeDash);
        }
    }
});
