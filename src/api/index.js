import axios from 'axios'
import qs from 'qs'

const http = axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {"Content-Type": "application/json; charset=utf-8"}
})

http.adornUrl = url => {
  return (process.env.NODE_ENV !== "production" &&
  process.env.VUE_APP_OPEN_PROXY === "true"
    ? "/api"
    : window.SITE_CONFIG.baseUrl) + url
}

http.adornData = (data = {}, contentType = "json") => {
  return contentType === "json" ? JSON.stringify(data) : qs.stringify(data)
}

export default http
