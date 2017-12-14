import Util from '../utils/Util'

export default class AuthenticationActions {
	static async login(username, password) {
		var response = await fetch(
      'http://localhost:58292/api/login',
      {
        method: 'POST',
        body: JSON.stringify({
          email: username,
          password: password
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }
    )

    if (!response.ok) {
      return false
    }

    var json = await response.json()

    if (json.token) {
      Util.setJwt(json.token)
      Util.setUser(json.user)
    }

		return json
  }
  
  static isLogged() {
    return Util.getJwt() !== undefined && Util.getUser() !== undefined
  }

  static getLoggedIn() {
    return {
      jwt: Util.getJwt(),
      user: Util.getUser()
    }
  }
}
