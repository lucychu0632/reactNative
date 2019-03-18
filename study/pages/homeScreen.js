/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SectionList, StyleSheet, View, Text, WebView } from 'react-native';
import { componentsList } from '../mock/componentsList';
import {commonStyle} from '../themes/commonStyle';

export default class HomeScreen extends Component<Props> {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    headerStyle: {
     display: 'none'
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          renderItem={({ item, index, section }) =>
            <View style={styles.groupColumn} key={index}>
              <Text  onPress={()=>this.props.navigation.navigate('Details',{name:'ViewComponent'})}>{item.name}</Text>
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
    backgroundColor: commonStyle.pageColor,
    paddingTop:commonStyle.navStatusBarHeight,
  },
  groupHeader: {
    flex: 1,
    backgroundColor: commonStyle.groupBgColor,
    color: commonStyle.groupFontColor,
    paddingHorizontal: commonStyle.paddingNormal,//相同于同时设置paddingLeft和paddingRight
    paddingVertical: commonStyle.paddingNormal,//相同于同时设置paddingTop和paddingBottom
    borderBottomWidth: commonStyle.borderWidthSmall,
    borderColor: commonStyle.borderColor,
  },
  groupColumn: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomWidth: commonStyle.borderWidthSmall,
    borderColor: commonStyle.borderLightColor,
    padding: commonStyle.paddingNormal,
    fontWeight: commonStyle.fontWeightBold
  },
  desc:{
    fontSize:commonStyle.fontSizeSmall,
    color:commonStyle.gray,
    marginTop:commonStyle.marginSmall,
    fontWeight: commonStyle.fontWeightNormal
  }
});
