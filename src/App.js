import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }

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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loggedIn: true,
        });
      } else {
        this.setState({
          loggedIn: false,
        });
      }
    });
  }

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
