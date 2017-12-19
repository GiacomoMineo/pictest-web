import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Vote from './Vote'
import '../styles/build/pictureListItem.css'

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
			<Grid item lg={4} xs={12}>
        <div className="picture-wrapper">
          <img alt={this.props.picture.caption} src={this.props.picture.url} className="picture" />
          <div className="votes-wrapper">
            <span>Votes: </span>
            <span>{this.state.votes}</span>
          </div>
          {!this.props.userVoted && (
            <Vote onVote={this.onVote} pictureId={this.props.picture.id} />
          )}
        </div>
			</Grid>
		)
	}
}

export default PictureListItem
