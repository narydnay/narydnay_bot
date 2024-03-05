"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.botController = void 0;
const botController = {
    post: (_req, res) => {
        const { body } = _req;
        return res
            .status(200)
            .send('Data recive' + JSON.stringify(body));
    }
};
exports.botController = botController;
//# sourceMappingURL=telegram.js.map