const storageKeys = {
  jwt: 'jwt',
  user: 'user'
}

export default class Util {
  static setJwt (jwt) {
    localStorage.setItem(storageKeys.jwt, jwt)
  }
  static getJwt () {
    return localStorage.getItem(storageKeys.jwt)
  }
  static setUser (user) {
    localStorage.setItem(storageKeys.user, JSON.stringify(user))
  }
  static getUser () {
    return JSON.parse(localStorage.getItem(storageKeys.user))
  }
}
