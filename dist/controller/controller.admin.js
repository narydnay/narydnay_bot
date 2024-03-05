"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
exports.route = (0, express_1.Router)();
exports.route.get('/', (_req, res) => {
    res.send('Router work good');
});
//# sourceMappingURL=controller.admin.js.map