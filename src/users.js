import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: []
    };
  }
  renderUsers() {
    console.log(this.state.array);
    return _.map(this.state.array, item => {
      return (
        <li className="list-group-item" key={item.login}>
          {item.login}
        </li>
      );
    });
  }
  componentWillReceiveProps() {
    axios
      .get(
        'https://api.github.com/search/users?q=location:bangalore&page=' +
          this.props.button_no.toString() +
          '&per_page=100'
      )
      .then(({ data }) => {
        console.log(data.items.login);
        this.setState({ array: data.items });
      })
      .catch(err => {});
  }

  render() {
    return <ul className="list-group">{this.renderUsers()}</ul>;
  }
}
