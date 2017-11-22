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

	render() {
		return (
			<div>
				{this.props.contest.topic}
				<AddPicture contest={this.props.contest.id} />
				<PictureList pictures={this.state.pictures} user={this.props.user} />
			</div>
		)
	}
}

export default ContestListItem
