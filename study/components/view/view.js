/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ViewColoredBoxesWithText extends Component {
  constructor(props){
    super(props)
    this.getHtml=this.getHtml.bind(this);
  }
  componentDidMount(){
    this.getHtml()
  }
  getHtml(){
    console.log(this.viewContent)
    // return this.element.innerHTML
  }
  // set html(value){
  //   this.element.innerHTML = value;
  // }
  render() {

    return (
      <View ref={ref=>this.viewContent=ref}
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20
        }}
      >
        <View style={{ backgroundColor: "blue", flex: 0.3, }} />
        <View style={{ backgroundColor: "red", flex: 0.5 }} />
        <Text>Hello World!</Text>
      </View>
    );
  }
}

