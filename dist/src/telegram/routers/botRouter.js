"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_1 = require("../../admin/controllers/admin");
const telegram_1 = require("../controllers/telegram");
admin_1.routers.post('/bot', telegram_1.botController.post);
//# sourceMappingURL=botRouter.js.map