import React, { Component } from 'react'
import Header from './Header'
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
      <div>
        <Header onLogin={this.onLogin} />
				<ContestList contests={this.state.contests} user={this.state.user} token={this.state.token} />
			</div>
		)
	}
}

export default App
