import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Header from './components/Header/Header';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyC8IIzKU2evHnf6_45X93orOe_1ui_Fbu8',
      authDomain: 'rn-auth-practice.firebaseapp.com',
      databaseURL: 'https://rn-auth-practice.firebaseio.com',
      projectId: 'rn-auth-practice',
      storageBucket: 'rn-auth-practice.appspot.com',
      messagingSenderId: '130095734410',
    };

    firebase.initializeApp(config);
  }

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
