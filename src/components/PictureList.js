import React, { Component } from 'react'
import PictureListItem from './PictureListItem'

class PictureList extends Component {
	render() {
		var pictures = this.props.pictures.map(picture => {
			return (
				<PictureListItem
					key={picture.id}
					picture={picture}
					userVoted={this.props.userVoted}
					onVote={this.props.onVote}
				/>
			)
		})

		return <ul>{pictures}</ul>
	}
}

export default PictureList
