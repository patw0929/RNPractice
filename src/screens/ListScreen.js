import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Card from '../components/Card/Card';
import CardSection from '../components/Card/CardSection';
import Button from '../components/Button/Button';

export default class ListScreen extends Component {
  static navigationOptions = {
    title: 'React App',
  };

  componentDidMount() {
    this.props.loadAlbums();
  }

  handleLogin = () => {
    const { navigate } = this.props.navigation;

    navigate('Login');
  }

  renderAlbums() {
    const { albums } = this.props;

    if (!albums) return null;

    return albums.map((album) => {
      return (
        <Card key={ album.title }>
          <CardSection>
            <Text>{album.title}</Text>
          </CardSection>
        </Card>
      );
    });
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <ScrollView>
              {this.renderAlbums()}
            </ScrollView>
          </CardSection>

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
