"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routers = void 0;
const express_1 = require("express");
exports.routers = (0, express_1.Router)();
exports.routers.get('/', (_req, res) => {
    res.send('Router work good');
});
exports.routers.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
//# sourceMappingURL=admin.js.map