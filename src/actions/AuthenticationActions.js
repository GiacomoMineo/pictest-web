class AuthenticationActions {
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
    var json = await response.json()
		return json
	}
}

export default AuthenticationActions
