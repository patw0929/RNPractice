import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from './AppNavigator';

class App extends Component {
  render() {
    return (
      <AppNavigator
        navigation={
          addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
          })
        }
      />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(App);
