// interface Configuration {
//   get: (name: string) => void;
// }

// class Config implements Configuration {

//   state = {
//     token_bot: '6884974307:AAEN0vj63vJ0ntxRoVSiqSnupPg3S2h7ymc',
//     host: 'https://narydnay-bot.vercel.app',

//   }

//   get(name: string) {
//     switch (name) {
//       case 'token-bot':
//         return this.state.token_bot;
//       case 'host':
//         return this.state.host;
//       default: return null;
//     }
//   }
// }

// export const config = new Config();