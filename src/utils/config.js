export default class Config {
  static getUrlBack = () => {
    return process.env.REACT_APP_API_URL || 'http://localhost:4000';
  }
}