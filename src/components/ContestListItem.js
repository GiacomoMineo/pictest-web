import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import ContestHeader from './ContestHeader'
import PictureList from './PictureList'

import PictureActions from '../actions/PictureActions'

class ContestListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pictures: [],
      userVoted: this.props.user ? this.props.contest.voters.includes(this.props.user.id) : true
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ userVoted: nextProps.user ? nextProps.contest.voters.includes(nextProps.user.id) : true })
  }

  componentDidMount() {
    PictureActions.list(this.props.contest.id).then(picturesResponse => {
      this.setState({
        pictures: picturesResponse.pictures
      })
    })
  }

  onVote = pictureId => {
    PictureActions.vote(pictureId, this.props.jwt).then(voteResponse => {
      this.setState({
        userVoted: true
      })
    })
  }

  render() {
		return (
      <Grid container>
        <ContestHeader contest={this.props.contest} />
        <PictureList
          pictures={this.state.pictures}
          userVoted={this.state.userVoted}
          onVote={this.onVote}
        />
      </Grid>
    )
  }
}

export default ContestListItem
