var 클래스 = /** @class */ (function () {
    function 클래스() {
        // static 변수는 this.변수로 사용하지 않고 클래스명.변수로 사용
        this.y = 클래스.x + 10;
    }
    // static은 public, private와 같이 사용 가능
    클래스.x = 10;
    return 클래스;
}());
var 변수 = new 클래스();
console.log(변수);
클래스.x = 30;
console.log(변수);
var 변수2 = new 클래스();
console.log(변수2);
