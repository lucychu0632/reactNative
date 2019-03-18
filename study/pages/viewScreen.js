/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text,ScrollView } from 'react-native';
import { commonStyle } from '../themes/commonStyle';
import WebViewScreen  from '../components/common/webViewComponent';
// import {ViewDemo} from '../components/view/view'
const ViewDemo =  <View
    style={{
      flexDirection: "row",
      height: 100,
      padding: 20
    }}
  >
    <View style={{
      backgroundColor: "blue",
      flex: 0.3
    }}/>
    <View style={{
      backgroundColor: "red",
      flex: 0.5
    }}/>
    <Text>Hello World!</Text>
  </View>
export default class ViewScreen extends Component<Props> {
  static navigationOptions = {
    title: 'ViewComponent'
  };
  state={
    showDemoCode:false
  }

  toggleDemoCode=()=>{
    this.setState({
      showDemoCode:!this.state.showDemoCode
    })
  }

  render() {
    return (
      <ScrollView style={commonStyle.container}>
        <Text style={commonStyle.paragraph}>{'\t'}作为创建 UI 时最基础的组件，View 是一个支持 Flexbox
          布局、样式、一些触摸处理、和一些无障碍功能的容器，并且它可以放到其它的视图里，也可以有任意多个任意类型的子视图。不论在什么平台上，View 都会直接对应一个平台的原生视图，无论它是 UIView还是
          android.view.View。</Text>
        <Text style={commonStyle.paragraph}>
          {'\t'}View 被设计为嵌套在其他视图中，并且可以包含0到多个任何类型的子项。
        </Text>
        <View style={styles.demoContainer}>
          <View style={styles.content}>
            { ViewDemo }
          </View>
          <View style={styles.info}>
            <Text style={styles.textInfo}>
              View基础用法
            </Text>
            <View style={styles.detailInfo}>
              <Text style={styles.desc}>
                创建了一个 View，包含了两个有颜色的方块和一个自定义的组件，并且设置了一个内边距
              </Text>
              <Text onPress={this.toggleDemoCode}>查看源码</Text>
            </View>
          </View>
          {
            this.state.showDemoCode?<ScrollView>
              <WebViewScreen />
            </ScrollView>:null
          }

        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    paddingVertical:20,
    paddingHorizontal:5,
    overflow:'scroll'
  },
  demoContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  content: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
    // backgroundColor: '#000'
  },
  info: {
    padding: 10,
    position: 'relative'
  },
  textInfo: {
    position: 'absolute',
    top: -15,
    left: 10,
    backgroundColor: '#fff',
    padding: 5
  },
  detailInfo: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignContent: 'center',
    justifyContent: 'space-between'
  },
  desc: {
    fontSize: 12,
    color: '#444',
    lineHeight: 18,
    flex: 2
  },
});