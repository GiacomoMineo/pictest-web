import React, { Component } from 'react'
import { Button, TextField } from 'material-ui'
import AuthenticationActions from '../actions/AuthenticationActions'
import '../styles/build/login.css'

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: ''
    }
	}

	handleLogin = event => {
    event.preventDefault()

		AuthenticationActions.login(this.state.username, this.state.password).then(
			loginResult => {
        if (loginResult.token)
          this.props.onLogin(loginResult.user, loginResult.token)
      }
		)
	}

	handleChange = (id, event) => {
		this.setState({
			[id]: event.target.value
		})
	}

	render() {
		return (
      <div className="login-panel">
        <form onSubmit={this.handleLogin}>
          <TextField
            label="Username"
            placeholder="Username"
            fullWidth
            value={this.state.username}
            onChange={this.handleChange.bind(this, 'username')}
          />
          <TextField
            label="Password"
            placeholder="Password"
            fullWidth
            type="password"
            value={this.state.password}
            onChange={this.handleChange.bind(this, 'password')}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </div>
		)
	}
}

export default Login
