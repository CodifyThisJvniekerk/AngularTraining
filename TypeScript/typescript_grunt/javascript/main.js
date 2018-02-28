var Helper;
(function (Helper) {
    var Langauge = (function () {
        function Langauge() {
        }
        Langauge.Greeting = "Bonjour";
        return Langauge;
    }());
    Helper.Langauge = Langauge;
})(Helper || (Helper = {}));
console.log(Helper.Langauge.Greeting + ' World');
//# sourceMappingURL=main.js.map