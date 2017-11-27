import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Login from './Login'

class Header extends Component {
  render() {
    return (
      <Grid item xs={12}>
        <Login onLogin={this.props.onLogin} />
      </Grid>
    );
  }
}

export default Header;