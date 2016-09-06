const baseUrl = process.env.API_SERVER || 'http://127.0.0.1:1024/api'

const api = {
  fetch({name, body}) {
    // do http request
    var req = new Request(`${baseUrl}/${name}`, {method: 'POST', body: JSON.stringify(body)})
    return fetch(req)
  }
}

export default api
