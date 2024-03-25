export class UrlProvider {
    constructor() {
      this.domainUrl = '';
      this.init();
    }
    init() {
      // this.domainUrl = process.env.REACT_APP_API_URL;// Written based on api response model designed. Api endpoints Backend will be created using nodejs
      this.domainUrl = "http://13.53.44.194/9000" ;// Written based on api response model designed. Api endpoints Backend will be created using nodejs
      if (!this.domainUrl) {
        console.error(
          'ERROR: Unable to load domain url');
      }
      console.info(`Successfully loaded urls: ${ this.domainUrl }`);
    }
    
    getDomainUrl() {
      return this.domainUrl;
    }
   
  }