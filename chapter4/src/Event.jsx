import { Component } from 'react';

class Event extends Component {
  state = {
    username: '',
    message: '',
  };

  /*  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  } */

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>event practice</h1>
        <input
          type="text"
          name="username"
          placeholder="user"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="message"
          placeholder="msg"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>OK</button>
      </div>
    );
  }
}

export default Event;
