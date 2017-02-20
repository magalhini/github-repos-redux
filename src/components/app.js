import React, { Component } from 'react';
import UserInfo from '../containers/UserInfo';
import Search from '../containers/Search';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div className="container__github">
          <Header/>
          <Search />
          <UserInfo />
      </div>
    );
  }
}
