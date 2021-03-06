const API_URL = 'https://librarify.latteandfront.es/api';

const apiClient = {
  get: async function (path) {
    const response = await fetch(`${API_URL}${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      const json = response.status === 204 ? null : await response.json();
      return json;
    } else {
      const json = await response.json();
      throw new Error(JSON.parse(json));
    }
  },
  post: async function (path, dataObj) {
    const response = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataObj)
    });
    if (response.ok) {
      const json = response.statusCode === 204 ? null : await response.json();
      return json;
    } else {
      const json = await response.json();
      throw new Error(JSON.stringify(json));
    }
  }
};

export default apiClient;