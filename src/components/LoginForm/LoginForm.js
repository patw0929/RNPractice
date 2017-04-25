import React, { Component } from 'react';
import { Text } from 'react-native';
import Button from '../Button/Button';
import Card from '../Card/Card';
import CardSection from '../Card/CardSection';
import Input from '../Input/Input';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  handleChangeEmail = (email) => {
    this.setState({ email });
  }

  handleChangePassword = (password) => {
    this.setState({ password });
  }

  handleLogin = () => {
    const { email, password } = this.state;

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

        <Text>
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
