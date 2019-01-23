import React, { Component } from 'react';
// import  PropTypes  from 'prop-types';
import { NavigatorIOS } from 'react-native';
export default class NavigatorIOSApp extends Component {
  // static defaultProps={
  //   component:{}
  // }
  render() {
    console.log(this.props)
    return (
      <NavigatorIOS
        initialRoute={{
          component: this.props.component,
          title: this.props.componentName,
        }}
        style={{flex: 1}}
      />
    );
  }
}