import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import Button from '../Button/Button';
import Card from '../Card/Card';
import CardSection from '../Card/CardSection';
import Input from '../Input/Input';

const styles = {
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
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
  }

  handleChangeEmail = (email) => {
    this.setState({ email });
  }

  handleChangePassword = (password) => {
    this.setState({ password });
  }

  handleLogin = () => {
    const { email, password } = this.state;

    this.setState({ error: '' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        // Seems that there is no this account
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            // Failed to create a new account
            this.setState({
              error: 'Authentication Failed.',
            });
          });
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={ this.handleChangeEmail }
            label="Email"
            value={ this.state.email }
            placeholder="user@mail.com"
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={ this.handleChangePassword }
            label="Password"
            placeholder="password"
            value={ this.state.password }
            secureTextEntry
          />
        </CardSection>

        <Text style={ styles.errorText }>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={ this.handleLogin }>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}
