import axios from 'axios'
import routes from '../modules/routes/routes'

const api = (url = '', method = '', data = {}, authorization = true) => {
  const state = localStorage.getItem('persist:wheelInRent')

  const options = {
    method,
    headers: {},
    data,
    url: `${process.env.REACT_APP_API_ENDPOINT}/${url}`,
  }

  if (authorization) {
    options.headers.authorization = 'Bearer ' + JSON.parse(JSON.parse(state)?.session)?.token
  }

  axios.interceptors.response.use(response => response, error => {
    if (error?.response?.data?.error === 'Unauthorized') {
      window.location.pathname = routes.SIGN_IN
    } else if (error) {
      throw error
    }
  })
  
  return axios(options)
}

export default api
