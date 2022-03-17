(function () {
    // Object에 타입 지정할 때, type alias 지정하는 방법 외에 interface 사용 가능
    var 네모 = { color: "red", width: 100 };
    var 학생 = { name: "kim" };
    var 선생 = { name: "park", age: 20 };
    // let 개: Dog = {name: 123}  // 에러(never 타입)
    // interface가 더 자주 사용됨
    function Homework1() {
        var 상품 = { brand: "Samsung", serialNumber: 1360, model: ["TV", "phone"] };
    }
    function Homework2_3() {
        var 장바구니 = [
            { product: "청소기", price: 7000 },
            { product: "삼다수", price: 800 },
        ];
    }
    function Homework4() {
        var obj = {
            plus: function (a, b) {
                return a + b;
            },
            minus: function (a, b) {
                return a - b;
            },
        };
    }
});
