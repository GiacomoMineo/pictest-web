import React, { Component } from 'react'
import Vote from './Vote'

class PictureListItem extends Component {
	constructor(props) {
		super(props)

		this.state = {
			votes: props.picture.votes
		}
	}

	onVote = pictureId => {
		this.setState(state => {
			return { votes: state.votes + 1 }
		})

		this.props.onVote(pictureId)
	}

	render() {
		return (
			<div>
				{JSON.stringify(this.props.picture)}
				<div>
					<span>Votes: </span>
					<span>{this.state.votes}</span>
				</div>
				{!this.props.userVoted && (
					<Vote onVote={this.onVote} pictureId={this.props.picture.id} />
				)}
			</div>
		)
	}
}

export default PictureListItem
