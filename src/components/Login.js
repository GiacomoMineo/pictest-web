import React, { Component } from 'react'
import AuthenticationActions from '../actions/AuthenticationActions'

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
        console.log(loginResult)
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
			<div>
				<form onSubmit={this.handleLogin}>
					<input
						id='username'
						type='text'
						value={this.state.username}
						onChange={this.handleChange.bind(this, 'username')}
					/>
					<input
						id='password'
						type='password'
						value={this.state.password}
						onChange={this.handleChange.bind(this, 'password')}
          />
          <button type='submit'>Submit</button>
				</form>
			</div>
		)
	}
}

export default Login
