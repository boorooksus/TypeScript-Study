(function () {
    // 연산은 number type만 가능 -> narrowing 통해서 타입 체크 후 연산
    function 함수(x) {
        // typeof 외에 in, instanceof 로도 narrowing 사용 가능
        if (typeof x === "number") {
            console.log(x + 1);
            var array = [];
            array.push(x);
        }
        else {
            // narrowing 할 대 else 꼭 넣어줘야 에러 안생김
            console.log("x is string");
        }
    }
    function 함수2(x) {
        // assertion: 타입 덮어쓰기
        var array = [];
        array[0] = x;
        // 아래 처럼 타입 변경은 안됨
        var 이름 = "kim";
        // 이름 as number;
        //무슨 타입이 들어올지 확실할때만 assertion 사용하기
    }
    function Homework1(arr) {
        var res = [];
        arr.forEach(function (item, i) {
            if (typeof item === "string") {
                res[i] = parseInt(item);
            }
            else {
                res[i] = item;
            }
        });
        return res;
    }
    console.log(Homework1([1, 2, "3", "4"]));
    function Homework2(obj) {
        if (typeof obj.subject === "string") {
            return obj.subject;
        }
        else {
            return obj.subject[obj.subject.length - 1];
        }
    }
    console.log(Homework2({ subject: "math" }));
    console.log(Homework2({ subject: ["science", "english"] }));
});
