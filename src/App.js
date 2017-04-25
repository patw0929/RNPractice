import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import CardSection from './components/Card/CardSection';
import Button from './components/Button/Button';
import LoginForm from './components/LoginForm/LoginForm';
import Spinner from './components/Spinner/Spinner';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: null,
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

  handleLogoutButton = () => {
    firebase.auth().signOut();
  }

  renderAuthUI() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={ this.handleLogoutButton }>
                Logout
              </Button>
            </CardSection>
          </Card>
        );

      case false:
        return (
          <LoginForm />
        );

      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        { this.renderAuthUI() }
      </View>
    );
  }
}

export default App;
