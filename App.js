/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
// import Index from './study/index-bak';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './study/pages/homeScreen';
import ViewScreen from './study/pages/viewScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: ViewScreen,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      textAlign: 'center',
    },
    headerTintColor: '#333',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
