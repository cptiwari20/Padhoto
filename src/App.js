import React, {Component} from 'react';
import { View} from 'react-native';
import {Header} from './components/commons/index';
import LoginPage from './components/LoginPage';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText='Padhoto'/>
        <LoginPage />
      </View>
    );
  }
}
