"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.get('/', (_req, res) => {
    return res.send('express Typesscript on Vercel work');
});
app.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
app.listen(PORT, () => console.log(`Server is listening on ${PORT} `));
//# sourceMappingURL=index.js.map