const JWT_STORAGE_KEY = 'jwt'

export default class Util {
  static setJwt (token) {
    localStorage.setItem(JWT_STORAGE_KEY, token)
  }
  static getJwt () {
    return localStorage.getItem(JWT_STORAGE_KEY)
  }
}
