import superagent from 'superagent';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

const methods = ['get', 'post', 'put', 'patch', 'del'];

export function formatUrl(path) {
  if (path[0] === '/') {
    return `${API_URL}${path}`;
  }

  return path;
}

export default class ApiClient {
  constructor() {
    methods.forEach((method) => {
      this[method] = (path) => superagent[method](formatUrl(path));
    });
  }
}
