define("bar", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function bar() {
        return 'bar';
    }
    exports["default"] = bar;
});
define("main", ["require", "exports", "bar"], function (require, exports, bar_1) {
    "use strict";
    exports.__esModule = true;
    console.log(bar_1["default"]);
});
