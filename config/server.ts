interface Configuration {
  get: (name: string)=> string | number | boolean,
}

class Config implements Configuration{
  constructor(){
    
  }
  state = {
    token: '6884974307:AAEN0vj63vJ0ntxRoVSiqSnupPg3S2h7ymc',
    url_server: 'https://narydnay-bot.vercel.app/'
  }

  public get(name: string) {
    switch(name){
      case 'token-bot':
        return this.state.token;
      case  'url-server':
        return this.state.url_server
      default: 
        return;

    }
  }
}

export const config = new Config();