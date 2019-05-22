const axios = require('axios')

module.exports = axios.create({
  //baseURL: 'http://localhost:8081',
  /*Чтобы использовать релизный API - раскомментируй строку*/
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Authorization": `Bearer ${localStorage.token}`,
    "Access-Control-Allow-Origin": "*"
  }
})
