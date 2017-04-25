import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <View>
        <Header title="Authentication" />
        <Text>Hello World</Text>
      </View>
    );
  }
}

export default App;
