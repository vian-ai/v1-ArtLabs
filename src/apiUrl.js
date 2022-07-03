let apiUrl
const apiUrls = {
  production: 'https://evening-crag-31486.herokuapp.com',
  development: 'https://evening-crag-31486.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl;