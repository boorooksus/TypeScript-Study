(function () {
    // typescript에서 클래스 사용하기
    var Person = /** @class */ (function () {
        // 리턴은 항상 오브젝트이기 때문에 리턴 타입은 굳이 명시 안해도 됨
        function Person(name) {
            this.data = 0;
            this.name = name;
        }
        Person.prototype.함수 = function (x) {
            console.log(x);
        };
        return Person;
    }());
    var 사람1 = new Person("kim");
    var 사람2 = new Person("park");
    사람1.함수("hello");
    function Homework() {
        var Car = /** @class */ (function () {
            function Car(model, price) {
                this.model = model;
                this.price = price;
            }
            Car.prototype.tax = function () {
                return this.price / 10;
            };
            return Car;
        }());
        var car1 = new Car("소나타", 3000);
        console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
        console.log(car1.tax()); //콘솔창 출력결과는 300
    }
    function Homework2() {
        var Word = /** @class */ (function () {
            function Word() {
                var x = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    x[_i] = arguments[_i];
                }
                var _this = this;
                x.forEach(function (item) {
                    if (typeof item === "number") {
                        _this.num.push(item);
                    }
                    else {
                        _this.str.push(item);
                    }
                });
            }
            return Word;
        }());
        var obj = new Word("kim", 3, 5, "park");
        console.log(obj.num); //[3,5]
        console.log(obj.str); //['kim', 'park']
    }
});
