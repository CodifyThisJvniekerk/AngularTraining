var Utility;
(function (Utility) {
    var useful = /** @class */ (function () {
        function useful() {
        }
        useful.prototype.timestwo = function (num) {
            return num * 2;
        };
        return useful;
    }());
    Utility.useful = useful;
})(Utility || (Utility = {}));
/// <reference path="timestwo.ts"/>
var use = new Utility.useful();
console.log(use.timestwo(9));
