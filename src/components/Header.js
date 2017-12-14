import React, { Component } from 'react'
import { Button, Grid } from 'material-ui'
import Login from './Login'
import '../styles/build/header.css'

class Header extends Component {
  render() {
    return (
      <Grid item xs={12}>
        <div className="authorization-menu">
          {this.props.user ?
            <span>{JSON.stringify(this.props.user)}</span>
            : <Button className="login-btn" onClick={this.props.toggleLoginPanel}>Login</Button>}
            {this.props.showLoginPanel && <Login onLogin={this.props.onLogin} />}
        </div>
      </Grid>
    )
  }
}

export default Header