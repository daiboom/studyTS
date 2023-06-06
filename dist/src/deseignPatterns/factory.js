"use strict";
// 부모 생성자
function CarMaker() { }
// 부모 메서드
CarMaker.prototype.drive = () => {
    return "Vroom, " + this.doors + " doors";
};
// 스태틱 팩토리 메서드
CarMaker.factory = function (type) {
    let constructor = type;
    let newcar = null;
    // 생성자 체크: 에러
    if (typeof CarMaker[constructor] !== "function") {
        throw {
            name: "Error",
            message: constructor + " doesn`t exist",
        };
    }
    // 생성자 체크: 정상
    // 부모 상속. 상속은 단 한번만 실행하도록 한다.
    if (typeof CarMaker[constructor].prototype.drive !== "function") {
        CarMaker[constructor].prototype = new CarMaker();
    }
    // 새로운 인스턴스를 생성한다.
    newcar = new CarMaker[constructor]();
    // 다른 메서드 호출이 필요하면 여기서 실행한 후, 인스턴스를 반환한다.
    return newcar;
};
CarMaker.Compact = function () {
    this.doors = 4;
};
CarMaker.Convertible = function () {
    this.doors = 2;
};
CarMaker.SUV = function () {
    this.doors = 24;
};
const comp = new CarMaker();
comp.factory("Compact");
console.log(comp);
