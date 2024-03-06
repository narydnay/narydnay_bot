"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
class Config {
    constructor() {
        this.state = {
            token_bot: '6884974307:AAEN0vj63vJ0ntxRoVSiqSnupPg3S2h7ymc',
            host: 'https://narydnay-bot.vercel.app',
        };
    }
    get(name) {
        switch (name) {
            case 'token-bot':
                return this.state.token_bot;
            case 'host':
                return this.state.host;
            default: return null;
        }
    }
}
exports.config = new Config();
//# sourceMappingURL=config.js.map