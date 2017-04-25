import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Card from '../components/Card/Card';
import CardSection from '../components/Card/CardSection';
import Button from '../components/Button/Button';
import LoginForm from '../components/LoginForm/LoginForm';
import Spinner from '../components/Spinner/Spinner';
import '../utils/firebase';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: null,
    };
  }

  componentWillMount() {
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
        { this.renderAuthUI() }
      </View>
    );
  }
}

export default LoginScreen;
