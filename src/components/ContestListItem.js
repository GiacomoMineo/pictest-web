import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import ContestHeader from './ContestHeader'
import PictureList from './PictureList'

import PictureActions from '../actions/PictureActions'

class ContestListItem extends Component {
	constructor(props) {
		super(props)

		this.state = {
			pictures: []
		}
	}

	componentDidMount() {
		PictureActions.list(this.props.contest.id).then(picturesResponse => {
			this.setState({
				pictures: picturesResponse.pictures
			})
		})
	}

	onVote = pictureId => {
		PictureActions.vote(pictureId, this.props.token).then(voteResponse => {
			console.log(voteResponse)
		})
	}

	render() {
		var userVoted = this.props.user
			? this.props.contest.voters.includes(this.props.user.id)
			: true

		return (
			<Grid container>
				<ContestHeader contest={this.props.contest} />
				<PictureList
					pictures={this.state.pictures}
					userVoted={userVoted}
					onVote={this.onVote}
				/>
			</Grid>
		)
	}
}

export default ContestListItem
