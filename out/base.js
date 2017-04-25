define("foo", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function foo() {
        return 'foo';
    }
    exports["default"] = foo;
});
define("main", ["require", "exports", "foo"], function (require, exports, foo_1) {
    "use strict";
    exports.__esModule = true;
    console.log(foo_1["default"]());
});
