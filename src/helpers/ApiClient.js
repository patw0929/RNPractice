import superagent from 'superagent';

const methods = ['get', 'post', 'put', 'patch', 'del'];

export function formatUrl(apiUrl, path) {
  if (path[0] === '/') {
    return `${apiUrl}${path}`;
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
