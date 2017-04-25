import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';

class App extends Component {
  render() {
    return (
      <View>
        <Header title="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
