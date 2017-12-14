import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Header from './Header'
import ContestList from './ContestList'
import AuthenticationActions from './../actions/AuthenticationActions'
import ContestActions from './../actions/ContestActions'
import EventsService from '../services/eventsService'

import '../styles/build/app.css'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			jwt: null,
      user: null,
      showLoginPanel: false,
      contests: []
		}
	}

	onLogin = (user, jwt) => {
		this.setState({
			user: user,
      jwt: jwt,
      showLoginPanel: false
		})
  }
  
  toggleLoginPanel = (e) => {
    this.setState((state) => {
      return {
        showLoginPanel: !state.showLoginPanel
      }
    })
  }

  componentWillMount() {
    console.log(AuthenticationActions.isLogged())
  }

	componentDidMount() {
		ContestActions.list().then(contestsResponse => {
			this.setState({
				contests: contestsResponse.contests,
				cursor: contestsResponse.cursor
			})
    })
    
    EventsService.onUnauthorized(() => {
      this.setState({
        showLoginPanel: true
      })
    })
  }

	render() {
		return (
			<Grid container className="container">
        <Header
          user={this.state.user}
          toggleLoginPanel={this.toggleLoginPanel}
          showLoginPanel={this.state.showLoginPanel}
          onLogin={this.onLogin}
        />
				<ContestList
					contests={this.state.contests}
					user={this.state.user}
					jwt={this.state.jwt}
				/>
			</Grid>
		)
	}
}

export default App
