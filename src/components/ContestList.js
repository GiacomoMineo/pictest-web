import React, { Component } from 'react'
import ContestListItem from './ContestListItem'

class ContestList extends Component {
	render() {
		var contests = this.props.contests.map(contest => {
			return <ContestListItem key={contest.id} contest={contest} user={this.props.user} token={this.props.token} />
		})

		return <ul>{contests}</ul>
	}
}

export default ContestList
