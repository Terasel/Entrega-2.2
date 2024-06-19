"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
var throttle = function (fn, wait) {
    if (wait === void 0) { wait = 300; }
    var inThrottle, lastFn, lastTime;
    return function () {
        var context = this, args = arguments;
        if (!inThrottle) {
            fn.apply(context, args);
            lastTime = Date.now();
            inThrottle = true;
        }
        else {
            clearTimeout(lastFn);
            lastFn = setTimeout(function () {
                if (Date.now() - lastTime >= wait) {
                    fn.apply(context, args);
                    lastTime = Date.now();
                }
            }, Math.max(wait - (Date.now() - lastTime), 0));
        }
    };
};
exports.throttle = throttle;
