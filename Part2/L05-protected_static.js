var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    // protected: extends된 class에서 사용 가능
    var User = /** @class */ (function () {
        function User() {
            this.x = 10;
        }
        return User;
    }());
    var NewUser = /** @class */ (function (_super) {
        __extends(NewUser, _super);
        function NewUser() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.x = 20;
            return _this;
        }
        NewUser.prototype.doThis = function () {
            this.x = 30;
        };
        return NewUser;
    }(User));
    // static
    var 클래스 = /** @class */ (function () {
        function 클래스() {
            this.y = 20;
        }
        // static은 부모만 가짐. 자식에게 안물려줌
        클래스.x = 10;
        return 클래스;
    }());
    var 자식1 = new 클래스();
    // console.log(자식1.x);  // x는 없음
    console.log(클래스.x);
    // static은 extends해도 같이 따라옴
    var 클래스2 = /** @class */ (function () {
        function 클래스2() {
            // static 변수는 this.변수로 사용하지 않고 클래스명.변수로 사용
            this.y = 클래스2.x + 10;
        }
        // static은 public, private와 같이 사용 가능
        클래스2.x = 10;
        return 클래스2;
    }());
    var 변수 = new 클래스2();
    console.log(변수);
    클래스2.x = 30;
    console.log(변수);
    function Homework2() {
        var User = /** @class */ (function () {
            function User() {
            }
            User.printX = function () {
                console.log(User.x);
            };
            User.x = 10;
            User.y = 20;
            User.addOne = function (a) {
                User.x += a;
            };
            return User;
        }());
        User.addOne(3); //이렇게 하면 x가 3 더해져야함
        User.addOne(4); //이렇게 하면 x가 4 더해져야함
        User.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
    }
    function Homework3() {
        var square = /** @class */ (function () {
            function square(width, height, color) {
                this.width = width;
                this.height = height;
                this.color = color;
            }
            square.prototype.draw = function () {
                var a = Math.random();
                var square = "<div style=\"position:relative; \n      top:".concat(a * 400, "px; \n      left:").concat(a * 400, "px; \n      width:").concat(this.width, "px; \n      height : ").concat(this.height, "px; \n      background:").concat(this.color, "\"></div>");
                document.body.insertAdjacentHTML("beforeend", square);
            };
            return square;
        }());
    }
});
