import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import { addNavigationHelpers } from 'react-navigation';
import firebase from 'firebase';
import configureStore from './store/configureStore';
import AppNavigatorContainer from './AppNavigatorContainer';

const store = configureStore({});

class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AppNavigatorContainer />
      </Provider>
    );
  }
}

export default Root;
