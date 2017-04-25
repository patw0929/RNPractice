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
    };
  }

  handleChangeEmail = (text) => {
    this.setState({ email: text });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={ this.handleChangeEmail }
            label="Email"
            placeholder="user@mail.com"
          />
        </CardSection>

        <CardSection>
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
