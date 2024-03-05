"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
class Config {
    constructor() {
        this.state = {
            token: '6884974307:AAEN0vj63vJ0ntxRoVSiqSnupPg3S2h7ymc',
            url_server: 'https://narydnay-bot.vercel.app/'
        };
    }
    get(name) {
        switch (name) {
            case 'token-bot':
                return this.state.token;
            case 'url-server':
                return this.state.url_server;
            default:
                return;
        }
    }
}
exports.config = new Config();
//# sourceMappingURL=server.js.map