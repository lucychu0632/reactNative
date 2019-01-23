/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform,SectionList, StyleSheet, View, Text } from 'react-native';
import {CodeViewCard} from '../../components/common/codeViewCard'
import { ViewColoredBoxesWithText } from '../../components/view/view'
type Props = {};
export default class ViewComponents extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>作为创建 UI 时最基础的组件，View 是一个支持 Flexbox 布局、样式、一些触摸处理、和一些无障碍功能的容器，并且它可以放到其它的视图里，也可以有任意多个任意类型的子视图。不论在什么平台上，View 都会直接对应一个平台的原生视图，无论它是 UIView还是 android.view.View。下面的例子创建了一个 View，包含了两个有颜色的方块和一个自定义的组件，并且设置了一个内边距：</Text>
        {/*<CodeViewCard customComponent={ViewColoredBoxesWithText} componentName={'View基础用法'} />*/}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop:(Platform.OS === 'ios')?20:0,
  },
});
