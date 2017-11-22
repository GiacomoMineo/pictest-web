import React, { Component } from 'react'
import Login from './Login'
import ContestList from './ContestList'
import ContestActions from './../actions/ContestActions'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
      token: null,
      user: null,
			contests: []
		}
	}

	onLogin = (user, token) => {
		this.setState({
      user: user,
			token: token
		})
	}

	componentDidMount() {
		ContestActions.list().then(contestsResponse => {
			this.setState({
				contests: contestsResponse.contests,
				cursor: contestsResponse.cursor
			})
		})
	}

	render() {
		return (
			<div className="App">
				<Login onLogin={this.onLogin} />
				<ContestList contests={this.state.contests} user={this.state.user} />
			</div>
		)
	}
}

export default App
