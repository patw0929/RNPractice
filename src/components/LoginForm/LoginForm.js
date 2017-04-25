import React, { Component } from 'react';
import { View } from 'react-native';
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
    };
  }

  handleChangeEmail = (email) => {
    this.setState({ email });
  }

  handleChangePassword = (password) => {
    this.setState({ password });
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

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}
