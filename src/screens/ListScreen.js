import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Card from '../components/Card/Card';
import CardSection from '../components/Card/CardSection';
import Button from '../components/Button/Button';

export default class ListScreen extends Component {
  static navigationOptions = {
    title: 'React App',
  };

  handleLogin = () => {
    const { navigate } = this.props.navigation;

    navigate('Login');
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Button
              onPress={ this.handleLogin }
            >
              Login
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}
