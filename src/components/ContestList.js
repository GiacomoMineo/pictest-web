import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import ContestListItem from './ContestListItem'

class ContestList extends Component {
	render() {
		var contests = this.props.contests.map(contest => {
			return (
				<ContestListItem
					key={contest.id}
					contest={contest}
					user={this.props.user}
					jwt={this.props.jwt}
				/>
			)
		})

		return (
			<Grid item xs={12}>
				<ul>{contests}</ul>
			</Grid>
		)
	}
}

export default ContestList
