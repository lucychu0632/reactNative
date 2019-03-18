import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default class CodeViewCard extends Component {

  constructor(props, context) {
    super(props, context);
    // this._onForward = this._onForward.bind(this);
    // this._onBack = this._onBack.bind(this);
  }
  setComponent=(customComponent)=>{
    return (
      <View style={styles.content}>
        {customComponent }
      </View>
    )
  }
  render() {
    const { componentName,customComponent } = this.props;
    return (
      <View style={styles.container}>
        {this.setComponent(customComponent)}
        <View style={styles.info}>
          <Text style={styles.textInfo}>
            {componentName}
          </Text>
          <View style={styles.detailInfo}>
            <Text style={styles.desc}>
              创建了一个 View，包含了两个有颜色的方块和一个自定义的组件，并且设置了一个内边距
            </Text>
            <Text>查看源码</Text>
          </View>
          <Text>
            {
              `${customComponent}`
            }
          </Text>
        </View>
      </View>
    );
  }
}



