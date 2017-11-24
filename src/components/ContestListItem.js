import React, { Component } from 'react'
import AddPicture from './AddPicture'
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
			<div>
				{this.props.contest.topic}
				<AddPicture contest={this.props.contest.id} />
				<PictureList
					pictures={this.state.pictures}
					userVoted={userVoted}
					onVote={this.onVote}
				/>
			</div>
		)
	}
}

export default ContestListItem
