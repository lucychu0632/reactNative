import {Platform } from 'react-native';
export const commonStyle={
  //color
  gray:'#ccc',
  themeColor:'#e74c3c',
  pageColor:'#fff',
  //分组头部背景色
  groupBgColor:'#e6f7ff',
  groupFontColor:'#1890ff',
  // 默认灰色字体颜色
  textGrayColor: '#989898',
  // 默认黑色字体颜色
  textBlockColor: '#262626',
  // 默认背景颜色
  bgColor: '#E6E6E6',
  // 默认分割线颜色
  lineColor: '#E6E6E6',
  // 默认placeholder颜色
  placeholderColor: '#eee',
  // borderColor
  borderColor: '#808080',
  borderLightColor: '#d2d2d2',
  // 导航title 颜色
  navTitleColor: '#262626',
  // 导航左item title color
  navLeftTitleColor: '#333',
  // 导航右item title color
  navRightTitleColor: '#333',
  navThemeColor: '#FEFEFE',
  iconGray: '#989898',
  iconBlack: '#262626',

  /** space **/
  marginSmall:5,
  marginNormal:10,
  marginLarge:15,
  // 内边距
  paddingSmall:5,
  paddingNormal:10,
  paddingLarge:15,

  // 边框线宽度
  borderWidthSmall: 1,
  borderWidthNormal: 2,
  borderWidthLarger: 3,
  // 分割线高度
  lineWidth: 0.8,
  // 导航栏顶部的状态栏高度
  navStatusBarHeight: Platform.OS === 'ios' ? 50 : 0,

  fontSizeSmall: 12,
  fontSizeNormal: 14,
  fontSizeLarger: 16,

  fontWeightNormal:'400',
  fontWeightMedium:'500',
  fontWeightBold:'700',

  paragraph:{
    marginBottom: 10,
    fontSize:14,
    lineHeight:20
  },
  container:{
    backgroundColor:'#fff',
    padding:5,
  }
}