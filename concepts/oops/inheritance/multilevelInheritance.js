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
/** multilevel inheritance */
/**
 * In multilevel inheritance, the derived class acts as the base class for another derived class.
 * The newly created derived class acquires the properties and behivor of other base classes.
 *
 */
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.type = function () {
        console.log("car");
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.brand = function () {
        console.log("abc");
    };
    return Car;
}(Vehicle));
var CarModel = /** @class */ (function (_super) {
    __extends(CarModel, _super);
    function CarModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarModel.prototype.model = function () {
        console.log("abc2021");
    };
    return CarModel;
}(Car));
var car = new CarModel();
car.brand();
car.type();
car.model();
