/**
 * Http class
 */

export default class Http {
  constructor(api) {
    this.API = api;
  }
  async get(url) {
    const response = await fetch(this.API + url);
    const data = await response.json();
    return data;
  }

  async post(url, data) {
    const response = await fetch(this.API + url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  async delete(url) {
    const response = await fetch(this.API + url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  }
}
