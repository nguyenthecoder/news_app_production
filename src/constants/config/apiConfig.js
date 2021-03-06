import { getIdToken } from '../../utils/storage'
const LOCAL_HOST_IP = 'localhost'
const PORT = '5000'
const LOCAL_HOST = `${LOCAL_HOST_IP}:${PORT}`
// const HTTP_PROTOCOL = 'http'
// const FIREBASE_PROJECT = 'booksocialnetwork-4e3b7/us-central1/api'
const FIREBASE_URL_PRODUCTION = 'https://us-central1-booksocialnetwork-4e3b7.cloudfunctions.net/api'

const apiConfig = {
  localhost: LOCAL_HOST,
  // baseUrl: `${HTTP_PROTOCOL}://${LOCAL_HOST}/${FIREBASE_PROJECT}`
  baseUrl: FIREBASE_URL_PRODUCTION
}

const getRequestConfig = () => (
  {
    headers: {
      Authorization: `Bearer ${getIdToken()}`
    }
  }
)

export { apiConfig, getRequestConfig }
