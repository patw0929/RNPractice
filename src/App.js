import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';
import ListScreen from './screens/ListScreen';
import LoginScreen from './screens/LoginScreen';

const App = StackNavigator({
  List: {
    screen: ListScreen,
  },
  Login: {
    screen: LoginScreen,
  },
});

export default App;
