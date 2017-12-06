const JWT_STORAGE_KEY = 'jwt'

class Util {
  setJwt (token) {
    localStorage.setItem(JWT_STORAGE_KEY, token)
  }
  getJwt () {
    localStorage.getItem(JWT_STORAGE_KEY)
  }
}

export default Util
