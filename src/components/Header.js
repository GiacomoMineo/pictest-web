import React, { Component } from 'react'
import Login from './Login'

class Header extends Component {
  render() {
    return (
      <div>
        <Login onLogin={this.props.onLogin} />
      </div>
    );
  }
}

export default Header;