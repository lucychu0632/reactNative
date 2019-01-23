/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform,SectionList, StyleSheet, View, Text } from 'react-native';
import { componentsList } from './mock/componentsList';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class Index extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          renderItem={({ item, index, section }) =>
            <View style={styles.groupColumn} key={index}>
              <Text>{item.name}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.groupHeader}><Text>{title}</Text></View>
          )}
          sections={componentsList}
          keyExtractor={(item, index) => item+index}
        />
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
  groupHeader: {
    flex: 1,
    backgroundColor: '#e6f7ff',
    color: '#1890ff',
    paddingHorizontal: 10,//相同于同时设置paddingLeft和paddingRight
    paddingVertical: 10,//相同于同时设置paddingTop和paddingBottom
    borderBottomWidth: 1,
    borderColor: '#d2d2d2',
  },
  groupColumn: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#d2d2d2',
    padding: 10,
    fontWeight: '700'
  },
  desc:{
    fontSize:12,
    color:'#ccc',
    marginTop:5,
    fontWeight: '400'
  }
});
